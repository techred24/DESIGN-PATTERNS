interface Strategy {
    login(user: string, password: string) : boolean;
}

class LoginContext {
    private strategy: Strategy;
    constructor(strategy: Strategy) {
        this.strategy = strategy;
        // this.setStrategy(strategy);
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    login(user: string, password: string) : boolean {
        return this.strategy.login(user, password);
    }
}

class LoginDBStrategy implements Strategy {
    login(user: string, password: string): boolean {
        console.log('Hacia la base de datos');
        if(user === "admin" && password === "entra") {
            return true;
        }
        return false;
    }
}
class LoginServiceStrategy implements Strategy {
    login(user: string, password: string): boolean {
        console.log('Hacia un servicio de autenticacion');
        if(user === "admin" && password === "entra") {
            return true;
        }
        return false;
    }
}
class LoginGoogleStrategy implements Strategy {
    login(user: string, password: string): boolean {
        console.log('Hacia servicio de autenticacion de google');
        if(user === "admin" && password === "entra") {
            return true;
        }
        return false;
    }
}


const auth = new LoginContext(new LoginDBStrategy());

console.log(auth.login('admin','entra'));
auth.setStrategy(new LoginServiceStrategy());
console.log(auth.login('admin','entra'));
auth.setStrategy(new LoginGoogleStrategy());
console.log(auth.login('admin','entra'));

