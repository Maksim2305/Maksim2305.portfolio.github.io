
/////POPUP////
let html = document.querySelector("html");
let popupButtonClose = document.querySelector("#popup-close-button");
let popupButtonOpen = document.querySelector(".collection__button");

function openPopup (){
    html.classList.add('popup-open');
}
function closePopup (){
    html.classList.remove('popup-open');
}
popupButtonOpen.addEventListener('click',openPopup);
popupButtonClose.addEventListener('click',closePopup);
html.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        closePopup ();
    }
})
/////MOBILE MENU////
let mobileBtnOpen = document.querySelector('.menu_hidden_js');
let mobileList = document.querySelector('.menu_list_js');
mobileBtnOpen.onclick = wacthMenu;
function wacthMenu(){
    console.log(mobileBtnOpen, 'кнопка');
    console.log(mobileList, 'лист');
        if(mobileList.classList.contains('mobile-popup_hidden')){
        mobileList.classList.remove('mobile-popup_hidden');
        mobileBtnOpen.textContent = 'x';
    } else {
        mobileList.classList.add('mobile-popup_hidden');
        mobileBtnOpen.textContent = 'menu';
    }
}
/////BUTTON UP////
(function(){
    const button = document.querySelector('.button-to-top_js');
    if(!button){
        return;
    }

    function toTop (){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    function handleScroll(){
        if(window.pageYOffset > 1500){
            if(button.classList.contains('button-to-top_hidden')){
                button.classList.remove('button-to-top_hidden');
            }
        } else {
            button.classList.add('button-to-top_hidden');
        }
    }
    window.addEventListener('scroll', handleScroll);
    button.addEventListener('click', toTop);
})();

/////COLLECTION COLOR////
let collectionSliders = document.querySelectorAll('.collection button');
let color1 = 'rgba(133,54,180,0.4)';
let color2 = 'rgba(133,240,180,0.4)';
let color3 = 'rgba(80,59,30,0.4)';
for(let i = 0; i < collectionSliders.length; i++){
    collectionSliders[i].addEventListener('mouseover', function (){
        if(i == 0 ){
            document.querySelector('.collection__wrapper').style.background = '';
            document.querySelector('.collection__wrapper').style.transition = 'all 1s ease';
        }
        if(i == 1 ){
            document.querySelector('.collection__wrapper').style.background = color1;
        }
        if(i == 2 ){
            document.querySelector('.collection__wrapper').style.background = color2;
        }
        if(i == 3 ){
            document.querySelector('.collection__wrapper').style.background = color3;
        }
    })
}
///DELIVERY STYLE////
let deliveryItems = document.querySelectorAll('.delivery__content_button');
for (let item of deliveryItems){
    item.addEventListener('mouseover', function(){
        item.classList.add('delivery-active');
        item.style.transition = 'all 0.5s ease';
    })
    item.addEventListener('mouseout', function(){
        item.classList.remove('delivery-active');
        item.style.transition = 'all 0.5s ease';
    })
}

//SLIDER//
let slider = document.querySelector('.slider_js');
let productImages = document.querySelectorAll('.products-item img');
console.log(slider)
console.log(productImages)
let countSlide = 0;



document.querySelector('.products__pagination__right').addEventListener('click', function(){
    countSlide++;
    if (countSlide >= productImages.length){
        countSlide = 0;
    }
    rollSlide();
})

function init (){
    slider.style.width = document.querySelector('.products-item img').width*productImages.length + 'px';
    console.log(slider.style.width);
    rollSlide();
}
window.addEventListener('resize', init);
init();


document.querySelector('.products__pagination__left').addEventListener('click', function(){
    countSlide--;
    if (countSlide < 0){
        countSlide = productImages.length - 1;
    }
    rollSlide();
})

function rollSlide (){
    let image = document.querySelector('.products-item img');
    console.log(image.width)
    slider.style.transform = 'translate(-'+countSlide*image.width + 'px)';
    slider.style.transition = 'all 1s ease';
}