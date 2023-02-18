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
    let total = firstValue * secondValue;

    return total.toFixed(2);

}

// function for dom creation area Calculation 

function createDomElement (id, fixedresult, text){
        const resultArea = document.getElementById(id)
        const tr = document.createElement('tr');
        tr.innerHTML=`
                     <tr>
                        <td><span id="calcultaionNumber">${0}</span></td>
                        <td>${text}</td>
                        <td><span id="resultText">${fixedresult}cm<sup>2</sup></span></td> 
                        <td><button id="convertButton">Convert to m<sup>2</sup></button></td>
                    </tr>`
            return resultArea.appendChild(tr);   
}

document.getElementById('triangleButton').addEventListener('click', function(){
    const triangleText = getElementText('triangleText');
    const triangle = calculationElement('triangleInputb', 'triangleInputh');
    let totalTriangle = triangle * 0.5;
    let fixedTriangle =totalTriangle.toFixed(2)

    createDomElement("resultContainer", fixedTriangle, triangleText )
    let  number = document.getElementById('calcultaionNumber')
    let previouNumber = number.innerText;
    number = previouNumber + 1;
})

document.getElementById('rectangleButton').addEventListener('click', function() {
    const rectangleText = getElementText('rectangleText');
    const rectangle = calculationElement('rectangleInputw', 'rectangleInputi')

    createDomElement('resultContainer',rectangle, rectangleText)
})

document.getElementById('parallelogramButton').addEventListener('click',function(){
    const parallelogramText = getElementText('parallelogramText');
    const parallelogram = calculationElement('parallelogramInputb','parallelogramInputh');

    createDomElement('resultContainer',parallelogram, parallelogramText)
})

