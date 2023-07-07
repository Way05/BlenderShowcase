const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('showLR');
            observer.unobserve(entry.target);
        }
    });
});

const leftElements = document.querySelectorAll('.hiddenLeft');
const rightElements = document.querySelectorAll('.hiddenRight');

leftElements.forEach((el) => observer.observe(el));
rightElements.forEach((el) => observer.observe(el));