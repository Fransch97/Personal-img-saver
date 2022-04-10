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
        let savedImg = `<div class="addedimg" style="display:inline-block;"><img src="${imgLink}" alt=""> <button onclick="this.parentElement.remove();" class="rimuovi">Rimuovi</button></div>`;
        console.log(savedImg);
        imgBank.innerHTML += savedImg;
        document.querySelector('input').value = '';
    }else{
        alert("Hai già inserito il massimo")
    }
// let scrpitToAdd = document.querySelector('.extrascrpits');
// console.log(scrpitToAdd);
// scrpitToAdd.innerHTML += `
// let divToRemove${imgCounter} = document.querySelector('.addedimg${imgCounter}');
// let rimuovifunction${imgCounter} = document.querySelector('.rimuovi${imgCounter}');
// rimuovifunction${imgCounter}.addEventListener('click', function(){
//     console.log("funziona");
//     divToRemove${imgCounter}.remove();
// })
// `
;
// let divToRemove = document.querySelector('.addedimg');
// let rimuovifunction = document.querySelector('.rimuovi');
//     rimuovifunction.addEventListener('click', function(){
//         console.log("funziona");
//         console.log(rimuovifunction.target)
        // rimuovifunction.target.remove();
// })

})



        
        

    



