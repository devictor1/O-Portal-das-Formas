let btnCalc = document.querySelector('#btn-calc')

function resultado(e){
    e.preventDefault()
    let raioCircle = document.querySelector('#raio-circle').value
    const pi = Math.PI;

    
    console.log(raioCircle);

   let circuferenciaRaio = 2 * pi * raioCircle;

   console.log(circuferenciaRaio);

   document.querySelector('#result-circle').innerHTML= `O resultado é: ${circuferenciaRaio.toFixed(2)}`
}

btnCalc.addEventListener('click',resultado)



