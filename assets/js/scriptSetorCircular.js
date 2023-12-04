let btn = document.querySelector('#btn-calc')

function resultado(e){
    e.preventDefault()
    console.log('teste')
    let angulo = document.querySelector('#angulo-centro').value
    let raio = document.querySelector('#raio').value

    var thetaEmRadianos = (angulo * Math.PI) / 180;

    
    var areaSetor = (thetaEmRadianos / (2 * Math.PI)) * Math.PI * (Math.pow(parseFloat(raio), 2));
    

    document.querySelector('#result').innerHTML= `O resultado é: ${areaSetor.toFixed(1)}`;
}

btn.addEventListener('click', resultado)