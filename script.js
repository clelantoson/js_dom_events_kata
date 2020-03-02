// FONCTIONNALITE 1 :

let footer = document.querySelector('footer');
console.log(footer);

const clickFooter = () => {
  console.log("clique");
};

footer.addEventListener('click', clickFooter);

// FONCTIONNALITE - Bis : //

let x = 0;
const clickFooterbis = () => {
  x ++;
  console.log(`clique ${x}`);
};

footer.addEventListener('click', clickFooterbis);

// FONCTIONNALITE 2 : //
// Cibler le bouton hamburger

let buttonEl = document.querySelector('button.navbar-toggler');
let navBarHeaderEl = document.querySelector('#navbarHeader')
// let navBarHeaderElDisplay = false; //décommenter pour faire sans toggle

const deleteOrAddCollapseClick = () => {

  navBarHeaderEl.classList.toggle("collapse");

  // if (navBarHeaderElDisplay == false){
  //   navBarHeaderEl.classList.remove('collapse')
  //   navBarHeaderElDisplay = true;
  // } else if (navBarHeaderElDisplay == true){
  //   navBarHeaderEl.classList.add('collapse');
  //   navBarHeaderElDisplay = false;
  // } 
}
buttonEl.addEventListener('click', deleteOrAddCollapseClick);


// FONCTIONNALITE 3 //
let editButtonEl = document.querySelectorAll('.btn.btn-sm.btn-outline-secondary')[0]
console.log(editButtonEl)

const turnRed = () => {
  editButtonEl.style.color = "red";
}
editButtonEl.addEventListener('click', turnRed);


// Fonctionnalité 4 : //
let editButton2El = document.querySelectorAll('.btn.btn-sm.btn-outline-secondary')[1]


const turnGreen = () => {
  if (editButton2El.style.color === 'green'){
    editButton2El.style.color = '' ;
  } else (editButton2El.style.color = 'green'); 
}
editButton2El.addEventListener('click', turnGreen);

// Fonctionnalité 5 : //


let linkCdnEl = document.getElementsByTagName('link')[0];
let navBarEl = document.querySelector('div.navbar');

const disableCdn = () => {
  if (linkCdnEl.disabled === false){
    linkCdnEl.disabled = true ;
  } else (linkCdnEl.disabled = false);
}

navBarEl.addEventListener('dblclick', disableCdn);

// Fonctionnalité 6 : //

let viewButtonEl = document.querySelector('.btn.btn-sm.btn-success');
let viewCardEl = document.querySelectorAll('.card.mb-4.box-shadow');
let textCardEl = document.querySelectorAll('p.card-text');

const changeCard = () => {
  viewCardEl.forEach(c => {
    if (c.style.width === '100%'){
      c.style.width = '20%' 
      textCardEl.style.display = 'none'
    } else {
      c.style.width = '100%'
      textCardEl.style.display = ''
    }
  }
  )}

viewButtonEl.addEventListener('mouseover', changeCard);

// Fonctionnalité 7 : //


