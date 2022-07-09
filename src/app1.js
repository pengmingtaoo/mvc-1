import './app1.css';
import  $ from 'jquery';


const $button1 = $('#add1');
const $button2 = $('#minus1');
const $button3 = $('#mul2');
const $button4 = $('#divide2');
const $number = $('#number');
const n = localStorage.getItem('number');
$number.text(n || 100);

$button1.on('click',()=>{
  let number = parseInt($number.text());
  number +=1;
  localStorage.setItem('number', number);
  $number.text(number);
})
$button2.on('click',()=>{
  let number = parseInt($number.text());
  number -=1;
  localStorage.setItem('number', number);
  $number.text(number);
})
$button3.on('click',()=>{
  let number = parseInt($number.text());
  number *=2;
  localStorage.setItem('number', number);
  $number.text(number);
})
$button4.on('click',()=>{
  let number = parseInt($number.text());
  number /=2;
  localStorage.setItem('number', number);
  $number.text(number);
})