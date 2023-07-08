const images = document.getElementsByClassName("sh");
console.log(images.length);

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
        images[i].style.display = "none";
    }

    images[slideIndex - 1].style.display = "block";

    console.log(images[slideIndex - 1]);
    console.log(slideIndex);
}