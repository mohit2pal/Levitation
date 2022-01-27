FROM python:3.9-slim-bullseye

ADD . /levitation

WORKDIR /levitation

RUN pip install --upgrade pip
RUN pip install -r requirements.txt
ENV TZ=Asia/Kolkata
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

ENTRYPOINT ["python", "server.py"]
