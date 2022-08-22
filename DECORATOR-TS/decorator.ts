interface Component {
    getDetail(): string;
}
class ProductComponent implements Component {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    public getDetail(): string {
        return `${this.name}`;
    }
}
abstract class ProductDecorator implements Component {
    protected component: Component;
    constructor(component: Component) {
        this.component = component;
    }
    public getDetail(): string {
        return this.component.getDetail();
    }
}
class CommercialInfoProductDecorator extends ProductDecorator {
    private tradename: string;
    private brand: string;
    constructor(component: Component, tradename: string, brand: string) {
        super(component);
        this.tradename = tradename;
        this.brand = brand;
    }
    public getDetail(): string {
        return `${this.tradename} ${this.brand} ${super.getDetail()}`;
    }
}
class StoreProductDecorator extends ProductDecorator {
    private price: number;
    constructor(component: Component, price: number) {
        super(component);
        this.price = price;
    }
    public getDetail(): string {
        return `${super.getDetail()} ${this.price}`;
    }
}
class HTMLProductDecorator extends ProductDecorator {
    public getDetail(): string {
        return `<h1>Información del producto</h1>
            <p>
                ${super.getDetail()}
            </p>
            <p>
                ${this.component.getDetail()}
            </p>
        `;
    }
}
const productComponent = new ProductComponent('Cerveza');
console.log(productComponent.getDetail());

const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, "London Porter", "Fuller's");

console.log(commercialInfoProduct.getDetail());

const storeProduct = new StoreProductDecorator(productComponent, 15.5);
console.log(storeProduct.getDetail());

const storeProduct2 = new StoreProductDecorator(commercialInfoProduct, 20);
console.log(storeProduct2.getDetail());

const htmlProductDecorator = new HTMLProductDecorator(storeProduct2);
console.log(htmlProductDecorator.getDetail());