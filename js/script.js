/*
    Copiamo la repo del carousel in una nuova cartella (attenzione ad eliminare la cartella .git) e facciamo funzionare il carousel, oltre che con i bottoni anche in autoplay al caricamento della pagina.
*/


const images = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg"
];
const slider = document.querySelector('.slider');

printImg();
    


let imageCounter = 0; 
const numImages = 5;
const items = document.getElementsByClassName('item');
items[imageCounter].classList.add('active');

setInterval(function(){
    items[imageCounter].classList.remove('active');
    imageCounter++;
    if(imageCounter === numImages){
        imageCounter = 0;
    }
    items[imageCounter].classList.add('active');
},5000);


const down = document.querySelector('.down');
const up = document.querySelector('.up');

down.addEventListener('click', function(){
    items[imageCounter].classList.remove('active');
    imageCounter++;
    if(imageCounter === numImages){
        imageCounter = 0;
    }
    console.log(imageCounter);
    items[imageCounter].classList.add('active');
});
up.addEventListener('click', function(){
    items[imageCounter].classList.remove('active');
    imageCounter--;
    if(imageCounter < 0){
        imageCounter = numImages -1;
    }
    items[imageCounter].classList.add('active');
    console.log(imageCounter);
});



function printImg(){
    let tagImg = '';
    for(let i = 0; i < images.length; i++){
        tagImg += `
            <img class="item" src="img/${images[i]}" alt="${images[i]}">
        `;
    }
    
    slider.innerHTML += tagImg;
}
 