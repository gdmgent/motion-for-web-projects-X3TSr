const cardImgs = document.getElementsByClassName("cardImg");
const arrCardImgs = [...cardImgs];

arrCardImgs.forEach(cardImg => {
    cardImg.src = "https://source.unsplash.com/featured/1080x19"+j+i;
    i==9? j++ : i++;
    i==9? i=0 : 0;
});