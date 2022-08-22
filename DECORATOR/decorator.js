class ProductComponent {
    constructor(name) {
        this.name = name;
    }
    getDetailed() {
        return `${this.name}`;
    }
}

class ProductDecorator {
    constructor(productComponent) {
        this.productComponent = productComponent;
    }

    getDetailed() {
        return this.productComponent.getDetailed();
    }
}

class CommercialInfoProductDecorator extends ProductDecorator {
    constructor(productComponent, tradename, brand) {
        super(productComponent);
        this.tradename = tradename;
        this.brand = brand;
    }
    getDetailed() {
        return `${this.tradename} ${this.brand} ${super.getDetailed()}`;
    }
}
class StoreProductDecorator extends ProductDecorator {
    constructor(productComponent, price) {
        super(productComponent);

        this.price = price;
    }
    getDetailed() {
        return `${super.getDetailed()} $${this.price}`;
    }
}
class HTMLProductDecorator extends ProductDecorator {
    getDetailed() {
        return `<h1>Información del producto</h1>
        <p>
            ${super.getDetailed()}
        </p>
        `
    }
}
const productComponent = new ProductComponent('Cerveza');
console.log(productComponent.getDetailed());


const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, 'London Porter', 'Fuller\' s')
console.log(commercialInfoProduct.getDetailed());

const storeProduct = new StoreProductDecorator(productComponent, 15.5);
console.log(storeProduct.getDetailed());


const product = new StoreProductDecorator(commercialInfoProduct, 20);
console.log(product.getDetailed());

const htmlProductDecorator = new HTMLProductDecorator(product);
console.log(htmlProductDecorator.getDetailed());
myDiv.innerHTML = htmlProductDecorator.getDetailed();