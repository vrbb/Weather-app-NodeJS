console.log('Cliente side javascript file')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const location = search.value
    fetch('http://localhost:3131/weather?address='+location).then((response) => {
        response.json().then((data) => {
            if(data.error){
                return console.log({'Error' : data.error})
            }
            console.log(data)
        })
    })
    console.log(location)
})