const form = $('#form')[0]

function cancel() {
    event.target.parentElement.style.display = 'none'
    if (event.target.parentElement === resultWrapper) {
      resultWrapper.innerHTML = ''
    }
    dev1.value = ''
    dev2.value = ''
}

function displayForm() {
    event.bubbles = false
    form.style.display = 'block'
}
