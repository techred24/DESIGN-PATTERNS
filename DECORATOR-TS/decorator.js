var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ProductComponent = /** @class */ (function () {
    function ProductComponent(name) {
        this.name = name;
    }
    ProductComponent.prototype.getDetail = function () {
        return "".concat(this.name);
    };
    return ProductComponent;
}());
var ProductDecorator = /** @class */ (function () {
    function ProductDecorator(component) {
        this.component = component;
    }
    ProductDecorator.prototype.getDetail = function () {
        return this.component.getDetail();
    };
    return ProductDecorator;
}());
var CommercialInfoProductDecorator = /** @class */ (function (_super) {
    __extends(CommercialInfoProductDecorator, _super);
    function CommercialInfoProductDecorator(component, tradename, brand) {
        var _this = _super.call(this, component) || this;
        _this.tradename = tradename;
        _this.brand = brand;
        return _this;
    }
    CommercialInfoProductDecorator.prototype.getDetail = function () {
        return "".concat(this.tradename, " ").concat(this.brand, " ").concat(_super.prototype.getDetail.call(this));
    };
    return CommercialInfoProductDecorator;
}(ProductDecorator));
var StoreProductDecorator = /** @class */ (function (_super) {
    __extends(StoreProductDecorator, _super);
    function StoreProductDecorator(component, price) {
        var _this = _super.call(this, component) || this;
        _this.price = price;
        return _this;
    }
    StoreProductDecorator.prototype.getDetail = function () {
        return "".concat(_super.prototype.getDetail.call(this), " ").concat(this.price);
    };
    return StoreProductDecorator;
}(ProductDecorator));
var HTMLProductDecorator = /** @class */ (function (_super) {
    __extends(HTMLProductDecorator, _super);
    function HTMLProductDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLProductDecorator.prototype.getDetail = function () {
        return "<h1>Informaci\u00F3n del producto</h1>\n            <p>\n                ".concat(_super.prototype.getDetail.call(this), "\n            </p>\n            <p>\n                ").concat(this.component.getDetail(), "\n            </p>\n        ");
    };
    return HTMLProductDecorator;
}(ProductDecorator));
var productComponent = new ProductComponent('Cerveza');
console.log(productComponent.getDetail());
var commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, "London Porter", "Fuller's");
console.log(commercialInfoProduct.getDetail());
var storeProduct = new StoreProductDecorator(productComponent, 15.5);
console.log(storeProduct.getDetail());
var storeProduct2 = new StoreProductDecorator(commercialInfoProduct, 20);
console.log(storeProduct2.getDetail());
var htmlProductDecorator = new HTMLProductDecorator(storeProduct2);
console.log(htmlProductDecorator.getDetail());
