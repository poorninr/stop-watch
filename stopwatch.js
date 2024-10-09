let secs= document.getElementById("secs");
let milSecs=document.getElementById("mil-secs");
let mins=document.getElementById("mins")
let int=null;
let minutes=0;
let seconds = 0;
let milliseconds = 0;

document.getElementById("start").addEventListener("click",
    () => {
    if(int!==null){
        clearInterval(int)
    }
    int=setInterval(update,10)
   
    })
document.getElementById("stop").addEventListener("click",
    () => {
    clearInterval(int)
})

document.getElementById("reset").addEventListener("click",
    () => {
        clearInterval(int);
        minutes=0;
        seconds = 0;
        milliseconds = 0;
        mins.innerHTML='00'
        secs.innerHTML='00'
        milSecs.innerHTML='000'
    })
function prevzero(num){
    return num<10?"0"+num:num
}

function update(){
    milliseconds += 1; 
    if(milliseconds >= 100){
        milliseconds = 0;
        seconds += 1;
        if(seconds>=60){
            seconds=0
            minutes+=1
        }
    }
    mins.innerHTML=prevzero(minutes)
    secs.innerHTML=prevzero(seconds);
    milSecs.innerHTML=prevzero(milliseconds)
}



  
