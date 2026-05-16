incre= document.querySelector("#inc")
decre=document.querySelector("#dec")
counter = document.querySelector("#counter")
reset= document.querySelector("#reset")
let count=0
function increaseCount(){
    count++
}
function decreaseCount(){
    if(count >0){
        count--;
    }
    
}

incre.addEventListener("click",()=>{
    increaseCount()
    counter.innerHTML=count
    console.log("inc");
})

decre.addEventListener("click",()=>{
    decreaseCount()
    counter.innerHTML=count
    console.log("dec");
})

reset.addEventListener("click",()=>{
    count=0
    counter.innerHTML=count
})