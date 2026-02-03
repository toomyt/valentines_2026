const yesButton = document.querySelector('#yesButton');
const noButton = document.querySelector('#noButton');

let yesSize = 100;
let yesFontSize = 16;

yesButton.addEventListener('click', () => {
    const myHeading = document.querySelector("h1")
    myHeading.textContent = "YAY I LOVE YOU!"
    let imgElement = document.getElementById("cuteFace");
    imgElement.src = "yay.gif";
}); 

noButton.addEventListener('click', () => {
    yesSize += 30;
    yesButton.style.width = yesSize + "px";
    yesButton.style.height = yesSize + "px";
    yesButton.style.fontSize = yesFontSize + "px";
});