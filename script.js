let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let heading = document.querySelector('h1');
let btn = document.querySelector('button');

function diceShuffle() {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    img1.setAttribute('src', `images/dice${randomNumber1}.png`);
    img2.setAttribute('src', `images/dice${randomNumber2}.png`);

    if (randomNumber1 > randomNumber2) {
        heading.innerText = "🚩 Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        heading.innerText = "Player 2 Wins! 🚩";
    } else {
        heading.innerText = "Draw!";
    }
};

btn.addEventListener('click', diceShuffle);