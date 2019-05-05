FROM portainer/portainer
MAINTAINER Jailton Ventura <jottha_2006@hotmail.com>

EXPOSE 9000

RUN --name portainer -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer