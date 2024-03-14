let slideIndex = 0;
let direction = 1; 
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function nextSlide() {
    slideIndex += direction;
    
    if (slideIndex === totalSlides) {
        direction = -1; 
        slideIndex -= 2; 
    } else if (slideIndex === -1) {
        direction = 1; 
        slideIndex += 2; 
    }
    
    updateSlide();
}

function updateSlide() {
    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

setInterval(nextSlide, 3000); 


document.addEventListener('DOMContentLoaded', function() {
    
    var button = document.querySelector('.changeButton');
    var container = document.querySelector('.changeBlockHorizontallScroll');
    var scrolledRight = false;

    button.addEventListener('click', function() {
        
        if (scrolledRight) {
            container.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
            scrolledRight = false;
        } else {
            
            container.scrollTo({
                left: container.scrollWidth - container.clientWidth,
                behavior: 'smooth'
            });
            scrolledRight = true;
        }
    });
});
