let sections;

window.addEventListener('load', init);

function init() {
    document.querySelector(".container").addEventListener('scroll', checkPosition);
    sections = document.querySelectorAll(".section").length;

}

function checkPosition(event) {
    let container = document.querySelector(".container");
    let section = (Math.floor(container.scrollTop / window.visualViewport.height) + 1);
    if(section == sections) {
        document.querySelector(".floater").style.opacity = 0;
        document.querySelector(".floater").style.cursor = "default";
    } else {
        document.querySelector(".floater").style.opacity = 1;
    }
}

function scrollNext() {
    let container = document.querySelector(".container");
    // container.scrollBy(0, window.visualViewport.height, );
    container.scrollBy({
        top: window.visualViewport.height,
        behavior: "smooth"
    })
}