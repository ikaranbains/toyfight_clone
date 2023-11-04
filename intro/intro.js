// Image mover function

let main = document.querySelector("#main");
let image = document.querySelector("#page #intro-img2 img");

main.addEventListener("mousemove", function (dets) {
    image.style.top = 1 - dets.y * 0.03 + "px";
    image.style.left = 1 - dets.x * 0.03 + "px";
})