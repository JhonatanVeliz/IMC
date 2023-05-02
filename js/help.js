// BOTONES DE LAS INSTRUCCIONES
const btn = document.querySelectorAll('.btn--help'),
      help= document.querySelector('.help');

const helpPosition = ()=>{
    help.classList.toggle('help--in-out');
};

btn.forEach((e)=>{
    e.addEventListener('click', helpPosition);
});