const array = [
    {name: 'Laptop', price: 200000},
    {name: 'Mobile', price: 50000},
    {name: 'Fridge', price: 70000},
    {name: 'Washing Machine', price: 5000},
    {name: 'Desktop', price: 5000},
]

const findPriceOfFiveThousands = array.find(n => n.price === 5000);
console.log(findPriceOfFiveThousands);