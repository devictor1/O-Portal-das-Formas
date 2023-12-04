let btn = document.querySelector("#btn-calc-retangulo")

    function resultado(e){
        e.preventDefault()
        let base = document.querySelector('#base').value
        let altura = document.querySelector('#altura').value
        
        if (base==altura) {
            console.log('Os números são iguais')
            document.querySelector('#resultado-retangulo').innerHTML='Os números são iguais';   
        }
        else{
            let resultado = base*altura
            document.querySelector('#resultado-retangulo').innerHTML=`O Resultado é: ${resultado}`
        }
            
    }

    btn.addEventListener('click', resultado)