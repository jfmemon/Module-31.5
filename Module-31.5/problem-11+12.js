// optional (?.) chaining
const object = {
    name: 'Lenovo ThinkPad',
    color: ['black', 'red', 'green'],
    versionYear: {
        first: 1900,
        second: 1920,
        third: 2023
    },
    varietiesPrice: {
        slim: {
            verySlim: 150000,
            mediumSlim: 120000,
            normal: 86000,
        }
    }
}

const information = object.varietiesPrice.sli?.verySlim;
console.log(information);