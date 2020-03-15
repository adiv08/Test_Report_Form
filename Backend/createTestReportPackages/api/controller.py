from flask import Flask, Blueprint
from flask_restplus import Resource, Api

from createTestReportPackages.api.api_response import HTTP_SUCCESS_STATUS_CODE, HTTP_FAILURE_STATUS_CODE
from createTestReportPackages.api.services import health_check, create_report
app = Flask(__name__)
blueprint = Blueprint('Test Report Generator API', __name__)
api = Api(blueprint,
          title='Test Report Generator API',
          description="Test Report Generator REST API",
          version="1.0.0",
          default="Test Report Generator",
          default_label="",
          doc="/test-report-generator/swagger",
          validate=True)

app.register_blueprint(blueprint)

create_report_model = api.model('create_report_model', create_report.request_fields)


@api.route(create_report.URL)
class CreateReport(Resource):
    @api.expect(create_report_model)
    @api.response(HTTP_SUCCESS_STATUS_CODE, 'Success')
    @api.response(HTTP_FAILURE_STATUS_CODE, 'Internal Server Error Message')
    def post(self):
        response = create_report.func(api.payload)
        return response


@api.route(health_check.URL)
class HealthCheck(Resource):
    @api.response(HTTP_SUCCESS_STATUS_CODE, 'Return List of Env')
    @api.response(HTTP_FAILURE_STATUS_CODE, 'Internal Server Error Message')
    def get(self):
        response = health_check.func()
        return response


