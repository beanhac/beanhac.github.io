let menu = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navList.classList.toggle("open");
};

const scrollReveal = ScrollReveal ({
    distance: "65px",
    duration: 2600,
    delay: 450,
    reset: true
});

scrollReveal.reveal(".hero-text", {delay: 200, origin: "top"});
scrollReveal.reveal(".hero-status", {delay: 200, origin: "bottom"});
scrollReveal.reveal(".logo", {delay: 250, origin: "left"});
scrollReveal.reveal(".navlist", {delay: 300, origin: "right", mobile: false});
scrollReveal.reveal(".hero-img", {delay: 350, origin: "top"});