const Store = require("./Store");
const inventory = require("./inventory");

const skiShop = new Store("Steep and Deep", inventory);

const searchItem = "wax";
const results = skiShop.find(searchItem);

console.log(results);
