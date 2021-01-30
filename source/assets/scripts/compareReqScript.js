const dev1Url = $('#dev1')[0]
const dev2Url = $('#dev2')[0]

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
  $.ajax('/getDevData', {
    success: (response) => {
      console.log(response)
      renderData(response)
    },
    error: (xhr, status, error) => {
      console.log(error);
      resultWrapper.innerHTML += '<span class="errors">Error: Couldn\'t reach server at the moment are you offline</span>'
    },
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(devsToCompare)
  })
}
