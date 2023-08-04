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
        currImage.classList.add("hoverFlex");
    } else {
        if(bigImage !== currImage) {
            bigImage.style.flexBasis = "70%";
            // currImage.classList.add("expandS");
            currImage.style.flexBasis = "20%";
        }
    }
}
function unResize(bigImage, currImage) {
    if(enlarged == undefined) {
        currImage.classList.remove("hoverFlex");
    } else {
        if(bigImage !== currImage) {
            bigImage.style.flexBasis = "80%";
            // // currImage.classList.remove("expandS");
            currImage.style.flexBasis = "10%";}
    }
}

function setAllFlex(flexSize) {
    image1.style.flexBasis = flexSize;
    image2.style.flexBasis = flexSize;
    image3.style.flexBasis = flexSize;
}
function removeInlineFlex() {
    image1.style.removeProperty("flex");
    image2.style.removeProperty("flex");
    image3.style.removeProperty("flex");

}
$(image1).on("click", function() {
    image1.classList.remove("hoverFlex");
    
    if(image1.style.flexBasis == "80%") {
        setAllFlex("24%");

        removeInlineFlex();

        enlarged = undefined;
    } else {
        image1.style.flexBasis = "80%";
        image2.style.flexBasis = "10%";
        image3.style.flexBasis = "10%";

        enlarged = image1;
    }
});
$(image2).on("click", function() {
    image2.classList.remove("hoverFlex");

    if(image2.style.flexBasis == "80%") {
        setAllFlex("24%");

        removeInlineFlex();

        enlarged = undefined;
    } else {
        image2.style.flex = "80%";

        image1.style.flex = "10%";
        image3.style.flex = "10%";

        enlarged = image2;
    }
});
$(image3).on("click", function() {
    image3.classList.remove("hoverFlex");

    if(image3.style.flexBasis == "80%") {
        setAllFlex("24%");

        removeInlineFlex();

        enlarged = undefined;
    } else {
        image3.style.flex = "80%";

        image2.style.flex = "10%";
        image1.style.flex = "10%";

        enlarged = image3;
    }
});