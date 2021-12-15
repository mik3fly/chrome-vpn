FROM node:latest

ENV URL_NORDVPN_API="https://api.nordvpn.com/server" \
    URL_OVPN_FILES="https://downloads.nordcdn.com/configs/archives/servers/ovpn.zip"

WORKDIR app

RUN mkdir -p /app
COPY app /app

RUN cd /app/node && npm --no-package-lock install

VOLUME /ovpn

ENTRYPOINT ["node", "./node/download.js"]
