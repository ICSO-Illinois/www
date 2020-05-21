FROM node:10.16.0
MAINTAINER Chenhui Zhang

WORKDIR /home/$USER/www
COPY . ./

# Stupid Memory Leak
ENV GATSBY_CPU_COUNT=2

# UTF-8 Environment
ENV LANGUAGE en_US:en
ENV LANG=en_US.UTF-8
ENV LC_ALL en_US.UTF-8

RUN pwd

RUN git pull
RUN npm run clean
RUN npm install --production
RUN npm run build

ENTRYPOINT [ "bash", "-c" ]
