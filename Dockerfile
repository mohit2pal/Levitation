FROM python:3.9-slim-bullseye

ADD . /levitation

WORKDIR /levitation

RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN timedatectl set-timezone America/Monterrey

ENTRYPOINT ["python", "server.py"]
