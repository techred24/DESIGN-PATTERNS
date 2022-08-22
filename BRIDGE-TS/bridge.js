var OrderedList = /** @class */ (function () {
    function OrderedList() {
        this.elements = [];
    }
    OrderedList.prototype.add = function (number) {
        this.elements.push(number);
        this.elements.sort();
    };
    OrderedList.prototype.getElements = function () {
        return this.elements;
    };
    return OrderedList;
}());
var UniqueList = /** @class */ (function () {
    function UniqueList() {
        this.elements = [];
    }
    UniqueList.prototype.add = function (number) {
        if (!this.elements.includes(number)) {
            this.elements.push(number);
        }
    };
    UniqueList.prototype.getElements = function () {
        return this.elements;
    };
    return UniqueList;
}());
var DataRefinedAbstraction = /** @class */ (function () {
    function DataRefinedAbstraction(implementor) {
        this.implementor = implementor;
    }
    DataRefinedAbstraction.prototype.add = function (number) {
        this.implementor.add(number);
    };
    DataRefinedAbstraction.prototype.get = function () {
        return this.implementor.getElements();
    };
    DataRefinedAbstraction.prototype.operation = function (fn) {
        return this.implementor.getElements().map(fn);
    };
    return DataRefinedAbstraction;
}());
var uniqueData = new DataRefinedAbstraction(new UniqueList());
var orderedData = new DataRefinedAbstraction(new OrderedList());
uniqueData.add(3);
uniqueData.add(3);
uniqueData.add(1);
uniqueData.add(1);
uniqueData.add(2);
console.log(uniqueData.get());
orderedData.add(3);
orderedData.add(3);
orderedData.add(1);
orderedData.add(1);
orderedData.add(2);
console.log(orderedData.get());
var uniqueItems = uniqueData.operation(function (e) { return e * 2; });
var orderedItems = orderedData.operation(function (e) { return e * 2; });
console.log(uniqueItems);
console.log(orderedItems);
