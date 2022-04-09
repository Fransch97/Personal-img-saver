console.log("work");
let saver = document.querySelector('.save');
console.log('save');

saver.addEventListener('click', function(){
let imgBank = document.querySelector('.imgbank');
console.log(imgBank);

console.log("button works");
for (i = 0; i<1; i++){
    let imgLink = document.querySelector('input').value;
    console.log(imgLink);
    let savedImg = `<img src="${imgLink}" alt="">`;
    console.log(savedImg);
    imgBank.innerHTML += savedImg;
    document.querySelector('input').value = '';
}
})