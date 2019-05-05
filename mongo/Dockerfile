FROM mongo
MAINTAINER Jailton Ventura <jottha_2006@hotmail.com>

# Workdir configs directory
WORKDIR /usr/src/configs

# Copy config files
COPY mongo.conf .

EXPOSE 27017

CMD ["--config", "./mongo.conf"]