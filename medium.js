const cont = document.getElementById('container');

const header = document.createElement('div');
header.style.display = 'flex';
cont.appendChild(header);

const title = document.createElement('h1');
title.innerText = 'HighOnCoding';
header.appendChild(title);
header.style.backgroundColor = 'lightblue';
header.style.width = '100vw';

const navBar = document.createElement('ul');
header.appendChild(navBar);
navBar.style.listStyleType = 'none';
navBar.style.display = 'flex';
navBar.style.alignItems = 'center';

const li1 = document.createElement('li');
const li2 = document.createElement('li');
li1.innerText = 'Home';
li2.innerText = 'Categories';
navBar.appendChild(li1);
navBar.appendChild(li2);
li2.style.paddingLeft = '10px';
li1.style.fontWeight = 'bold';
li1.style.fontSize = '1.3em';
li2.style.fontSize = '1.3em';

const body = document.createElement('div');
cont.appendChild(body);
body.style.display = 'flex';
body.style.flexWrap = 'wrap';
body.style.marginLeft = '20px';
body.style.marginRight = '20px';


const intro = document.createElement('div');
body.appendChild(intro);
const introHeader = document.createElement('h2');
introHeader.innerText = 'Curse of the Current Reviews';
intro.appendChild(introHeader);
intro.style.paddingLeft = '10px';
intro.style.backgroundColor = 'grey';

const introP = document.createElement('p');
introP.innerText = 'When you want to buy any applicaitno from the Apple i Tunes store you have more choices than you can handle. Most of the user scroll past the applicaitno descriptino completely avoiding it like ads displayed on teh right column of your webpage. Their chioce is dependent on three important factors price, screenshot and reviews';
intro.appendChild(introP);

const sectionOne = document.createElement('div');
body.appendChild(sectionOne);


const sectionOneHeader = document.createElement('h3');
sectionOne.appendChild(sectionOneHeader);
sectionOneHeader.innerText = 'Hello Watchkit';
sectionOneHeader.style.color = 'blue';