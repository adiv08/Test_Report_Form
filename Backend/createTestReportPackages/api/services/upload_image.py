import threading
from time import time

from flask_restplus import fields

from createTestReportPackages.api import api_response
from createTestReportPackages.api import custom_fields
from createTestReportPackages.database.operations.tagging import fetch_primary_key
from createTestReportPackages.parser import CONFIG
from createTestReportPackages.utils import platform_exception as exp
from createTestReportPackages.utils.platform_logging import tagging_logger
from createTestReportPackages.pipelines import image_operations

URL = '/ifill/tagger/upload-image'

request_fields = {
    "image": fields.String('Base64 String of Image', required=True),
    "templateId": fields.String('Template ID', required=True),
    "clientId": fields.String('Client ID', required=True),
    "isEditable": custom_fields.NullableString('Is Editable', required=True)
}


def func(request_json):
    """
    API entrypoint of upload-image

    :param request_json: api payload json
    :return:text response
    """
    start_time = time()
    template_id = request_json['templateId']
    client_id = request_json['clientId']
    image = request_json['image']
    is_editable = request_json['isEditable']
    overwrite = int(CONFIG['allowOverwriteTemplate'])
    if is_editable == "edit":
        overwrite = 1
    try:
        tagging_logger.info(f"API START : UPLOAD IMAGE :: TEMPLATE_ID - {template_id} ")
        client_id = fetch_primary_key.client_id(client_id)
        image_operations.upload_image_api(image=image, template_id=template_id,
                                          client_id=client_id, overwrite=overwrite)
        ocr_thread = threading.Thread(target=image_operations.extract_data_from_ocr,
                                      args=(image, template_id, client_id))
        ocr_thread.start()
        response = api_response.text_response("Successfully uploaded image", api_response.HTTP_SUCCESS_STATUS_CODE)
        end_time = time()
        tagging_logger.info(
            f"API SUCCESSFUL : UPLOAD IMAGE :: TEMPLATE_ID - {template_id} : Total Time - {end_time - start_time}")
        return response
    except exp.PlatformException as e:
        response = api_response.text_response(e.custom_message, api_response.HTTP_FAILURE_STATUS_CODE)
        end_time = time()
        tagging_logger.exception(
            f"API FAILED : UPLOAD IMAGE :: TEMPLATE_ID - {template_id} : ERROR - {e.custom_message} : "
            f"Total Time - {end_time - start_time}")
        return response

    except Exception as e:
        response = api_response.text_response(str(e), api_response.HTTP_FAILURE_STATUS_CODE)
        end_time = time()
        tagging_logger.exception(
            f"API FAILED : UPLOAD IMAGE :: TEMPLATE_ID - {template_id} : ERROR - {str(e)} : "
            f"Total Time - {end_time - start_time}")
        return response
