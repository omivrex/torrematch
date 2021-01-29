'use strict';
const https = require('https');
const compareAndMatchHandler = require('./compareAndMatchHandler');

exports.eng = main

let responseObj;
function main(data, response) {
  data.forEach((devPath) => {
    getDevInfo(devPath)
  });
  responseObj = response
}

async function getDevInfo(devPath) {
    await https.get({ // I used this to fix the CORS error
      host: '35.161.89.198', // torre IP address
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

      res.on('err', (err) => {
        console.log(err);
      })
    })
}

let devsData = []
async function pushInfo(info) {
  devsData.push(info)
  // console.log(devsData);
  if (devsData.length === 2) {
    await sendRes(compareAndMatchHandler.main(devsData))
    devsData = []
  }
}

function sendRes(responseData) {
  responseObj.send(responseData)
}
