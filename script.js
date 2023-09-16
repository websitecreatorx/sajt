const red2 = document.querySelector('.red2');
const sivo = document.querySelector('header');
const sivo1 = document.querySelector('.red3')

red2.addEventListener('click', function(){
    red2.classList.toggle('anim');
    sivo1.classList.toggle('vidljiv')
    sivo1.classList.toggle('nevidljiv')
})


window.addEventListener('scroll', function()  {
    if (window.pageYOffset > 0){
        sivo.classList.add('sivo');
        sivo1.classList.add('sivo1');
    }else{
        sivo.classList.remove('sivo');
        sivo1.classList.remove('sivo1');
    }
});