const form = document.getElementById('form')
const dev1 = document.getElementById('dev1')
const dev2 = document.getElementById('dev2')

function cancel() {
    form.style.display = 'none'
    dev1.value = ''
    dev2.value = ''
}

function displayForm() {
    event.bubbles = false
    form.style.display = 'block'
}