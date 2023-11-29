// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarSupportedContent');
// For the smooth transition effect
const header = document.querySelector('.navbar');
const textContainerHero = document.querySelector('.typing-animation');
const textHero = "a computer engineer from New York";
const textContainerAbout = document.querySelector('.about-me');
const textAbout = "About Me";
const textContainerSkills = document.querySelector('.skills');
const textSkills = "Skills";

let i = 0; let j = 0; let k = 0;

// Function to adjust navbar animation
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const maxScroll = 150; // You can adjust this threshold if needed
    if (scrollPos > maxScroll) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
// Delay the start of the typing animation
window.onload = function() {
    setTimeout(() => {
        typeWriterHero();
    }, 2000); // Delay time (milliseconds)
};
// Function to perform the typing animation for Hero Text
function typeWriterHero() {
    if (i < textHero.length) {
        textContainerHero.textContent += textHero.charAt(i);
        i++;
        setTimeout(typeWriterHero, 90); // Typing speed (adjust if needed)
    }
}
// Function to perform the typing animation for About Me Text
function typeWriterAbout() {
    if (j < textAbout.length) {
        textContainerAbout.textContent += textAbout.charAt(j);
        j++;
        setTimeout(typeWriterAbout, 230); // Typing speed (adjust if needed)
    }
}
// Function to perform the typing animation for Skills Text
function typeWriterSkills() {
    if (k < textSkills.length) {
        textContainerSkills.textContent += textSkills.charAt(k);
        k++;
        setTimeout(typeWriterSkills, 230); // Typing speed (adjust if needed)
    }
}
// Function to check if the about section is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// Function to handle scroll event
function handleScroll() {
    const aboutSection = document.getElementById('about');
    if (isElementInViewport(aboutSection)) {
        // Execute the typing animation when the About section is in the viewport
        typeWriterAbout();
        window.removeEventListener('scroll', handleScroll); // Remove the scroll event listener after executing the animation
    }
}
// Add scroll event listener to trigger the typing animation
window.addEventListener('scroll', handleScroll);

// Function to check if the skills section is in the viewport
function handleSkillsScroll() {
    const skillsSection = document.getElementById('skills');

    if (isElementInViewport(skillsSection)) {
        // Execute the typing animation when the Skills section is in the viewport
        typeWriterSkills();
        window.removeEventListener('scroll', handleSkillsScroll); // Remove the scroll event listener after executing the animation
    }
}

// Add scroll event listener to trigger the typing animation for Skills
window.addEventListener('scroll', handleSkillsScroll);

document.addEventListener('scroll', function(){
    const trigger = document.querySelector('.skill-category');
    const triggerPosition = trigger.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (triggerPosition < windowHeight * 0.75){
        const items = document.querySelectorAll('.falling-item');
        items.forEach((item, index)=>{
            setTimeout(()=>{
                item.classList.add('animate');
            }, index * 400); // Adjust delay timing if needed
        });

        // Remove the scroll event listener after the animation triggers once
        document.removeEventListener('scroll', this);
    }
});

function downloadFile() {
    const fileUrl = 'files/markmitriResume.pdf'; // Replace with your file's URL or path
    const fileName = 'markmitriResume.pdf'; // Replace with the desired file name for download

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.target = '_blank'; // Optional: Opens the link in a new tab

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}