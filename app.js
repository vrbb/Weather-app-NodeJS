console.log('Starting')

setTimeout(() => {
  console.log('2 Second Timer')
}, 2000)


setTimeout(() =>{
  console.log('0 second Timer')
}, 0)

const x = 5

const y = x + 2

console.log('Sum is '+y)

const listLocations = (locations) => {
  locations.forEach( (location) => {
    console.log(location)    
  });
}

const myLocations = ['Lavras da mangabeira', 'Juazeiro do Norte', 'Crato', 'Barbalha']
listLocations(myLocations)

console.log('Stopping')