// scripts.js - ZADANIE 
function Phone(name, brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.name = name;
}

Phone.prototype.printInfo = function () {
		console.log('The phone name is ' + this.name + ' brand is ' + this.brand +', color is '+ this.color +' and the price is ' + this.price +' zł.');
}

var iPhone6S = new Phone ('iPhone 6s ', 'Apple', 1649, 'silver');
var samsungGalaxyS6 = new Phone ('Samsung Galaxy S6 ','Samsung', 1099, 'gold');
var onePlusOne = new Phone ('One Plus One','One Plus', 1989, 'black');

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();



//Przykład 1 z rozdziału 11.3 (Klasa a obiekt), czyli chyba nie odnoszący się bezpośrednio do JavaScriptu 

function Car(model, manufacturer) {
  this.model=model;
  this.manufacturer=manufacturer;

};

Car.prototype.logModel = function () {
      console.log("This car's model is called " + this.model + ".");
      console.log("This car's model is called " + this.manufacturer + ".");
};

var fordMustang = new Car ("Mustang", "Ford");

fordMustang.logModel();

//Przykład 2 z rozdziału 11.4 (Programowanie obiektowe w JavaScripcie)

var name = new String('Jan Nowak');

console.log(name);

//Przykład 3 z rozdziału 11.4 (Programowanie obiektowe w JavaScripcie) - OBIEKT 

var person = {
  //włąsciwości obiektu 
  name: "Jan Nowak",
  age: 30,
  isMarried: false,
  //metoda obiektu
  sayHello: function() {
    console.log("Hi, my name is " + this.name);
    }
};

person.sayHello(); //wywołanie metody 

//Przykład 3 z rozdziału 11.4 (Programowanie obiektowe w JavaScripcie) - WŁASNE FUNKCJE KONSTRUUJĄCE - Przykład metody zadeklarowanej wewnątrz klasy 

    //Funkcja konstruująca (klasa)

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log("Hi, my name is " + this.name);
    };
};

var person1 = new Person("Jan Nowak", 35);
var person2 = new Person("Adam", 32);

person1.sayHello(); 
person2.sayHello() ;


//Przykład 3 z rozdziału 11.4 (Programowanie obiektowe w JavaScripcie) - WŁASNE FUNKCJE KONSTRUUJĄCE - Przykład metody zadeklarowanej przy użyciu prototypu 

function Person2(name, age) {
  this.name = name;
  this.age = age;
};

Person2.prototype.logModel = function() {
  console.log(this.name);
};

var person3 = new Person2("Jan Nowak", 35);
var person4 = new Person2("Adam", 32);

person3.logModel();
person4.logModel();



