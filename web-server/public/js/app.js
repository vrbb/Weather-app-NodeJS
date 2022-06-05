console.log('Cliente side javascript file')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

fetch('http://localhost:3131/weather?address=Boston').then((response) => {
    response.json().then((data) => {
        if(data.error){
            return console.log({'Error' : data.error})
        }
        console.log(data)
    })
})
