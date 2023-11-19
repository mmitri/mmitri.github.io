// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarSupportedContent');
// For the smooth transition effect
const header = document.querySelector('.navbar');
const text = "a computer engineer from New York";
const textContainer = document.querySelector('.typing-animation');
let i = 0;

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
// Function to perform the typing animation
function typeWriter() {
    if (i < text.length) {
        textContainer.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // Typing speed (adjust if needed)
    }
}
// Delay the start of the typing animation
window.onload = function() {
    setTimeout(() => {
        typeWriter();
    }, 2000); // Delay time (milliseconds)
};

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