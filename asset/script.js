var para = new Rellax('.parallax')
var rickCLick=1;
let prog=document.getElementById('scr');
let totalh=document.body.scrollHeight-window.innerHeight;
window.onscroll = function(){
    let prgh = (window.pageYOffset/totalh)*100;
    prog.style.height=prgh+"%";
}

function rickroll(){
    rr=document.getElementById("rick");
    if(rickCLick%5==0){
        window.open("rickroll.html");
    }
    else{
        rickCLick++;
        var j=7-rickCLick;
        rr.innerHTML="Click "+j+" times for magic";
    }
}