const animation_img = document.getElementById("animation_img");
const animation1 = document.getElementById("animation1");
const animation2 = document.getElementById("animation2");
const animation3 = document.getElementById("animation3");
let cnt = 1;
const interval = setInterval(() => {
    switch (cnt) {
        case 0:
            func1();
            break;
        case 1:
            func2();
            break;
        case 2:
            func3();
            break;
    }
    cnt++;
    if (cnt > 2) { cnt = 0; }
}, 8000);
function func1() {
    const path = "/img/back.png";
    animation_img.setAttribute("src", path);
    animation1.classList.remove("btn-s");
    animation1.classList.add("btn-l");
    animation2.classList.remove("btn-l");
    animation2.classList.add("btn-s");
    animation3.classList.remove("btn-l");
    animation3.classList.add("btn-s");
    cnt = 0;
}
function func2() {
    const path = "/img/背景１.png";
    animation_img.setAttribute("src", path);
    animation1.classList.remove("btn-l");
    animation1.classList.add("btn-s");
    animation2.classList.remove("btn-s");
    animation2.classList.add("btn-l");
    animation3.classList.remove("btn-l");
    animation3.classList.add("btn-s");
    cnt = 1;
}
function func3() {
    const path = "/img/背景２.png";
    animation_img.setAttribute("src", path);
    animation1.classList.remove("btn-l");
    animation1.classList.add("btn-s");
    animation2.classList.remove("btn-l");
    animation2.classList.add("btn-s");
    animation3.classList.remove("btn-s");
    animation3.classList.add("btn-l");
    cnt = 2;
}






