import os

def load_environment_variables(config):
    """
    Loads environment variable

    :param config: dictionary of existing configuration
    :return config: dictionary with environment variables
    """
    environment_list = ['OCR_SERVICE_NAME',
                        "SAVE_EXTRACTED_DATA",
                        "DB_HOST",
                        "DB_USERNAME",
                        "DB_PASSWORD",
                        "DATABASE",
                        "DB_PORT",
                        "LOG_LEVEL"
                        ]
    missing_list = []
    for environment in environment_list:
        value = os.environ.get(environment)
        if value is not None:
            config[environment] = value
        else:
            missing_list.append(environment)
    if len(missing_list) > 0:
        raise Exception(f"Missing Environment variables : {missing_list}")
    return config
