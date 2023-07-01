class Storage {
  constructor(name, inventory = [], deliveryTime = 0) {
    this.name = name;
    this.inventory = inventory;
    this.deliveryTime = deliveryTime;

    this.next = null;
  }

  lookInLocalInventory(itemName) {
    return this.inventory.find((item) => item.name === itemName);
  }

  setNext(storage) {
    this.next = storage;
  }

  find(itemName) {
    const foundItem = this.lookInLocalInventory(itemName);

    if (foundItem) {
      return {
        name: foundItem.name,
        qty: foundItem.qty,
        location: this.name,
        deliveryTime: !this.deliveryTime
          ? "Now"
          : `${this.deliveryTime} day(s)`,
      };
    } else if (this.next) {
      return this.next.find(itemName);
    } else {
      return `We do not have ${itemName} now`;
    }
  }
}

module.exports = Storage;
