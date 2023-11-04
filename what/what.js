// Image mover function

let main = document.querySelector("#main");
let image = document.querySelector("#page #what-img #img1");

main.addEventListener("mousemove", function (dets) {
    image.style.top = 1 - dets.y * 0.03 + "px";
    image.style.left = 1 - dets.x * 0.03 + "px";
})


let main2 = document.querySelector("#main");
let image2 = document.querySelector("#page #what-img #img2");

main2.addEventListener("mousemove", function (dets) {
    image2.style.top = 1 - dets.y * 0.03 + "px";
    image2.style.left = 1 - dets.x * 0.03 + "px";
})