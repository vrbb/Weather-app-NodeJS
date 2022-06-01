// object property shorthand

const name = 'Victoria'
const userAge = 24

const user = { 
    name,
    age: userAge,
    location: 'Brazil'
}

console.log(user)


// object destruturing

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

const {label, stock} = product

console.log(label, stock)