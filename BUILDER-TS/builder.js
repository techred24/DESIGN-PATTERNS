var Person = /** @class */ (function () {
    function Person(name, lastName, age, country, city, hobbies) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.hobbies = hobbies;
    }
    Person.prototype.getFullName = function () {
        return this.name + ' ' + this.lastName;
    };
    return Person;
}());
var NormalPersonBuilder = /** @class */ (function () {
    function NormalPersonBuilder() {
        this.name = '';
        this.lastName = '';
        this.age = 0;
        this.country = '';
        this.city = '';
        this.hobbies = [];
    }
    NormalPersonBuilder.prototype.reset = function () {
        this.name = '';
        this.lastName = '';
        this.age = 0;
        this.country = '';
        this.city = '';
        this.hobbies = [];
    };
    NormalPersonBuilder.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    NormalPersonBuilder.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
        return this;
    };
    NormalPersonBuilder.prototype.setAge = function (age) {
        this.age = age;
        return this;
    };
    NormalPersonBuilder.prototype.setCountry = function (country) {
        this.country = country;
        return this;
    };
    NormalPersonBuilder.prototype.setCity = function (city) {
        this.city = city;
        return this;
    };
    NormalPersonBuilder.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
        return this;
    };
    NormalPersonBuilder.prototype.build = function () {
        var person = new Person(this.name, this.lastName, this.age, this.country, this.city, this.hobbies);
        this.reset();
        return person;
    };
    return NormalPersonBuilder;
}());
var PersonDirector = /** @class */ (function () {
    function PersonDirector(personBuilder) {
        this.personBuilder = personBuilder;
    }
    PersonDirector.prototype.setPersonBuilder = function (personBuilder) {
        this.personBuilder = personBuilder;
    };
    PersonDirector.prototype.createSimplePerson = function (name, lastName) {
        this.personBuilder.setName(name)
            .setLastName(lastName);
    };
    return PersonDirector;
}());
var personBuilder = new NormalPersonBuilder();
var rafael = personBuilder.setName('Rafael')
    .setLastName('Temich')
    .addHobby('Code')
    .addHobby('Read')
    .build();
console.log(rafael);
var juan = personBuilder.setName('Juan')
    .setLastName('Pérez')
    .setAge(30)
    .addHobby('Comer')
    .setCountry('México')
    .setCity('Guadalajara')
    .addHobby('Cerveza')
    .build();
console.log(juan);
var director = new PersonDirector(personBuilder);
director.createSimplePerson('Flavio', 'Chiguil');
var flavio = personBuilder.build();
console.log(flavio);
