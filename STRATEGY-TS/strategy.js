var LoginContext = /** @class */ (function () {
    function LoginContext(strategy) {
        this.strategy = strategy;
        // this.setStrategy(strategy);
    }
    LoginContext.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    LoginContext.prototype.login = function (user, password) {
        return this.strategy.login(user, password);
    };
    return LoginContext;
}());
var LoginDBStrategy = /** @class */ (function () {
    function LoginDBStrategy() {
    }
    LoginDBStrategy.prototype.login = function (user, password) {
        console.log('Hacia la base de datos');
        if (user === "admin" && password === "entra") {
            return true;
        }
        return false;
    };
    return LoginDBStrategy;
}());
var LoginServiceStrategy = /** @class */ (function () {
    function LoginServiceStrategy() {
    }
    LoginServiceStrategy.prototype.login = function (user, password) {
        console.log('Hacia un servicio de autenticacion');
        if (user === "admin" && password === "entra") {
            return true;
        }
        return false;
    };
    return LoginServiceStrategy;
}());
var LoginGoogleStrategy = /** @class */ (function () {
    function LoginGoogleStrategy() {
    }
    LoginGoogleStrategy.prototype.login = function (user, password) {
        console.log('Hacia servicio de autenticacion de google');
        if (user === "admin" && password === "entra") {
            return true;
        }
        return false;
    };
    return LoginGoogleStrategy;
}());
var auth = new LoginContext(new LoginDBStrategy());
console.log(auth.login('admin', 'entra'));
auth.setStrategy(new LoginServiceStrategy());
console.log(auth.login('admin', 'entra'));
auth.setStrategy(new LoginGoogleStrategy());
console.log(auth.login('admin', 'entra'));
