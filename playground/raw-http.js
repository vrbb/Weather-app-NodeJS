const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=6951e9376fe92546452d018547e800ee&query=Philadelphia' 

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) =>{
        data = data+ chunk.toString()
        console.log(chunk)
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})


request.on('error', (error) => {
    console.log('An error', error)
})

request.end()