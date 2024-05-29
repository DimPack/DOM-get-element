'use strict';
//1) зібрати живу колекцію усіх посилань на сторінці
const liveCollection = document.getElementsByTagName('a');
console.log(liveCollection);

// 2) забрати статичну колекцію усіх зображенб на сторінці
const staticCollection = document.querySelectorAll('img')
console.log(staticCollection);

// 3) дістати останній елемент li з меню
const lastMenuItem = document.querySelector('.menu ul').lastElementChild;
console.log(lastMenuItem);

// 4) дістати заголовок першої статті з секції з класом content-section
const firstTitle =  document.querySelector('.content-section > article').children[0];
console.log(firstTitle);

// 5) дістати усі другі абзаци в статтях
const secondParagraphs = document.querySelectorAll('.content-section article p:nth-of-type(2)');
// const allSecondParagraphs = document.querySelectorAll('.content-section > article');
// const secondParagraphs = [];

// allSecondParagraphs.forEach( article => {
//     const p = article.querySelectorAll('p')
//     if(p.length > 1) {
//         secondParagraphs.push(p[1]);
//     }
// })
console.log(secondParagraphs);