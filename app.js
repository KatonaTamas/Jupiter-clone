window.addEventListener('scroll', addSmootie);

function addSmootie(){

  const nav = document.querySelector('nav');
  const h2 = document.querySelector('nav > h2');
  const ul = document.querySelector('nav > ul');
  const li = document.querySelectorAll('nav > ul li');

  if (window.scrollY != 0)  {
    nav.classList.add('new-nav');
    h2.classList.add('align-jupiter');
    ul.classList.add('align-nav-list');
    li.forEach(function(el){
      el.classList.add('nav-list-items');
    });


    }else{
    nav.classList.remove('new-nav');
    h2.classList.remove('align-jupiter');
    ul.classList.remove('align-nav-list');
    li.forEach(function(el){
      el.classList.remove('nav-list-items');
    });
  }
}

/* Scroll on top */

document.querySelector('.toTop').addEventListener('click', scrollToTop);

function scrollToTop(){
  window.scrollTo(0, 0);
}
