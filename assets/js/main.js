/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 400,
    delay: 25,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 100});
sr.reveal('.home__social-icon',{ interval: 75}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 75});

/*===== TIMELINE SCROLL REVEAL =====*/
// Timeline section title
sr.reveal('.timeline__section-title', {
    origin: 'top',
    distance: '40px',
    duration: 400,
    delay: 25,
    reset: false
});

// Timeline section
sr.reveal('.timeline', {
    origin: 'bottom',
    distance: '30px',
    duration: 450,
    delay: 50,
    reset: false
});

// Timeline items with staggered delays
sr.reveal('.timeline__item', {
    origin: 'bottom',
    distance: '50px',
    duration: 300,
    interval: 75, // Stagger effect between items
    opacity: 0,
    scale: 0.9,
    reset: false,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
});

// Timeline line animation
sr.reveal('.timeline__line', {
    origin: 'top',
    distance: '0px',
    duration: 500,
    delay: 100,
    scale: 0,
    reset: false,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
});

// Timeline line fill animation
sr.reveal('.timeline__line-fill', {
    origin: 'top',
    distance: '0px',
    duration: 250,
    delay: 200,
    scale: 1,
    reset: false,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    beforeReveal: function(el) {
        el.classList.add('revealed');
    }
});

/*===== SIMPLE BLOB HOVER EFFECT =====*/
document.addEventListener('DOMContentLoaded', function() {
    const blob = document.querySelector('.home__blob');
    const homeSection = document.querySelector('.home');
    
    if (!blob || !homeSection) return;
    
    // Simple hover effect - expand on hover
    homeSection.addEventListener('mouseenter', () => {
        blob.style.transition = 'transform 0.3s ease-out';
        blob.style.transform = 'scale(1.1)';
    });
    
    // Return to normal when mouse leaves
    homeSection.addEventListener('mouseleave', () => {
        blob.style.transition = 'transform 0.3s ease-out';
        blob.style.transform = 'scale(1)';
    });
});

/*===== TYPEWRITER EFFECT FOR HOME TITLE =====*/
document.addEventListener('DOMContentLoaded', function() {
    const homeTitle = document.querySelector('.home__title');
    if (!homeTitle) return;
    
    // Store the original HTML structure
    const originalHTML = homeTitle.innerHTML;
    
    // Extract just the text content (without HTML tags)
    const textContent = homeTitle.textContent || homeTitle.innerText;
    
    // Create a placeholder with the same dimensions but invisible
    const placeholder = document.createElement('div');
    placeholder.style.visibility = 'hidden';
    placeholder.style.position = 'absolute';
    placeholder.style.whiteSpace = 'pre-wrap';
    placeholder.style.fontSize = window.getComputedStyle(homeTitle).fontSize;
    placeholder.style.fontWeight = window.getComputedStyle(homeTitle).fontWeight;
    placeholder.style.fontFamily = window.getComputedStyle(homeTitle).fontFamily;
    placeholder.style.lineHeight = window.getComputedStyle(homeTitle).lineHeight;
    placeholder.style.width = window.getComputedStyle(homeTitle).width;
    placeholder.innerHTML = originalHTML;
    
    // Insert placeholder before the home title
    homeTitle.parentNode.insertBefore(placeholder, homeTitle);
    
    // Clear the content but keep the element
    homeTitle.innerHTML = '';
    
    let i = 0;
    const typeSpeed = 80; // Speed in milliseconds per character
    
    function typeWriter() {
        if (i < textContent.length) {
            // Add the character to the text content
            const currentText = textContent.substring(0, i + 1);
            
            // Only add the span when the complete word "Howard" is present
            if (currentText.includes('Howard') && currentText.indexOf('Howard') + 6 <= currentText.length) {
                // The word "Howard" is complete, so we can color it
                const beforeHoward = currentText.substring(0, currentText.indexOf('Howard'));
                const afterHoward = currentText.substring(currentText.indexOf('Howard') + 6);
                homeTitle.innerHTML = beforeHoward + '<span class="home__title-color">Howard</span>' + afterHoward;
            } else {
                homeTitle.innerHTML = currentText;
            }
            
            i++;
            setTimeout(typeWriter, typeSpeed);
        }
    }
    
    // Start the typewriter effect after a short delay
    setTimeout(typeWriter, 500);
}); 
