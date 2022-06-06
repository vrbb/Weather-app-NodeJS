console.log('Cliente side javascript file')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageZero = document.querySelector('#message-0')

messageOne.textContent = ''
messageTwo.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const location = search.value
    messageOne.textContent = 'Loading...'
    fetch('http://localhost:3131/weather?address='+location).then((response) => {
        response.json().then((data) => {
            if(data.error){
                messageOne.textContent = data.error
            }
            messageOne.textContent = data.temperature+'˚C'
            messageTwo.textContent = (data.precip)+'% of precip'
        }) 
    })
    messageZero.textContent = 'Hi! You are from '+ location

    console.log(location)
})