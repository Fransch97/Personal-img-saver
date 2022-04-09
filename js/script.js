console.log("work");
let saver = document.querySelector('.save');
console.log('save');

let imgCounter = 0;


saver.addEventListener('click', function(){
let imgBank = document.querySelector('.imgbank');
console.log(imgBank);

console.log("button works");
console.log(imgCounter)
    imgCounter++;
    console.log(imgCounter);
    if(imgCounter <= 10){
        let imgLink = document.querySelector('input').value;
        console.log(imgLink);
        let savedImg = `<div class="addedimg${imgCounter}" style="display:inline-block;"><img src="${imgLink}" alt=""> <button class="rimuovi${imgCounter}">Rimuovi</button></div>`;
        console.log(savedImg);
        imgBank.innerHTML += savedImg;
        document.querySelector('input').value = '';
    }else{
        alert("Hai già inserito il massimo")
    }

let divToRemove = document.querySelector('.addedimg'+ imgCounter);
   
let rimuovifunction = document.querySelector('.rimuovi'+imgCounter);
    rimuovifunction.addEventListener('click', function(){
        console.log("funziona");
        divToRemove.remove();
        
        divToRemove = imgCounter--;
        rimuovifunction = imgCounter--;
})


})



    



