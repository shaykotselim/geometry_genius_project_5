// function for Get Text Title
function getElementText (id){
    const textElement = document.getElementById(id).innerText
    return textElement;
}
// function for get Input value
function getElementInput (id){



        const getInputFieldString =  document.getElementById(id).value;
        const previousInputValue = parseFloat(getInputFieldString);           
         return previousInputValue;
        
    
        
    

}
// function for Calculation 
function calculationElement (first , second){
    
    const firstValue = getElementInput(first);
    const secondValue = getElementInput(second);
    
    if(firstValue <= 0 || secondValue <= 0){
        alert('Your number is a Negative Value');
    }else if(firstValue && secondValue === String){
        alert('You Value is String');
    } else if(isNaN(firstValue) || isNaN(secondValue) ){
        alert('Your number is a NuLL');
    }

   else{
    let total = firstValue * secondValue;

    return total.toFixed(2);
   }

}

// function for dom creation area Calculation 
let serial = 0;
function createDomElement (id, fixedresult, text){
        const resultArea = document.getElementById(id)
        const tr = document.createElement('tr');
        tr.innerHTML=`
                     <tr>
                        <td><span id="calcultaionNumber">${serial}</span></td>
                        <td>${text}</td>
                        <td><span id="resultText">${fixedresult}cm<sup>2</sup></span></td> 
                        <td><button id="convertButton">Convert to m<sup>2</sup></button></td>
                    </tr>`
            return resultArea.appendChild(tr);   
}
// Triangle Area
document.getElementById('triangleButton').addEventListener('click', function(){
        serial = serial +1;
    const triangleText = getElementText('triangleText');
    const triangle = calculationElement('triangleInputb', 'triangleInputh');
    let totalTriangle = triangle * 0.5;
    let fixedTriangle =totalTriangle.toFixed(2)

    createDomElement("resultContainer", fixedTriangle, triangleText )

})
// Rectangle Area
document.getElementById('rectangleButton').addEventListener('click', function() {
    serial = serial +1;
    const rectangleText = getElementText('rectangleText');
    const rectangle = calculationElement('rectangleInputw', 'rectangleInputi')

    createDomElement('resultContainer',rectangle, rectangleText)
})
// Parallelogram Area
document.getElementById('parallelogramButton').addEventListener('click',function(){
    serial = serial +1;
    const parallelogramText = getElementText('parallelogramText');
    const parallelogram = calculationElement('parallelogramInputb','parallelogramInputh');

    createDomElement('resultContainer',parallelogram, parallelogramText)
})
// Rhombus Area
document.getElementById('rhombusButton').addEventListener('click',function(){
    serial = serial +1;
    const textRhombus = getElementText('rhombusText');
    const rhombus = calculationElement('rhombusInputb', 'rhombusInputh');

    let totalRhombus = rhombus * 0.5;
    let fixedRhombus = totalRhombus.toFixed(2);

    createDomElement('resultContainer', fixedRhombus, textRhombus);
})

// Pentagon Area 
document.getElementById('pentagonButton').addEventListener('click',function(){
    serial = serial +1;
    const textPentagon = getElementText('pentagonText');

    const pentagon = calculationElement('pentagonInputb', 'pentagonInputh');

    let totalPentagon = pentagon * 0.5;
    let fixedPentagon = totalPentagon.toFixed(2);

    createDomElement('resultContainer', fixedPentagon, textPentagon);

})
// For Ellips Area
document.getElementById('ellipsButton').addEventListener('click',function(){
    serial = serial +1;
    const textEllips = getElementText('ellipsText');
    const ellips = calculationElement('ellipsInputb','ellipsInputh');

    let totalEllips = ellips * 3.14;
    let fixedEllips = totalEllips.toFixed(2);

    createDomElement('resultContainer', fixedEllips, textEllips)
})
