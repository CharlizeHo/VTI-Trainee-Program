let current = document.querySelector(".current");
let images = document.querySelectorAll(".images img");

console.log(images);

images [0].style.opacity = 0.5;

images.forEach(function (item) {
    item.addEventListener("click",showImage);
})

function showImage(event){
    console.log(event);

    current.src = event.target.src;

    for (let i = 0; i < 8; i++){
    images [i].style.opacity = 1;
    }

    event.target.style.opacity = 0.5;
}
