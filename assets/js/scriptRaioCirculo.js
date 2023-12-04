let btn = document.querySelector('#btn-calc-raio-circulo')

function resultado(e){
    e.preventDefault()
    let raioMaior = document.querySelector('#raioMaior').value
    let raioMenor = document.querySelector('#raioMenor').value
    const pi = Math.PI

    let resultado = (Math.pow(raioMaior,2)*pi)-(Math.pow(raioMenor,2)*pi)

    console.log(resultado.toFixed(2))
    document.querySelector('#resultado-retangulo').innerHTML=`O resultado ${resultado.toFixed(2)}`
}

btn.addEventListener('click', resultado)