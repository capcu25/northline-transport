const menuButton=document.querySelector('.menu-button');
const navLinks=document.querySelector('.nav-links');

menuButton.addEventListener('click',()=>{
  const open=menuButton.getAttribute('aria-expanded')==='true';
  menuButton.setAttribute('aria-expanded',String(!open));
  navLinks.classList.toggle('open',!open);
});

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',()=>{
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded','false');
  });
});

const fromInput=document.querySelector('.booking-form input[aria-label="Departure location"]');
const toInput=document.querySelector('.booking-form input[aria-label="Destination"]');

document.querySelector('.swap').addEventListener('click',()=>{
  const from=fromInput.value;
  fromInput.value=toInput.value;
  toInput.value=from;
});

document.querySelectorAll('.route-price').forEach(link=>{
  link.addEventListener('click',()=>{
    const route=link.closest('.destination').querySelector('h3').textContent;
    const places=route.split('→').map(value=>value.trim());
    if(places.length===2){fromInput.value=places[0];toInput.value=places[1];}
  });
});

document.querySelector('.booking-form').addEventListener('submit',event=>{
  event.preventDefault();
  const button=event.currentTarget.querySelector('.search-button');
  if(!fromInput.value.trim()||!toInput.value.trim()){
    button.innerHTML='Enter locations';
    setTimeout(()=>button.innerHTML='Search <span>↗</span>',1400);
    return;
  }
  button.innerHTML='Searching <span>...</span>';
  setTimeout(()=>button.innerHTML='Search <span>↗</span>',1400);
});
