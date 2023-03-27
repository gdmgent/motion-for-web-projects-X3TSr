const $cardImgs = document.getElementsByClassName("cardImg");
const $head = document.getElementsByTagName('head')[0];


for (const $cardImg of $cardImgs) {
    const random = Math.round(Math.random() * 99);
    const url = "https://unsplash.it/1080/19"+ (random < 10 ? `0${random}` : random);
    $cardImg.src = url;
};