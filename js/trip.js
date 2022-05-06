const hakataImg = document.querySelector('#hakata');
const towerImg = document.querySelector('#tower');
const momochiImg = document.querySelector('#momochi');
const foodImg1 = document.querySelector('#food1');
const foodImg2 = document.querySelector('#food4');
const yamakasaImg = document.querySelector('#yamakasa1');

hakataImg.addEventListener('click', () => {
    window.open("https://canalcity.co.jp/korea/about");
});

towerImg.addEventListener('click', () => {
    window.open("https://yokanavi.com/ko/spot/26798/");
});

momochiImg.addEventListener('click', () => {
    window.open("https://yokanavi.com/ko/spot/27128/");
});

foodImg1.addEventListener('click', () => {
    window.open("https://www.japankuru.com/kr/food/e2224.html");
});

foodImg2.addEventListener('click', () => {
    window.open("https://yokanavi.com/ko/feature/68008/");
});

yamakasaImg.addEventListener('click', () => {
    window.open("https://yokanavi.com/ko/feature/29244/");
});

function backPage() {
    window.location.href = "index.html";
}