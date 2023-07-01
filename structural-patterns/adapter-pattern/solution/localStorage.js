const {writeFile, existsSync, readFileSync, unlink} = require("fs")

const localStorageFileName = "localStorage.json"

class LocalStorage {

    constructor() {

        if(existsSync(localStorageFileName)) {
            console.log(`Loading items from ${localStorageFileName}`)
            const text = readFileSync(localStorageFileName)
            this.items = JSON.parse(text)
        } else {
            this.items = {};
        }

    }

    get length() {
        return Object.keys(this.items).length
    }

    getItem(key) {
        return this.items[key];
    }

    setItem(key, value) {
        this.items[key] = value;
        writeFile(localStorageFileName, JSON.stringify(this.items), err => {
            if(err) {
                console.log(err)
            }
        })

    }

    clear() {
        this.items = {}
        unlink(localStorageFileName, () => {
            console.log(`${localStorageFileName} is removed`)
        })

    }

}

module.exports = new LocalStorage()