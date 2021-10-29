console.log('This is client side java.')

const weatherForm = document.querySelector('form')
const searchInput = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = searchInput.value

    messageOne.textContent = ''
    messageTwo.textContent = ''

    fetch('/weather?address='+location).then((response) => {
        response.json().then((data) => {
            if(data.error){
                console.log(data.error )
                messageOne.textContent = data.error
            } else {
                console.log(data)
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})