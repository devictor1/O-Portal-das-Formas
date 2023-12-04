let btn = document.querySelector('.button-calc')

function resultado(e){
    e.preventDefault()
    let quantLados = document.querySelector('#quantidade-lado').value
    let comprimentoLado = document.querySelector('#comprimento-lado').value


    let area = (quantLados * Math.pow(comprimentoLado, 2)) / (4 * Math.tan(Math.PI / quantLados));

    console.log('teste')
    document.querySelector('#result').innerHTML= `O resultado é: ${area.toFixed(2)}`;
}

btn.addEventListener('click', resultado)