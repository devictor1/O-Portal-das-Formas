let btnCalcPiramide = document.querySelector('#btn-calc-piramide')

function resultado(e){
    e.preventDefault()
    let alturaDoTroncoPiramide = document.querySelector('#altura-do-tronco-piramide').value;
    let arestaBaseMaior = document.querySelector('#areaBaseMaior').value;
    let arestaBaseMenor = document.querySelector('#areaBaseMenor').value;
    let apotemaBaseMaior = arestaBaseMaior/2;
    let apotemaBaseMenor = arestaBaseMenor/2;
    let catetoOposto = apotemaBaseMaior-apotemaBaseMenor
    let catetoOpostoAredondado = catetoOposto.toFixed(1)
    let resultadoCateto = Math.pow(alturaDoTroncoPiramide,2) + Math.pow(catetoOpostoAredondado,2)
    let resultadoRaizCateto = Math.sqrt(resultadoCateto)
    let areaLateral = ((Number(arestaBaseMaior)+Number(arestaBaseMenor))* resultadoRaizCateto/2)*4


    console.log(typeof areaLateral)
    document.querySelector('#result').innerHTML= `O resultado é: ${areaLateral}`
}

    btnCalcPiramide.addEventListener('click', resultado)