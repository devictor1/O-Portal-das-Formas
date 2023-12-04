const btn = document.querySelector('#btn-calc')

function resultado(e){
    e.preventDefault()

    let comprimentoLado = document.querySelector('#comprimento-do-lado').value;

    let area = comprimentoLado*comprimentoLado

    document.querySelector('#result').innerHTML= `O resultado é: ${area.toFixed(2)}`;
}

btn.addEventListener('click', resultado)