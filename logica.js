let casillas = document.getElementsByName("casillas");
console.log(casillas)

function validar(color){
    console.log(color)
    if(casillas[0].style.backgroundColor== color && casillas[1].style.backgroundColor== color && casillas[2].style.backgroundColor== color){
        console.log("a")
        alert("Gana "+ color)
        window.location.href="index.html"
    }else if(casillas[0].style.backgroundColor===color && casillas[3].style.backgroundColor===color && casillas[6].style.backgroundColor===color){
        alert("Gana "+color)
        window.location.href="index.html"
    }else if(casillas[1].style.backgroundColor===color && casillas[4].style.backgroundColor===color && casillas[7].style.backgroundColor===color){
        alert("Gana "+ color)
        window.location.href="index.html"
    }else if(casillas[3].style.backgroundColor===color && casillas[4].style.backgroundColor===color && casillas[5].style.backgroundColor===color){
        alert("Gana "+ color)
        window.location.href="index.html"
    }else if(casillas[6].style.backgroundColor===color && casillas[7].style.backgroundColor===color && casillas[8].style.backgroundColor===color){
        alert("Gana "+ color)
        window.location.href="index.html"
    }else if(casillas[0].style.backgroundColor===color && casillas[4].style.backgroundColor===color && casillas[8].style.backgroundColor===color){
        alert("Gana "+color)
        window.location.href="index.html"
    }else if(casillas[2].style.backgroundColor===color && casillas[4].style.backgroundColor===color && casillas[6].style.backgroundColor===color){
        alert("Gana "+color)
        window.location.href="index.html"
    }else if(casillas[2].style.backgroundColor===color && casillas[5].style.backgroundColor===color && casillas[8].style.backgroundColor===color){
        alert("Gana "+color)
        window.location.href="index.html"
    }
}




function logicaRival(){
    let casillaRandom=Math.floor(Math.random() * 9)
    casillas[casillaRandom].style.backgroundColor="yellow"
}

casillas.forEach(element => {
    element.addEventListener("click", cambiaColor);
});

function cambiaColor() {

    if(this.style.backgroundColor!="red" || this.style.backgroundColor!="yellow"){
       this.style.backgroundColor = "red";
        logicaRival()
        validar("red")
        validar("yellow") 
    }

    
}

