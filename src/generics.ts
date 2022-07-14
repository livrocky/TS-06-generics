/* eslint-disable @typescript-eslint/no-unused-vars */
console.log('generics.ts');

type SomeArr = string[];
type SomeArr1 = Array<string>;
type SomeArr2 = Array<number>;

const makeTripleArray = <TypeA, TypeB>(arg: TypeA, arg2: TypeB): [TypeA, TypeA, TypeB] => [
  arg,
  arg,
  arg2,
];
const makeTripleArray1 = <TypeA>(arg: TypeA, arg2: TypeA): [TypeA, TypeA, TypeA] => [
  arg,
  arg,
  arg2,
];

const tr1 = makeTripleArray('1', true);
const sk1 = makeTripleArray<number | null, boolean>(null, false);
console.log('tr1 ===', tr1);
console.log('sk1 ===', sk1);

// const product1 = {
//   title: 'Nike sport shoes',
//   price: 100,
//   forSale: false,
//   town: 'London',
//   street: 'Backer st',
// };
// const warehouse1 = {
//   department: 'Executive',
//   ceo: 'James Bond',
//   town: 'Vilnius',
//   street: 'Vokieciu st',
// };

// postalAddress = town street
// add types or interfaces su product1 and warehouse1
// create funcion addPostalAddress =>  postalAddress: 'Vilnius, Vokieciu st'

type Product = {
  title: string;
  price: number;
  forSale: boolean;
  town: string;
  street: string;
};

type Warehouse = {
  department: string;
  ceo: string;
  town: string;
  street: string;
};
