// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Smooth scroll to the target section
        });
    });
});

// Reveal sections on scroll
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    const backToTopButton = document.createElement('button'); // Create back-to-top button
    backToTopButton.innerText = 'Top';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    const options = {
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Add 'show' class when the section is in view
                observer.unobserve(entry.target); // Stop observing once the section is revealed
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('hidden'); // Initially hide sections
        observer.observe(section); // Start observing sections
    });

    // Show back-to-top button when scrolling down
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible'); // Show button
        } else {
            backToTopButton.classList.remove('visible'); // Hide button
        }
    });

    // Smooth scroll to top when back-to-top button is clicked
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll to top
        });
    });
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll to top
        });
    });
});
