const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));

var image = document.getElementById("bg");
var button = document.getElementById("button");

button.addEventListener("mouseover", () => {
    image.style.filter = "brightness(50%)";
})
button.addEventListener("mouseleave", () => {
    image.style.filter = "brightness(100%)";
})