const form = $('#form')[0]

function cancel() {
    if (event.target === $("#resultWrapperCloseButn")[0]) {
      resultWrapper.style.display = 'none'
    } else {
      event.target.parentElement.style.display = 'none'
      dev1.value = ''
      dev2.value = ''
    }
}

function displayForm() {
    event.bubbles = false
    form.style.display = 'block'
}
