// slider
const slides = document.querySelectorAll('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let i = 0;

function ActiveSlides(n){
    for(slide of slides)
        slide.classList.remove('active');
        slides[n].classList.add('active');
}

// fucntion for next btn
next.addEventListener('click', ()=>{
    if(i == slides.length- 1){
        i = 0;
        ActiveSlides(i);
    }else{
        i++;
        ActiveSlides(i);
    }
})

// function for prev button
prev.addEventListener('click', ()=>{
    if(i == 0){
        i = slides.length - 1;
        ActiveSlides(i);
    }else{
        i--;
        ActiveSlides(i);
    }
})


function openTab (event, tabId) {
    event.preventDefault();
    
    document.querySelectorAll('.menu .list a.active').forEach(link =>{
        link.classList.remove('active');
    })

    event.currentTarget.classList.add('active');

    document.querySelectorAll('.food').forEach(content =>{
        content.classList.remove('active');
    })  
    
    document.getElementById(tabId).classList.add('active');

      
} 