import pandas as pd
from flask_restplus import fields
import os
import uuid
import pythoncom
import win32com.client
from pdf2image import convert_from_path
import cv2
import numpy as np
from PIL import Image
import pickle
import fitz
from shutil import copyfile

from createTestReportPackages.model.MailService import MailService
from createTestReportPackages.parser import CONFIG
import datetime
import json
from createTestReportPackages.model import ReportsData
from createTestReportPackages.utils.helper_utilities import write_report_in_dir

wdFormatPDF = 17

URL = '/test-report-generator/create-report-from-doc'

request_fields = {
    "report_file_path": fields.String('File path of the report', required=True),
    "test_engineer_name": fields.String('Test engineer name', required=True),
    "report_file_name": fields.String('Report file name', required=True)
}


def doc_to_pdf(in_file, out_file):
    pythoncom.CoInitialize()
    word = win32com.client.Dispatch('Word.Application')
    doc = word.Documents.Open(in_file)
    doc.SaveAs(out_file, FileFormat=wdFormatPDF)
    doc.Close()


def pdf_to_image_pdf(out_file, img_pdf_path, test_engineer_name, test_engineer_dict):
    new_pixmap_list = get_all_pixmap(out_file)
    BDH_atamp_pixmap = get_pix_map_for_BDH(out_file)
    test_engineer_sign = get_pix_map_for_test_engineer(out_file, test_engineer_name, test_engineer_dict)
    letterhead = get_letterhead("letterhead.pickle")
    pages = convert_from_path(out_file, 200)
    newPage = []
    for i, page in enumerate(pages):
        open_cv_image = np.array(page)
        pixmap = new_pixmap_list[i]
        for pixel in pixmap.keys():
            open_cv_image[pixel[0], pixel[1]] = pixmap[pixel]
        pixmap = BDH_atamp_pixmap[i]
        for pixel in pixmap.keys():
            open_cv_image[pixel[0], pixel[1]] = pixmap[pixel]
        pixmap = test_engineer_sign[i]
        for pixel in pixmap.keys():
            open_cv_image[pixel[0], pixel[1]] = pixmap[pixel]
        pixmap = letterhead["pixmap"]
        for pixel in pixmap.keys():
            try:
                open_cv_image[pixel[0], pixel[1]] = pixmap[pixel]
            except Exception as e:
                continue
        newPage.append(Image.fromarray(open_cv_image))
    newPage[0].save(img_pdf_path, save_all=True, append_images=newPage[1:])


def get_pix_map_for_test_engineer(out_file, name, test_engineer_dict):
    stamp = get_stamp(test_engineer_dict[name])
    pixmap = stamp["pixmap"]
    stamp_height = stamp["height"]
    stamp_widht = stamp["width"]
    doc = fitz.open(out_file)
    page = doc[0]
    Y = 2339
    X = 1654
    scalex = X / page.MediaBox[2]
    scaley = Y / page.MediaBox[3]
    print(scalex, scaley)
    new_pixmap_list = []
    for page in doc:
        text = name
        text_instances = page.searchFor(text)
        if (text_instances):
            new_pix_map = {}
            dx = int((text_instances[0][0] * scalex) - (1 * stamp_widht) / 6)
            dy = int((text_instances[0][1] * scaley) - (stamp_height * 1.1))
            for key in pixmap.keys():
                new_pix_map[key[0] + dy, key[1] + dx] = pixmap[key]
            new_pixmap_list.append(new_pix_map)
        else:
            new_pixmap_list.append({})
    return new_pixmap_list


def get_pix_map_for_BDH(out_file):
    stamp = get_stamp("stampBDH.pickle")
    pixmap = stamp["pixmap"]
    stamp_height = stamp["height"]
    stamp_widht = stamp["width"]
    doc = fitz.open(out_file)
    page = doc[0]
    Y = 2339
    X = 1654
    scalex = X / page.MediaBox[2]
    scaley = Y / page.MediaBox[3]
    print(scalex, scaley)
    new_pixmap_list = []
    for page in doc:
        text = "Sailesh Chandra Srivastava"
        text_instances = page.searchFor(text)
        if (text_instances):
            new_pix_map = {}
            dx = int((text_instances[0][0] * scalex) - (1 * stamp_widht) / 6)
            dy = int((text_instances[0][1] * scaley) - stamp_height)
            for key in pixmap.keys():
                new_pix_map[key[0] + dy, key[1] + dx] = pixmap[key]
            new_pixmap_list.append(new_pix_map)
        else:
            new_pixmap_list.append({})
    return new_pixmap_list


def get_all_pixmap(out_file):
    stamp = get_stamp("stampHOD.pickle")
    pixmap = stamp["pixmap"]
    stamp_height = stamp["height"]
    stamp_widht = stamp["width"]
    doc = fitz.open(out_file)
    page = doc[0]
    Y = 2339
    X = 1654
    scalex = X / page.MediaBox[2]
    scaley = Y / page.MediaBox[3]
    print(scalex, scaley)
    new_pixmap_list = []
    for page in doc:
        text = "Ajay Kumar Yadav"
        text_instances1 = page.searchFor(text)
        text = "Approving Authority"
        text_instances2 = page.searchFor(text)
        text_instances = text_instances1 + text_instances2
        new_pix_map = {}
        if (text_instances):
            dx = int(text_instances[0][0] * scalex)
            dy = int((text_instances[0][1] * scaley) - (3 * stamp_height) / 4)
        else:
            text1 = page.getText(output='dict')
            maxY = 0
            for box in text1['blocks']:
                boxY = box['bbox'][3]
                if maxY < boxY:
                    try:
                        if not box['lines'][0]['spans'][0]['text'].startswith("TRF No."):
                            maxY = boxY
                    except Exception as e:
                        maxY = boxY
            lastRowHeight = maxY
            dx = X - int(1.2 * stamp_widht)
            new_y = int((lastRowHeight * scaley))
            if new_y >= 2339 - stamp_height:
                dy = Y - int(1.2 * stamp_height)
            else:
                dy = new_y
        for key in pixmap.keys():
            new_pix_map[key[0] + dy, key[1] + dx] = pixmap[key]
        new_pixmap_list.append(new_pix_map)
    return new_pixmap_list


def get_letterhead(stamp_name):
    create_stamp = False
    pixmap = {}
    stamp_height = 0
    stamp_widht = 0
    if create_stamp:
        pages = convert_from_path(r"C:\Users\aditya.verma\Desktop\letterhead.pdf", 200)
        stamp = np.array(pages[0])
        for i in range(stamp.shape[0]):
            for j in range(stamp.shape[1]):
                if not np.array_equal(stamp[i][j], [255, 255, 255]):
                    if i > stamp_height:
                        stamp_height = i
                    if j > stamp_widht:
                        stamp_widht = j
                    pixmap[(i, j)] = stamp[i][j]
        with open(stamp_name, 'wb') as handle:
            stamp = {
                "pixmap": pixmap,
                "height": stamp_height,
                "width": stamp_widht
            }
            pickle.dump(stamp, handle, protocol=pickle.HIGHEST_PROTOCOL)
            return stamp
    else:
        with open(stamp_name, 'rb') as handle:
            return pickle.load(handle)


def get_stamp(stamp_name, pdfPath=""):
    print(stamp_name, pdfPath)
    create_stamp = False
    pixmap = {}
    stamp_height = 0
    stamp_widht = 0
    if create_stamp:
        pages = convert_from_path(pdfPath, 200)
        stamp = np.array(pages[0])
        img = cv2.cvtColor(stamp, cv2.COLOR_BGR2GRAY)
        ret, binarized_image = cv2.threshold(img, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
        for i in range(binarized_image.shape[0]):
            for j in range(binarized_image.shape[1]):
                if binarized_image[i][j] != 255:
                    if i > stamp_height:
                        stamp_height = i
                    if j > stamp_widht:
                        stamp_widht = j
                    pixmap[(i, j)] = stamp[i][j]
        with open(stamp_name, 'wb') as handle:
            stamp = {
                "pixmap": pixmap,
                "height": stamp_height,
                "width": stamp_widht
            }
            pickle.dump(stamp, handle, protocol=pickle.HIGHEST_PROTOCOL)
            return stamp
    else:
        with open(stamp_name, 'rb') as handle:
            return pickle.load(handle)


def func(request_json):
    test_engineer_dict = {
        "Zahid Raza": "zahid_raza_sign.pickle",
        "Ankit Kumar": "ankit_kumar_sign.pickle",
        "Kaushal Kumar": "kaushalsign.pickle",
        "Mohit": "mohit_sign.pickle",
        "Jatin Dalal": "jatin_dalal_sign.pickle",
        "Avishek Kumar": "avishek_kumar_sign.pickle",
        "Parth": "parth_sign.pickle",
        "Tushant": "tushnat_sign.pickle",
        "Isha Sachdev": "isha_sachdev_sign.pickle"
    }
    # get_stamp(test_engineer_dict["Zahid Raza"], r"C:\Users\aditya.verma\Desktop\ZahidSign.pdf")
    # get_stamp(test_engineer_dict["Ankit Kumar"], r"C:\Users\aditya.verma\Desktop\ankitSign.pdf")
    # get_stamp(test_engineer_dict["Mohit"], r"C:\Users\aditya.verma\Desktop\mohitSign.pdf")
    # get_stamp(test_engineer_dict["Jatin Dalal"], r"C:\Users\aditya.verma\Desktop\jatinSign.pdf")
    # get_stamp(test_engineer_dict["Avishek Kumar"], r"C:\Users\aditya.verma\Desktop\reportwala\Avisheksign.pdf")
    # get_stamp(test_engineer_dict["Parth"], r"C:\Users\aditya.verma\Desktop\reportwala\Parthsign.pdf")
    # # get_stamp(test_engineer_dict["Tushant"], r"C:\Users\aditya.verma\Desktop\kaushalsign.pdf")
    # get_stamp(test_engineer_dict["Isha Sachdev"], r"C:\Users\aditya.verma\Desktop\reportwala\ishasign.pdf")
    # get_stamp("stampBDH.pickle", r"C:\Users\aditya.verma\Desktop\reportwala\stamp1.pdf")
    # print("sign created")
    test_engineer_name = request_json.form["test_engineer_name"]
    report_file_name = request_json.form["report_file_name"]
    word_file = request_json.files["report_docx"]
    print(test_engineer_name, word_file, report_file_name)
    document_name = os.path.splitext(report_file_name)[0]
    save_document_path = CONFIG["tempFolder"] + str(document_name)
    os.makedirs(save_document_path)
    in_file = os.path.join(save_document_path, document_name) + '.docx'
    word_file.save(in_file)
    out_file = os.path.join(save_document_path, document_name) + '.pdf'
    img_pdf_path = os.path.join(save_document_path, document_name) + '_img.pdf'
    doc_to_pdf(in_file, out_file)
    status_repost = {"ReportName": document_name, "UploadDate": datetime.datetime.now().strftime("%m/%d/%Y, %H:%M:%S"),
                     "TestEngineerName": test_engineer_name,
                     "ApprovedSatatus1": "unapproved", "ApprovedSatatus2": "unapproved",
                     "ApprovedSatatus3": "unapproved",
                     "ReportApprovedSatatus": "unapproved",
                     "RejectReportMessage": ""}
    report_data = ReportsData.ReportsData()
    pd.to_pickle(report_data.REPORT_FILE_DATA_FRAME.append(status_repost, ignore_index=True), "reportFileDataframe.pkl")
    status_repost = json.dumps(status_repost)
    write_report_in_dir(document_name, status_repost)
    pdf_to_image_pdf(out_file, img_pdf_path, test_engineer_name, test_engineer_dict)
    mail_data = {
        "to": CONFIG["MailTo"],
        "Subject": f"New Report Uploaded {document_name}",
        "body": f"Hi <br/> <b> {test_engineer_name} </b> has uploaded new test report named <b> {document_name} </b> please view it and take necessary action. <br/> Click here to view the report {CONFIG['AppURL']}",
    }
    mailService = MailService()
    mailService.send_mail(mail_data)
