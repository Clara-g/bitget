let DIV = document.getElementsByTagName('div')[0];
const IMG = document.getElementsByTagName('img')[1];
const VIDEO =  document.getElementsByTagName("video")[0];


VIDEO.addEventListener('click', function(){
    DIV.style.display="none";
    IMG.style.display="none";
    VIDEO.play= true;
});

VIDEO.onplay = (event) => {
    DIV.style.display="none";
    IMG.style.display="none";
}


IMG.addEventListener('click',function(){
    VIDEO.play();
    IMG.style.display="none";
    DIV.style.display="none";
    
});


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
    IMG.style.display="none";
    DIV.style.display="none";
    VIDEO.setAttribute("autoplay", "true");
}


