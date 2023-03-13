function verificar () {
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById ('anoDeNascimento')
    let res = document.getElementById ('res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }else {
        let sex = document.getElementsByName ('checksex')
        let idade = ano - fAno.value
        let genero = ''
        /* !------ Criando IMG pelo JS! -------!
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')*/

        if (sex[0].checked) {
            genero = "um homem"
            if (idade >= 0 && idade < 10){
            //criança
            genero = "um bêbê/criança"
            img.src = 'images/foto-bebe.jpg'
            img.style.display = 'flex'
        } else if (idade < 21 ) {
            //jovem
            img.src = 'images/foto-jovem.jpg'
            img.style.display = 'flex'
        } else if (idade < 50) {
            //Adulto
            img.src = 'images/foto-adulto.jpg'
            img.style.display = 'flex'
        }else {
            //Idoso
            img.src = 'images/foto-velho.jpg'
            img.style.display = 'flex'
        }
        } else if (sex[1].checked) {
            genero = "uma mulher"
            if (idade >= 0 && idade < 10){
            //criança
            genero = "um bêbê/criança"
            img.src = 'images/foto-bebe.jpg'
            img.style.display = 'flex'
        } else if (idade < 21 ) {
            //jovem
            img.src = 'images/foto-jovemM.jpg'
            img.style.display = 'flex'
        } else if (idade < 50) {
            //Adulta
            img.src = 'images/foto-adultoM.jpg'
            img.style.display = 'flex'
        }else {
            //Idosa
            img.src = 'images/foto-velha.jpg'
            img.style.display = 'flex'
        }
        }
        res.style.display = 'flex'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!` 
    }

}

