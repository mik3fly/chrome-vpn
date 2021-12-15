'use strict';
const {downloadOVPNFiles, downloadVPNConfigFile} = require('./utils');
const process = require('process');
const ovpnUrl = process.env.URL_OVPN_FILES;
const ovpnFolder = "/ovpn";


downloadOVPNFiles(ovpnUrl, ovpnFolder)
    .then(() => {
        return downloadVPNConfigFile(ovpnUrl);
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