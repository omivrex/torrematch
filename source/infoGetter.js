'use strict';
const https = require('https');
const compareAndMatchHandler = require('./compareAndMatchHandler');
const devsData = []

exports.eng = function (data) {
  data.forEach((devPath) => {
    getDevInfo(devPath)
  });
}

function getDevInfo(devPath) {
    https.get({
      host: '35.161.89.198', // torre api IP address
      path: devPath,
      port: 443,
      method: 'GET',
      checkServerIdentity: () => undefined
    }, (res) => {
      let info = ''
      res.on('data', (chunk) => {
        info += chunk
      })

      res.on('end', () => {
       pushInfo(JSON.parse(info))
     })

      let error = false
      res.on('err', (err) => {
        error = true
        console.log(err);
      })
    })
}

function pushInfo(info) {
  devsData.push(info)
  if (devsData.length === 2) {
    compareAndMatchHandler.main(devsData)
  }
}
