const cardImgs = document.getElementsByClassName("cardImg");
const arrCardImgs = [...cardImgs];

arrCardImgs.forEach(cardImg => {
    cardImg.src = "https://unsplash.it/1080/19"+j+i;
    i==9? j++ : i++;
    i==9? i=0 : 0;
});