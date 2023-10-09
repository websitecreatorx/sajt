const red2 = document.querySelector('.red2')
const sivo = document.querySelector('header')
const sivo1 = document.querySelector('.red3')
const Top = document.querySelector('.top')
const scrollableElement = document.querySelector('.visiblecards')
const scrollableElement1 = document.querySelector('.visiblecards1')
const scrollableElement2 = document.querySelector('.peoplesayvisiblecards')
const scrollableElement2Visible = document.querySelector('.peoplesayp')
const visina = document.querySelector('.crvenastrelica')
const crveno = document.querySelector('.crvenirow')
const dot1 = document.querySelector('.dot1')
const dot2 = document.querySelector('.dot2')
const dott1 = document.querySelector('.dott1')
const dott2 = document.querySelector('.dott2')
const dott3 = document.querySelector('.dott3')

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
let scrollAmount = scrollableElement.offsetWidth - 1

function scroll(){
    scrollableElement.scrollBy(scrollAmount, myinterval);
}

function scrollback(){
    scrollableElement.scrollLeft = scrollBack;
}

scrollableElement.addEventListener('scroll', function(){
    if(scrollableElement.scrollLeft > scrollAmount){
        setTimeout(scrollback, 3000)
        clearInterval(myinterval)
}})

scrollableElement.addEventListener('scroll', function(){
    if(scrollableElement.scrollLeft === 0){
        myinterval = setInterval(scroll, 3000)
}})


const scrollAmount1 = scrollableElement1.offsetWidth + 100
myinterval1 = setInterval(scroll1, 6000)

function scroll1(){
    scrollableElement1.scrollBy(scrollAmount1, intervalTime)
    dot2.classList.add('activedot')
    dot1.classList.remove('activedot')
}

function scrollback1(){
    scrollableElement1.scrollLeft = scrollBack;
    dot1.classList.add('activedot')
    dot2.classList.remove('activedot')
}

scrollableElement1.addEventListener('scroll', function(){
    if(scrollableElement1.scrollLeft === scrollableElement1.scrollWidth - scrollableElement1.clientWidth){
        timeout = setTimeout(scrollback1, 6000)
        clearInterval(myinterval1)
    }
})

scrollableElement1.addEventListener('scroll', function(){
    if(scrollableElement1.scrollLeft === 0){
        myinterval1 = setInterval(scroll1, 6000)
        clearTimeout(timeout)
    }
})

timeout = setTimeout(scrollback1, 0)

dot1.addEventListener('click', function(){
    clearInterval(myinterval1)
    clearTimeout(timeout)
    timeout = setTimeout(scrollback1, 0)
})

dot2.addEventListener('click', function(){
    clearInterval(myinterval1)
    clearTimeout(timeout)   
    myinterval1 = setInterval(scroll1, 0)
})

dott1.addEventListener('click', function(){
    clearInterval(myinterval2)
    dott1.classList.add('activedot1')
    dott2.classList.remove('activedot1')
    dott3.classList.remove('activedot1')
    counter = 0
    scrollableElement2.scrollTo(scrollBy1*0, 0)
    clearTimeout(timeout1)
    myinterval2 = setInterval(scrollAmount2, 3000)
})

dott2.addEventListener('click', function(){
    clearInterval(myinterval2)
    dott1.classList.remove('activedot1')
    dott2.classList.add('activedot1')
    dott3.classList.remove('activedot1')
    counter = 1
    scrollableElement2.scrollTo(scrollBy1, 0)
    clearTimeout(timeout1)
    myinterval2 = setInterval(scrollAmount2, 3000)   
})

dott3.addEventListener('click', function(){
    clearInterval(myinterval2)  
    dott1.classList.remove('activedot1')
    dott2.classList.remove('activedot1')
    dott3.classList.add('activedot1')
    counter = 2
    scrollableElement2.scrollTo(scrollBy1*2, 0)
    clearTimeout(timeout1) 
    myinterval2 = setInterval(scrollAmount2, 3000)    
})

window.addEventListener('load', function(){
    scrollableElement2.scrollBy(scrollBack, 0)
    dott1.classList.add('activedot1')
})

let counter = 0
const scrollBy1 = scrollableElement2Visible.offsetWidth

function scrollAmount2(){
    scrollableElement2.scrollBy(scrollBy1, 3000)
    counter++
    console.log(counter)
}

function scrollBack2(){
    scrollableElement2.scrollBy(scrollBack, 3000)
    counter = 0
    console.log(counter)
}

scrollableElement2.addEventListener('scroll', function(){
    if(counter === 0){
        dott1.classList.add('activedot1')
        dott2.classList.remove('activedot1')
        dott3.classList.remove('activedot1')
    }
    if(counter === 1){
        dott1.classList.remove('activedot1')
        dott2.classList.add('activedot1')
        dott3.classList.remove('activedot1')
    }
    if(counter === 2){
        dott1.classList.remove('activedot1')
        dott2.classList.remove('activedot1')
        dott3.classList.add('activedot1')
        clearTimeout(timeout1) 
        timeout1 = setTimeout(scrollBack2, 3000)
    }
})
timeout1 = setTimeout(scrollBack2, 0)
myinterval2 = setInterval(scrollAmount2, 3000)