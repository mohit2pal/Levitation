FROM python:3.9-alpine3.15

ADD . /levitation

WORKDIR /levitation

RUN pip install -r requirements.txt
Run pip install --upgrade pip
Run pip install pandas

ENTRYPOINT ["python", "server.py"]
