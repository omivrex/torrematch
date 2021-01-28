const dev1Url = document.getElementById('dev1')
const dev2Url = document.getElementById('dev2')

const getDevAjax = new XMLHttpRequest()

function getDev() {
  let devsToCompare = {dev1: dev1Url.value, dev2: dev2Url.value}
  console.log(devsToCompare);
  getDevAjax.onreadystatechange = () => {
    if (getDevAjax.readyState === 4) {
      console.log(JSON.parse(getDevAjax.responseText));
    }
  }
  getDevAjax.open('POST', '/getDevData')
  getDevAjax.setRequestHeader("Content-type", 'application/json');
  getDevAjax.send(JSON.stringify(devsToCompare))
}
