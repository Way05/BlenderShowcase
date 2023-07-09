var image1 = document.getElementById("one");
var image2 = document.getElementById("two");
var image3 = document.getElementById("three");

var list = [image1, image2, image3];

for(var i = 0; i < list.length; i++) {
    (function() {
        var element = list[i];
        element.addEventListener("mouseover", () => resize(enlarged, element));
        element.addEventListener("mouseleave", () => unResize(enlarged, element));
    }());   
}

var enlarged;

function resize(bigImage, currImage) {
    if(enlarged == undefined) {
        currImage.classList.add("expand");
    } else {
        if(bigImage !== currImage) {
            bigImage.style.flex = "70%";
            // currImage.classList.add("expandS");
            currImage.style.flex = "20%";
        }
    }
}
function unResize(bigImage, currImage) {
    if(enlarged == undefined) {
        currImage.classList.remove("expand");
    } else {
        if(bigImage !== currImage) {
            bigImage.style.flex = "80%";
            // // currImage.classList.remove("expandS");
            currImage.style.flex = "10%";}
    }
}

$(image1).on("click", function() {
    image1.style.flex = "80%";

    image2.style.flex = "10%";
    image3.style.flex = "10%";

    enlarged = image1;
});
$(image2).on("click", function() {
    image2.style.flex = "80%";

    image1.style.flex = "10%";
    image3.style.flex = "10%";

    enlarged = image2;
});
$(image3).on("click", function() {
    image3.style.flex = "80%";

    image2.style.flex = "10%";
    image1.style.flex = "10%";

    enlarged = image3;
});