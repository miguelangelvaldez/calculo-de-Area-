//triangulo
const areaTSpan= document.getElementById("areaT");
const base = document.getElementById("base");


//rectangulo
const areaRSpan= document.getElementById("areaR");
const baseRec = document.getElementById("baseRec");
const heiGhtRec = document.getElementById("baseRec");

// //cuadrado
 const side = document.getElementById("side");
 const areaSSpan= document.getElementById("areaS");
 const perimeterS= document.getElementById("areaS");

 // //circulo
 const radio = document.getElementById("radio");
 const areaCSpan= document.getElementById("areaC");



//formula
    


const calAreaTriangle = () => {
    const numero = base.value;
    const raizCuadrada = Math.sqrt(3);
    const areaT = (raizCuadrada/4 * numero**2).toFixed(2) ;
    const perimeterT = base.value *3;
    console.log(areaT);
    areaTSpan.innerHTML = `<b>${areaT} cm2</b> </br> y 
    un perimetro de:  <b> ${perimeterT}  cm</b>`;
}


const calAreaRectangle = () => {
    const areaR = baseRec.value * heiGhtRec.value;
    const perimeterR = 2 * baseRec.value + 2 * heiGhtRec.value; 
    console.log(perimeterR);
    console.log(areaR);
    areaRSpan.innerHTML = `<b>${areaR} cm2</b> </br> y 
    un perimetro de: <b> ${perimeterR} cm</b>`;
}

const calAreaSquare = () => {
    const areaS = side.value * side.value;
    const perimeterS = side.value *4;
    console.log(perimeterS) ;
    console.log(areaS);
    areaSSpan.innerHTML = `<b>${areaS} cm2</b> </br> y 
    un perimetro de:  <b>${perimeterS} cm</b>`;

 }

 const calAreaCircle = () => {
    const areaC = 3.14 * radio.value**2  ;
    const perimeterC = (2 * 3.14 * radio.value).toFixed(2);
    console.log(perimeterC);
    console.log(areaC);
    areaCSpan.innerHTML = `<b>${areaC} cm2</b> </br>  y
    un perimetro de:  <b>${perimeterC} cm</b>`;

 }

