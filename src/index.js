// index.js
import _ from 'lodash';
import './styles/scss/base.scss';
const img = new URL('./image/card_3.jpg', import.meta.url);

const numbers = [2, 3, 5];
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);