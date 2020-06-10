function move() {

    var elem = document.getElementById("usado");
    var carrega = 1;
    var usado = 815/1000 * 100;
    var calcPorcentual = 0;
    var id = setInterval(frame, 10);

    function frame(){
       
        
        console.log("parte 1: "+ usado) 

        if(carrega > usado){
            clearInterval(id)
        } else {
            carrega++;
            elem.style.width = carrega + '%';
        }
        
    }
    
}

window.onload =  move();