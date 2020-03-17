from pdf2image import convert_from_path
import os
import shutil
import pythoncom
import win32com.client
import uuid
from createTestReportPackages.parser import CONFIG


wdFormatPDF = 17

dict = {
    "#@TESTREPORTNO@#": "123456",
    "#@ISSUEDATE@#": "10-11-2019",
    "#@URI@#": "765678",
    "#@MANUFACTURER@#": "NOKIA",
    "#@IDENTIFICATION@#": "ABCDEFGH",
    "#@SERIALNO@#": "987654",
    "#@RECIPTNO@#": "8793247",
    "#@DATEOFRECIPT@#": "1-2-2020",
    "#@TESTENGINEERDATED@#": "2-2-2020",
    "#@HODDATED@#": "2-2-2020",
    "#@BDHDATED@#": "2-2-2020",
}


def copytree(src, dst, symlinks=False, ignore=None):
    for item in os.listdir(src):
        s = os.path.join(src, item)
        d = os.path.join(dst, item)
        if os.path.isdir(s):
            shutil.copytree(s, d, symlinks, ignore)
        else:
            shutil.copy2(s, d)


def replace_placeholders(xml_file_path, form_data):
    print(form_data)
    f = open(xml_file_path, 'r', encoding="UTF-8")
    xml = f.read()
    for key in form_data.keys():
        xml = xml.replace(key, form_data[key])
    f = open(xml_file_path, "w", encoding="UTF-8")
    f.write(xml)
    f.close()


def zip_and_convert_to_docx(dst):
    shutil.make_archive(dst + "/test_report", 'zip', dst)
    os.rename(dst + '/test_report.zip', dst + '/test_report.docx')


def doc_to_pdf(in_file, out_file):
    pythoncom.CoInitialize()
    word = win32com.client.Dispatch('Word.Application')
    doc = word.Documents.Open(in_file)
    doc.SaveAs(out_file, FileFormat=wdFormatPDF)
    doc.Close()


def pdf_to_image_pdf(out_file, img_pdf_path):
    pages = convert_from_path(out_file)
    pages[0].save(img_pdf_path, save_all=True, append_images=pages[1:])


def create_pdf(form_data):
    src = CONFIG["unZippedDocxPath"]
    dst = CONFIG["tempFolder"] + str(uuid.uuid4())
    copytree(src, dst)
    path = dst + '/word'
    for filename in os.listdir(path):
        if not filename.endswith('.xml'): continue
        fullname = os.path.join(path, filename)
        replace_placeholders(fullname, form_data)
    zip_and_convert_to_docx(dst)
    in_file = dst + '/test_report.docx'
    out_file = dst + '/test_report.pdf'
    img_pdf_path = dst + '/test_report_img.pdf'
    doc_to_pdf(in_file, out_file)
    pdf_to_image_pdf(out_file, img_pdf_path)