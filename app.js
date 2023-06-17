class Cart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    cartCleaner() {
        this.items = [];
        console.log('WORK');
    }
}