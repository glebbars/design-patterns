class Iterator {
  constructor(items = []) {
    this.index = 0;
    this.items = items;
  }

  current() {
    return this.items[this.index];
  }

  hasNext() {
    return this.index < this.items.length - 1;
  }

  next() {
    if (this.hasNext()) {
      this.index += 1;
    }
    return this.current();
  }

  prev() {
    if (this.index !== 0) {
      this.index -= 1;
    }
    return this.current();
  }

  first() {
    const [first] = this.items;
    return first;
  }

  last() {
    const [last] = [...this.items].reverse();
    return last;
  }
}

module.exports = Iterator;
