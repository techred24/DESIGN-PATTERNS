var Ticket = /** @class */ (function () {
    function Ticket(limit) {
        this.limit = limit;
        this.quantity = 0;
        this.number = 0;
        this.state = new EmptyState();
    }
    Object.defineProperty(Ticket.prototype, "getNumber", {
        get: function () {
            // return this.number++;
            return ++this.number;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ticket.prototype, "setState", {
        set: function (state) {
            this.state = state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ticket.prototype, "getState", {
        get: function () {
            return this.state;
        },
        enumerable: false,
        configurable: true
    });
    Ticket.prototype.next = function () {
        return this.state.next(this);
    };
    Ticket.prototype.add = function (quantity) {
        this.state.add(this, quantity);
    };
    return Ticket;
}());
var EmptyState = /** @class */ (function () {
    function EmptyState() {
    }
    EmptyState.prototype.next = function (ticket) {
        return null;
    };
    EmptyState.prototype.add = function (ticket, quantity) {
        if (quantity < ticket.limit) {
            ticket.quantity = quantity;
            ticket.setState = new WithDataState();
        }
        else if (quantity === ticket.limit) {
            ticket.quantity = quantity;
            ticket.setState = new FullState();
        }
    };
    return EmptyState;
}());
var WithDataState = /** @class */ (function () {
    function WithDataState() {
    }
    WithDataState.prototype.next = function (ticket) {
        ticket.quantity--;
        if (ticket.quantity <= 0) {
            ticket.setState = new EmptyState();
        }
        return ticket.getNumber;
    };
    WithDataState.prototype.add = function (ticket, quantity) {
        if ((ticket.quantity + quantity) < ticket.limit) {
            ticket.quantity += quantity;
        }
        else if ((ticket.quantity + quantity) === ticket.limit) {
            ticket.quantity += quantity;
            ticket.setState = new FullState();
        }
    };
    return WithDataState;
}());
var FullState = /** @class */ (function () {
    function FullState() {
    }
    FullState.prototype.next = function (ticket) {
        ticket.quantity--;
        if (ticket.quantity <= 0) {
            ticket.setState = new EmptyState();
        }
        else {
            ticket.setState = new WithDataState();
        }
        return ticket.getNumber;
    };
    FullState.prototype.add = function (ticket, quantity) {
        console.log('Ticket lleno');
    };
    return FullState;
}());
var ticket = new Ticket(5);
console.log(ticket.getState);
console.log(ticket.next());
ticket.add(6);
console.log(ticket.getState);
console.log(ticket.next());
ticket.add(4);
console.log(ticket.getState);
console.log(ticket.next());
console.log(ticket.next());
ticket.add(3);
console.log(ticket.getState);
ticket.add(1);
console.log(ticket.next());
console.log(ticket.getState);
console.log(ticket.next());
console.log(ticket.next());
console.log(ticket.next());
console.log(ticket.next());
console.log(ticket.getState);
console.log(ticket.next());
