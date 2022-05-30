progressCircleContainer=document.querySelector('.progress_circle__container');
progressCircleContainerDesc=progressCircleContainer.querySelectorAll('*');
buttonPrev=document.querySelector('.button--prev');
buttonNext=document.querySelector('.button--next');

buttonNext.addEventListener('click',function(){
    for(let i=0;i<progressCircleContainerDesc.length;i++){
        if(progressCircleContainerDesc[i].classList.contains('inactive')){
            remClass('inactive',progressCircleContainerDesc[i]);
            addClass('active',progressCircleContainerDesc[i]);
            if(i==progressCircleContainerDesc.length-1){
                remClass('active--btn',buttonNext);
                addClass('inactive--btn',buttonNext);
            }
            break;
        }
        if(progressCircleContainerDesc[i].classList.contains('inactive--btn')){
            remClass('inactive--btn',progressCircleContainerDesc[i]);
            addClass('active--btn',progressCircleContainerDesc[i]);
            if(i==1){
                remClass('inactive--btn',buttonPrev);
                addClass('active--btn',buttonPrev);
            }
            break;
        }
    }
});

buttonPrev.addEventListener('click',function(){
    for(let i=progressCircleContainerDesc.length-1;i>=1;i--){
        if(progressCircleContainerDesc[i].classList.contains('active')){
            remClass('active',progressCircleContainerDesc[i]);
            addClass('inactive',progressCircleContainerDesc[i]);
            if(i==progressCircleContainerDesc.length-1){
                remClass('inactive--btn',buttonNext);
                addClass('active--btn',buttonNext);
            }      
            break;
        }
        if(progressCircleContainerDesc[i].classList.contains('active--btn')){
            remClass('active--btn',progressCircleContainerDesc[i]);
            addClass('inactive--btn',progressCircleContainerDesc[i]);
            if(i==1){
                remClass('active--btn',buttonPrev);
                addClass('inactive--btn',buttonPrev);
            }
            break;
        }
    }
});

function remClass(str,el){
    el.classList.remove(str);
}

function addClass(str,el){
    el.classList.add(str);
}