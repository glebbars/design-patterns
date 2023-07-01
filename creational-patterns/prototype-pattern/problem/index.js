const Shopper = require('./Shopper');

const alex = new Shopper('Alex Banks');
alex.addItemToList('camping knife');
alex.addItemToList('tent');
alex.addItemToList('backpack');
alex.addItemToList('map');
alex.addItemToList('slingshot');

const eve = new Shopper('Eve Porcello');
eve.addItemToList('camping knife');
eve.addItemToList('tent');
eve.addItemToList('backpack');
eve.addItemToList('map');
eve.addItemToList('reading light');

console.log( `${alex.name}: ${alex.shoppingList}` );
console.log( `${eve.name}: ${eve.shoppingList}` );
