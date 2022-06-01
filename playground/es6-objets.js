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

// const {label: productLabel, stock, rating = 5} = product

// console.log(productLabel, stock, rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)    
}

transaction('order', product)