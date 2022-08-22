class SaleContext {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    calculate(amount) {
        return this.strategy.calculate(amount);
    }
}

class RegularSaleStrategy {
    constructor(tax) {
        this.tax = tax;
    }

    calculate(amount) {
        return amount + (amount * (this.tax / 100));
    }
}

class DiscountSaleStrategy  {
    constructor(tax, discount) {
        this.tax = tax;
        this.discount = discount;
    }

    calculate(amount) {
        return amount + (amount * (this.tax / 100)) - this.discount;
    }
}

class ForeignSaleStrategy {

    calculate(amount) {
        return amount * this.getDollarPrice();
    }
    getDollarPrice() {
        return 20;
    }
}

const regularSale = new RegularSaleStrategy(16);
const discountSale = new DiscountSaleStrategy(16, 32);
const foreignSale = new ForeignSaleStrategy();

const sale = new SaleContext(regularSale);

console.log(sale.calculate(10));

sale.setStrategy(discountSale);
console.log(sale.calculate(200));

sale.setStrategy(foreignSale);
console.log(sale.calculate(50));