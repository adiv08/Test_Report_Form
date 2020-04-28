import ast
import threading
import json
from time import time
from flask_restplus import fields
from createTestReportPackages.api import api_response
from createTestReportPackages.parser import CONFIG
from createTestReportPackages.utils import platform_exception as exp
from createTestReportPackages.utils.platform_logging import tagging_logger
from createTestReportPackages.pipelines import create_docx_from_data
from createTestReportPackages.model import ReportsData

URL = '/test-report-generator/update-status'

request_fields = {
    "report_name": fields.String('Name of the report to be updated', required=True),
    "access_code": fields.String('access code of the authority', required=True),
    "authority_name": fields.String('Name of the approving authority', required=True)
}


def func(request_json):
    """
    API entrypoint of upload-image

    :param request_json: api payload json
    :return:text response
    """
    start_time = time()
    try:
        tagging_logger.info(f"API START : UPLOAD IMAGE :: TEMPLATE_ID - ")
        report_name = request_json["report_name"]
        access_code = request_json["access_code"]
        authority_name = request_json["authority_name"]
        if authority_name == "ApprovedSatatus1" and access_code == "1234" or authority_name == "ApprovedSatatus2" and access_code == "3456" or authority_name == "ApprovedSatatus3" and access_code == "7910":
            report_data = ReportsData.ReportsData()
            report_data.REPORT_FILE_DATA_FRAME.loc[
                report_data.REPORT_FILE_DATA_FRAME.ReportName == report_name, authority_name] = "Approved"
            import pandas as pd
            pd.to_pickle(report_data.REPORT_FILE_DATA_FRAME,
                         "reportFileDataframe.pkl")
        response_data = "ok"
        end_time = time()
        tagging_logger.info(
            f"API SUCCESSFUL :: Total Time - {end_time - start_time}")
        return response_data
    except exp.PlatformException as e:
        response = api_response.text_response(e.custom_message, api_response.HTTP_FAILURE_STATUS_CODE)
        end_time = time()
        tagging_logger.exception(
            f"API FAILED : UPLOAD IMAGE :: TEMPLATE_ID -  : ERROR - {e.custom_message} : "
            f"Total Time - {end_time - start_time}")
        return response

    except Exception as e:
        response = api_response.text_response(str(e), api_response.HTTP_FAILURE_STATUS_CODE)
        end_time = time()
        tagging_logger.exception(
            f"API FAILED : UPLOAD IMAGE :: TEMPLATE_ID -  : ERROR - {str(e)} : "
            f"Total Time - {end_time - start_time}")
        return response
