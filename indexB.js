let main = document.getElementById('main');
let stars1 = document.getElementById('stars1');
let moon2 = document.getElementById('moon2');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let mountains7 = document.getElementById('mountains7');
let novil = document.getElementById('novil');

window.onscroll= function(){
    let value = scrollY;
    stars1.style.left = value + 'px';
    moon2.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river5.style.top = value  + 'px';
    boat6.style.top = value  + 'px';
    boat6.style.left = value * 3 + 'px';
    novil.style.fontSize = value + 'px';
    if (scrollY >= 67) {
        novil.style.fontSize = 67 + 'px';
        novil.style.position = 'fixed';
        if (scrollY >=500) {
            novil.style.display = 'none';
        }else{
            novil.style.display = 'block';
        }
        if (scrollY >=127) {
            main.style.background='linear-gradient(#215c9c,rgb(0, 1, 40))' 
        }else{
            main.style.background='linear-gradient(#011c53,rgb(0, 1, 40))' 

        }
    }
}