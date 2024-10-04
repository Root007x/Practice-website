// array of objects
const products = [
    {name : 'laptop', price : 32000, brand : 'lenovo', color : 'silver'},
    {name : 'phone', price : 34000, brand : 'iphone', color : 'golden'},
    {name : 'watch', price : 3000, brand : 'casio', color : 'yellow'},
    {name : 'sungrass', price : 300, brand : 'rabon', color : 'black'},
    {name : 'camera', price : 7000, brand : 'canon', color : 'gray'},
]

console.log(products[0].brand);

const brands = products.map(product => product.brand);
console.log(brands);

// for each loop
products.forEach(product => console.log(product.color))

products.forEach(product => {
    console.log(product.price * 2);
})


// filter

const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);


// find
const special = products.find(p => p.price >= 5000);
console.log(special);