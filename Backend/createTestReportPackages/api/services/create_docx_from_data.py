import pdfkit
from pdf2image import convert_from_path
import os
import shutil
import comtypes.client
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


def replace_placeholders(xml_file_path):
    f = open(xml_file_path, 'r', encoding="UTF-8")
    xml = f.read()
    for key in dict.keys():
        xml = xml.replace(key, dict[key])
    f = open(xml_file_path, "w", encoding="UTF-8")
    f.write(xml)
    f.close()


def zip_and_convert_to_docx(dst):
    shutil.make_archive(dst + "/test_report", 'zip', dst)
    os.rename(dst + '/test_report.zip', dst + '/test_report.docx')

def doc_to_pdf(in_file,out_file):
    word = comtypes.client.CreateObject('Word.Application')
    doc = word.Documents.Open(in_file)
    doc.SaveAs(out_file, FileFormat=wdFormatPDF)
    doc.Close()
def pdf_to_image_pdf(out_file):
    pages = convert_from_path(out_file)
    pages[0].save(out_file, save_all=True, append_images=pages[1:])

src = "D:/tryandtest"
dst = "D:/temp/guid1"
copytree(src, dst)
xml_file_path = dst + r"/word/document.xml"

path = dst + '/word'
for filename in os.listdir(path):
    if not filename.endswith('.xml'): continue
    fullname = os.path.join(path, filename)
    replace_placeholders(fullname)
zip_and_convert_to_docx(dst)
in_file = dst + '/test_report.docx'
out_file =  dst + '/test_report.pdf'
doc_to_pdf(in_file,out_file)
pdf_to_image_pdf(out_file)

# with open(r"C:\Users\aditya.verma\Downloads\Mobile phone completed.html", 'r') as f:
#     html = f.read()
#     f1 = open("demofile3.html", "w")
#     f1.write(html)
#     f1.close()
#     for key in dict.keys():
#         html = html.replace(key, dict[key])
#     config = pdfkit.configuration(wkhtmltopdf="C:\\Program Files\\wkhtmltopdf\\bin\\wkhtmltopdf.exe")
#     options = {
#         'page-size': 'A4',
#         'encoding': 'utf-8',
#         'margin-top': '0cm',
#         'margin-bottom': '0cm',
#         'margin-left': '0cm',
#         'margin-right': '0cm'
#     }
#     pdfkit.from_string(html, 'out.pdf', configuration=config, options=options)
#     pages = convert_from_path('out.pdf')
#     pages[0].save("out1.pdf", save_all=True, append_images=pages[1:])
