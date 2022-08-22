var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.subscribe = function (observer) {
        this.observers.push(observer);
    };
    Subject.prototype.unsubscribe = function (observer) {
        this.observers = this.observers.filter(function (obs) { return obs !== observer; });
    };
    Subject.prototype.notify = function (value) {
        this.observers.forEach(function (obs) {
            obs.refresh(value);
        });
    };
    return Subject;
}());
var Observer = /** @class */ (function () {
    function Observer(fn) {
        this.fn = fn;
    }
    Observer.prototype.refresh = function (value) {
        this.fn(value);
    };
    return Observer;
}());
var subject = new Subject();
var obs1 = new Observer(function (n) {
    console.log("Hello ".concat(n));
});
subject.subscribe(obs1);
subject.notify(1.2);
subject.notify(24);
var subjectString = new Subject();
var obs1String = new Observer(function (s) {
    console.log("".concat(s.toUpperCase()));
});
var obs2String = new Observer(function (s) {
    console.log("".concat(s.toLocaleLowerCase()));
});
subjectString.subscribe(obs1String);
subjectString.subscribe(obs2String);
subjectString.notify('Flavio');
subjectString.notify('Rafael');
