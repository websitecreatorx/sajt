const worker = new Worker('script.js');
const red2 = document.querySelector('.red2')
const sivo = document.querySelector('header')
const sivo1 = document.querySelector('.red3')
const Top = document.querySelector('.top')
const scrollableElement = document.querySelector('.wrapper')
const visina = document.querySelector('.crvenastrelica')
const crveno = document.querySelector('.crvenirow')

window.addEventListener('load', function(){
    setTimeout(scrollback, 0)
})

red2.addEventListener('click', function(){
    red2.classList.toggle('anim');
    sivo1.classList.toggle('vidljiv')
    sivo1.classList.toggle('nevidljiv')
})



window.addEventListener('scroll', function()  {
    if (window.pageYOffset > 0){
        sivo.classList.add('sivo')
        sivo1.classList.add('sivo1')
    }else{
        sivo.classList.remove('sivo')
        sivo1.classList.remove('sivo1')
    }
});

const crvenirow1 = crveno.offsetHeight/30
const elementHeight = visina.offsetHeight
const oboje = crvenirow1 + elementHeight


window.addEventListener('scroll', function()  {
    if (window.pageYOffset > oboje){
        Top.classList.add('dugme')
        Top.classList.remove('nedugme')
    }else{
        Top.classList.remove('dugme')
        Top.classList.add('nedugme')
    }
    if(window.innerWidth < 768){
        if (window.pageYOffset > 3640){
            Top.classList.add('dugme')
            Top.classList.remove('nedugme')
        }else{
            Top.classList.remove('dugme')
            Top.classList.add('nedugme')
        }    
    }
});

const scrollBack = -10000;
const intervalTime = 3000;
myinterval = setInterval(scroll, intervalTime)
let scrollAmount = scrollableElement.offsetWidth

function scroll(){
    scrollableElement.scrollBy(scrollAmount, myinterval);
}

function scrollback(){
    scrollableElement.scrollLeft = scrollBack;
}

scrollableElement.addEventListener('scroll', function(){
    if(scrollableElement.scrollLeft > scrollAmount + scrollAmount/4){
        setTimeout(scrollback, 3000)
        clearInterval(myinterval)
}})

scrollableElement.addEventListener('scroll', function(){
    if(scrollableElement.scrollLeft === 0){
        myinterval = setInterval(scroll, intervalTime)
}})