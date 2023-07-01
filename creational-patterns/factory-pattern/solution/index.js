const userFactory = require('./userFactory')

const alex = userFactory('Alex Banks', 100);
const eve = userFactory('Eve Porcello', 100, 'employee','Some employer');

// we can also write out custom desired logic for instantiated classes
eve.payDay(120);

console.log( alex.toString() )
console.log( eve.toString() )
