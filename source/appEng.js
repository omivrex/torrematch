const https = require('https');

const devsData = []

exports.eng = function eng(data) {
  data.forEach((devPath) => {
    getDevInfo(devPath)
  });
}

function getDevInfo(devPath) {
  https.get({
    host: '35.161.89.198',
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
     // return info;
     devsData.push(JSON.parse(info))
     console.log(devsData);
    })

    res.on('err', (err) => {
      console.log(err);
    })
  })
}
