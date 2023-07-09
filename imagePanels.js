var image1 = document.getElementById("one");
var image2 = document.getElementById("two");
var image3 = document.getElementById("three");

var list = [image1, image2, image3];

// image1.addEventListener("mouseover", () => image1.classList.add("expand"));
// image1.addEventListener("mouseleave", () => image1.classList.remove("expand"));

// image2.addEventListener("mouseover", () => image2.classList.add("expand"));
// image2.addEventListener("mouseleave", () => image2.classList.remove("expand"));

// image3.addEventListener("mouseover", () => image3.classList.add("expand"));
// image3.addEventListener("mouseleave", () => image3.classList.remove("expand"));

for(var i = 0; i < list.length; i++) {
    list[i].addEventListener("mouseover", () => resize(enlarged, list[i]));
    list[i].addEventListener("mouseleave", () => unResize(enlarged, list[i]));
}

var enlarged;

function resize(bigImage, currImage) {
    if(enlarged == undefined) {
        currImage.classList.add("expand");
    } else {
        bigImage.style.flex = "70%";
        currImage.classList.add("expandS");
    }
}
function unResize(bigImage, currImage) {
    if(enlarged == undefined) {
        currImage.classList.remove("expand");
    } else {
        bigImage.style.flex = "80%";
        currImage.classList.remove("expandS");
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