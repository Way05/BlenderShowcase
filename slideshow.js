const images = document.getElementsByClassName("sh");
const buttons = document.querySelectorAll("button");

var slideIndex = 1;
showDiv(slideIndex);

function incrementDiv(n) {
    showDiv(slideIndex += n);
}

function setDiv(n) {
    showDiv(slideIndex = n);
}

function showDiv(n) {
    if(n > images.length) {slideIndex = 1};
    if(n < 1) {slideIndex = images.length};

    for(var i = 0; i < images.length; i++) {
        images[i].style.opacity = "0";
    }

    setTimeout(function() {
    for(var i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[slideIndex - 1].style.display = "block";
    }, 300);
    setTimeout(function() {
        images[slideIndex - 1].style.opacity = "1";
    }, 305);

    for(var i = 0; i < buttons.length; i++) {
        buttons[i].style.width = "10%";
        buttons[i].style.backgroundColor = "gray";
    }
    buttons[slideIndex - 1].style.width = "15%";
    buttons[slideIndex - 1].style.backgroundColor = "white";

    console.log(images[slideIndex - 1]);
    console.log(slideIndex);
}

function carousel() {
    setTimeout(carousel, 5000);
    incrementDiv(1);
}
carousel();