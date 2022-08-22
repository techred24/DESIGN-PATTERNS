interface IObserver<T> {
    refresh(value: T): void;
}
interface ISubject<T> {
    observers: IObserver<T>[];
    subscribe(observer: IObserver<T>): void;
    unsubscribe(observer: IObserver<T>): void;
    notify(value: T): void;
}

class Subject<T> implements ISubject<T> {
    observers: IObserver<T>[];
    constructor() {
        this.observers = [];
    }
    subscribe(observer: IObserver<T>): void {
        this.observers.push(observer);
    }
    unsubscribe(observer: IObserver<T>): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notify(value: T): void {
        this.observers.forEach(obs => {
            obs.refresh(value);
        })
    }
}

class Observer<T> implements IObserver<T>{
    private fn: (value: T) => void;
    constructor(fn: (value: T) => void) {
        this.fn = fn;
    }
    refresh(value: T): void {
        this.fn(value);
    }
}
const subject = new Subject<number>();
const obs1 = new Observer<number>((n)=>{
    console.log(`Hello ${n}`);
});
subject.subscribe(obs1);
subject.notify(1.2);
subject.notify(24);

const subjectString = new Subject<string>();
const obs1String = new Observer<string>((s)=>{
    console.log(`${s.toUpperCase()}`);
});
const obs2String = new Observer<string>((s)=>{
    console.log(`${s.toLocaleLowerCase()}`);
});

subjectString.subscribe(obs1String);
subjectString.subscribe(obs2String);

subjectString.notify('Flavio');
subjectString.notify('Rafael');