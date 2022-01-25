FROM python:3.9.8-alpine3.14

ADD . /levitation

WORKDIR /levitation

RUN pip install -r requirements.txt
RUN pip install --upgrade pip
RUN pip install numpy
RUN pip install pandas

ENTRYPOINT ["python", "server.py"]
