/* eslint-disable @typescript-eslint/no-unused-vars */

const warehouse1 = {
  department: 'Executive',
  ceo: 'James Bond',
  town: 'Vilnius',
  street: 'Vokieciu st',
};

// postalAddress = town street
// add types or interfaces su product1 and warehouse1
// create funcion addPostalAddress =>  postalAddress: 'Vilnius, Vokieciu st'

type Warehouse11 = {
  department: string;
  ceo: string;
  town: string;
  street: string;
};

const obj1 = {
  title: 'mr',
  age: 25,
};

const addId = <Type>(arg: Type): [number, Type] => [Math.random(), arg];

const id1 = addId(15);
const id2 = addId('Serbentautas');
console.log('id1===', id1, id2);

// pataisyti addId kad ji veiktu su generic argumentu
