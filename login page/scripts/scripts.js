// eye image 
let eyeimg = document.querySelector('.pass-visibility');
// password input 
let passInput = document.querySelector('#password'); 

passInput.addEventListener('keyup',function(){
    let passInputLength = passInput.value.length;
    if (passInputLength == 0){
        eyeimg.style.display = 'none';
    }else{
        eyeimg.style.display = 'inline-block';
    }
});

eyeimg.addEventListener('click', function(){
    let passInputType = passInput.getAttribute('type');
    if (passInputType == 'password'){
        passInput.setAttribute('type', 'text');
        eyeimg.setAttribute('src', 'assets/invisible-eye.png');
    }
    else{
        passInput.setAttribute('type', 'password');
        eyeimg.setAttribute('src', 'assets/visible-eye.png');
    }
});