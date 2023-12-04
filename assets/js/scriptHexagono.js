let btnCalc = document.querySelector('#btn-calc')

function resultado(e){
    e.preventDefault()
    let lado = document.querySelector('#comprimento-lado').value
    
    let area = (3 * Math.sqrt(3) / 2) * Math.pow(lado, 2);
    
    document.querySelector('#result').innerHTML= `O resultado é: ${area.toFixed(2)}`
}

btnCalc.addEventListener('click', resultado)
