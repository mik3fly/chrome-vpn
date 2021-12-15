'use strict';
const {downloadOVPNFiles, downloadVPNConfigFile} = require('./utils');
const process = require('process');
const ovpnUrl = process.env.URL_OVPN_FILES;
const apiUrl = process.env.URL_NORDVPN_API;
const ovpnFolder = "/ovpn";


downloadOVPNFiles(ovpnUrl, ovpnFolder)
    .then(() => {
        return downloadVPNConfigFile(apiUrl);
    })
    .then(() => {
        console.log("Download finished");
        process.on('exit', function () {
            console.log("Downloading process exited.");
        });
        process.on('SIGTERM', async () => {
            console.log('Got SIGTERM. Trying to stop vpn download gracefully.');
        });
    })
    .catch((error) => {
        console.log(error);
    });