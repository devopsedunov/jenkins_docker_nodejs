# use a node base image
FROM node:7-onbuild

# set maintainer
LABEL maintainer "swmdevops@gmail.com"

# set a health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://ec2-18-191-209-105.us-east-2.compute.amazonaws.com:8000 || exit 1

# tell docker what port to expose
EXPOSE 8000
