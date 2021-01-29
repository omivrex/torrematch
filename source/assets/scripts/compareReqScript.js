const dev1Url = document.getElementById('dev1')
const dev2Url = document.getElementById('dev2')

const getDevAjax = new XMLHttpRequest()

function formatDevUrl(url) {
  if (url.indexOf('https://bio.torre.co/api/bios/') === -1) {
    let newUrl = 'https://bio.torre.co/api/bios/'
    newUrl += url.slice(url.lastIndexOf('/'), url.indexOf('?'))
    return newUrl
  } else {
    return url;
  }
  console.log(newUrls);
}

function getDev() {
  event.preventDefault()
  let devsToCompare = {dev1: formatDevUrl(dev1Url.value), dev2: formatDevUrl(dev2Url.value)}
  console.log(devsToCompare);
  getDevAjax.onreadystatechange = () => {
    if (getDevAjax.readyState === 4) {
      renderData(JSON.parse(getDevAjax.responseText))
      console.log(JSON.parse(getDevAjax.responseText));
    }
  }
  getDevAjax.open('POST', '/getDevData')
  getDevAjax.setRequestHeader("Content-type", 'application/json');
  getDevAjax.send(JSON.stringify(devsToCompare))
}
