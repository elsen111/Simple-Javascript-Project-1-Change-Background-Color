let btn = document.querySelector('button'); 
let temp;


const colors = [
    '#EE82EE',
    '#FF0000',
    '#0000FF',
    '#FFFF00',
    '#800080',
    '#008000',
    '#FFC0CB'
];


const changeBackground = (e) => {
    let bgColor = colors[Math.floor(Math.random()*colors.length)];
    let container = e.target.parentElement;

    while(temp == bgColor) {
        bgColor = colors[Math.floor(Math.random()*colors.length)];
    }

    container.style.backgroundColor = bgColor;
    temp = bgColor;
    console.log(bgColor);
};


btn.addEventListener('click', changeBackground);