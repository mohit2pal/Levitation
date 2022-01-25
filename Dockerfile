FROM python:3.9-alpine3.15

ADD . /levitation

WORKDIR /levitation

RUN pip install -r requirements.txt
RUN pip install --upgrade pip
RUN pip install pandas

ENTRYPOINT ["python", "server.py"]
