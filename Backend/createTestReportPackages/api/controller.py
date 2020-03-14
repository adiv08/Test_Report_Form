from flask import Flask, Blueprint
from flask_restplus import Resource, Api

from createTestReportPackages.api.api_response import HTTP_SUCCESS_STATUS_CODE, HTTP_FAILURE_STATUS_CODE
from createTestReportPackages.api.services import health_check, upload_image
app = Flask(__name__)
blueprint = Blueprint('Innoveo API', __name__)
api = Api(blueprint,
          title='Innoveo API',
          description="Innoveo REST API",
          version="1.0.0",
          default="iFill",
          default_label="",
          doc="/innoveo/ifill/swagger",
          validate=True)

app.register_blueprint(blueprint)

upload_image_model = api.model('upload_image_model', upload_image.request_fields)


@api.route(upload_image.URL)
class UploadImage(Resource):
    @api.expect(upload_image_model)
    @api.response(HTTP_SUCCESS_STATUS_CODE, 'Success')
    @api.response(HTTP_FAILURE_STATUS_CODE, 'Internal Server Error Message')
    def post(self):
        response = upload_image.func(api.payload)
        return response


@api.route(health_check.URL)
class HealthCheck(Resource):
    @api.response(HTTP_SUCCESS_STATUS_CODE, 'Return List of Env')
    @api.response(HTTP_FAILURE_STATUS_CODE, 'Internal Server Error Message')
    def get(self):
        response = health_check.func()
        return response


