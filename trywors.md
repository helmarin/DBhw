##  Пустышка isEmpty(obj)
```
function isEmpty(obj) {
   for(let key in obj) {
     return console.log(false)
  }
  return console.log( true)
}
```
## Калькулятор
```
class Calc {
constructor() {
  this.num0 = 0 ;
  this.num1 = 0;
}
read() {
  this.num0 = +prompt('first num:', '')
  this.num1 = +prompt('second num:', '')
}
sum(){
  return this.num0 + this.num1 
}
}
let prim = new Calc()
prim.read()
console.log(prim.sum())
```

## Aкумулятор
```
function Accum(startN){
    this.val = startN
    this.read = function {
this.usN = +prompt('yo num:', '')
this.val = this.val + this.usN
return console.log(this.val)
    }
}
let prim = new Accum(5)
//prim.read()
//alert(prim.val)
```

## Ступеньки ()
```
let Ladder = {
 step : 0
up(){
  this.step += 1
}
down(){
  this.step -=1
}
showStep(){
  console.log(this.step)
}
}
Ladder.up().up()
Ladder.showStep()
```


## Площадь и периметр прямоугольника
```
class Rec {//work (1)
  constructor(a, b) {
    this.he = a
    this.we = b
    }
 per(){
  return console.log(2 * this.he + 2 * this.we)
 }
 plo(){
  return console.log(this.he * this.we)
 }
};
//let test = new Rec(8, 2)
//test.plo()
```

### Dog make noise
```
class Animal {

  constructor(kind, sound) {
    this.sound = sound;
    this.kind = kind;
  }
makeNoise(){
    console.log(`hey user im ${this.kind} and i make ${this.sound}`)
}
}

class Dog extends Animal {

  constructor(kind, sound, color) {
    super(kind, sound);
    this.color = color;
  }
makeNoise(){
    console.log(`${this.sound}, user, i am ${this.color} ${this.kind} `)
}
}
let taxa = new Dog('Taxa', 'woof', 'black')
taxa.makeNoise()
```
## T*bank 
```
class BankAccount {
    constructor(accountId) {
        this.accountId = accountId;
        this.balance = 0;       
    }
    deposit(sum)   
    {
        this.balance += sum;
    }
    withdraw(sum) {
        this.balance -= sum;
    }
    tran(sum, tAcc){ 
if(this.balance > sum) {
this.balance -= sum
tAcc.deposit(sum)
    }
    else console.log('deneg nema')
}
}
const account1 = new BankAccount(1);
const account2 = new BankAccount(2);

account1.deposit(500);
account2.deposit(25);
console.log(account2);
account1.tran(100, account2);
console.log(account2.balance)
```
















