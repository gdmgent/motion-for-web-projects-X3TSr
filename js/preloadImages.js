const head = document.getElementsByTagName('head')[0];
let i = 0
let j = 0;

for (let i = 0; i < 3; i++) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = "https://source.unsplash.com/featured/1080x19"+j+i;
    head.appendChild(link);
    i==9? j++ : i++;
    i==9? i=0 : 0;
}