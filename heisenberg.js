function Heisenberg(){
    const correctName = "heisenberg";
    const yourName = prompt("say my name : ");
    if (yourName !== correctName){
        console.log("You know it, try Again");
    }else{
        console.log("You are right");
    }
}

Heisenberg();