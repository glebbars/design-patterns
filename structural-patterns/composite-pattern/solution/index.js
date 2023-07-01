const CatalogItem = require("./CatalogItem");
const CatalogGroup = require("./CatalogGroup");

const boots = new CatalogItem("Leather Boots", 79.99);
const sneakers = new CatalogItem("Kicks", 39.99);
const flipFlops = new CatalogItem("California work boots", 19.99);

const group_shoes = new CatalogGroup("Shoes and Such", [
  boots,
  sneakers,
  flipFlops,
]);

const group_food = new CatalogGroup("Food for you while you try on clothes", [
  new CatalogItem("Milkshake", 5.99),
  new CatalogItem("French fries", 3.49),
]);

const keyChain = new CatalogItem("Key chain", 1.99);

const catalog = new CatalogGroup("Clothes and Food", [
  keyChain,
  group_shoes,
  group_food,
]);

console.log(`$${catalog.total}`);
catalog.print();
