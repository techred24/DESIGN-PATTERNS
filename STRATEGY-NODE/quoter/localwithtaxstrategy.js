function LocalWithTaxStrategy(tax) {
    this.tax = tax;

    this.quote = function(amount, gain) {
        return (amount * gain) + (amount * tax);
    }
}
module.exports = LocalWithTaxStrategy;