const preload = document.getElementById("preload");
const cardImgs = document.getElementsByClassName("cardImg");
const arrCardImgs = [...cardImgs];
let i = 0
let j = 0;

arrCardImgs.forEach(cardImg => {
    let img = document.createElement("img");
    img.src = "https://source.unsplash.com/featured/1080x19"+j+i;
    preload.appendChild(img);
    cardImg.src = "https://source.unsplash.com/featured/1080x19"+j+i;
    i==9? j++ : i++;
    i==9? i=0 : 0;
});