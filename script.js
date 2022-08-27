'use strict';

const card1 = document.getElementById('card-1');
const card2 = document.getElementById('card-2');
const card3 = document.getElementById('card-3');
const card4 = document.getElementById('card-4');
const card5 = document.getElementById('card-5');

const cards = document.querySelectorAll('.card');
console.log(cards);

cards.forEach(card => {
    card.addEventListener('click', function(e){
    if(e.target.classList.contains('active') || e.target.parentElement.classList.contains('card'))   return;

    removeClass();

    console.log(e.target);
    e.target.classList.add('active');
})})

const removeClass = () => {
    cards.forEach(card => {
        if(card.classList.contains('active')){
            card.classList.remove('active');
        }
    })
}