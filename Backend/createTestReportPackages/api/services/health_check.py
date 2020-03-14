from createTestReportPackages.api import api_response
from createTestReportPackages.parser import DATABASE_OBJ

URL = '/ifill/health'


def func():
    """
    API entrypoint of health

    :return:
    """
    try:
        _ = DATABASE_OBJ.get_connection()
        database_health = "OK"
    except Exception as e:
        database_health = "Critical"
    json = {
        "database health": database_health
    }
    response = api_response.json_response(json, api_response.HTTP_SUCCESS_STATUS_CODE)
    return response
