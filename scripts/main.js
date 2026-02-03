const yesButton = document.querySelector('#yesButton');
const noButton = document.querySelector('#noButton');
const myHeading = document.querySelector("h1")
let images = ["images/cute_face.gif", "images/spongebob.gif", "images/sad.gif", "images/sad_and_angry.gif", "images/straight_face.gif"];
let currentImageIndex = 0;

let yesSize = 100;
let yesFontSize = 16;

yesButton.addEventListener('click', () => {
    const myHeading = document.querySelector("h1")
    myHeading.textContent = "YAY I LOVE YOU!"
    const imgElement = document.getElementById("cuteFace");
    imgElement.src = "images/yay.gif";
    yesButton.style.width = '';
    yesButton.style.height = '';
    yesButton.style.fontSize = '';
}); 

noButton.addEventListener('click', () => {
    const imgElement = document.getElementById("cuteFace");
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imgElement.src = images[currentImageIndex];
    yesSize += 30;
    yesFontSize += 20;
    yesButton.style.width = yesSize + "px";
    yesButton.style.height = yesSize + "px";
    yesButton.style.fontSize = yesFontSize + "px";
    myHeading.textContent = "Please say yes!";
});