FROM python:3.9-alpine3.15

ADD . /levitation

WORKDIR /levitation

RUN pip install -r requirements.txt

ENTRYPOINT ["python", "server.py"]