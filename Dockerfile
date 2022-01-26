FROM python:3.9-slim-bullseye

ADD . /levitation

WORKDIR /levitation

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

ENTRYPOINT ["python", "server.py"]
