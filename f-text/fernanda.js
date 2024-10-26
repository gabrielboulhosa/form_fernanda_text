
const form = document.getElementById('form')
const imgfeliz = '<img src="./images/aprovado.png" alt="emiji feliz">'
const imgtriste = '<img src="./images/reprovado.png" alt="emoji triste">'
const senhaCorreta = parseFloat(1955);
const senha = prompt('Qual a senha?');

if (senha == senhaCorreta) {
   document.getElementById('form').style.display = 'block';
   
} else {
   alert('Senha incorreta');
}

function respostas() {
    let questao1 = document.getElementById('q1').value;
    let questao2 = document.getElementById('q2').value;
    let questao3 = document.getElementById('q3').value;
    let questao4 = document.getElementById('q4').value;
    let questao5 = document.getElementById('q5').value;
    

    let erros = []

    if (questao1 !== 'preto' && questao1 !== 'Preto') {
       erros.push('campo1')
    }
    if (questao2 !== 'pereira' && questao2 !== 'Pereira') {
       erros.push('campo2')
    }
    if (questao3 !== 'pizza' && questao3 !== 'Pizza') {
       erros.push('campo3')
    }
    if (questao4 !== 'elvis' && questao4 !== 'Elvis') {
       erros.push('campo4')
    }
    if (questao5 !== 'boulhosa' && questao5 !== 'Boulhosa') {
       erros.push('campo5')
    }

    let mensagemSucesso = document.querySelector('.mensagemsucesso')
    let mensagem = `<b>Parabéns, meu amor! agora você irá pagar a farra de sábado. ${imgfeliz}</b>`
    let mensagemErro = document.querySelector('.mansagemfalha')
    let mensagemFalha = `<b>Pare de frescura e corrija o:  ${erros.join(',') + imgtriste}</b>`

    if (erros.length == 0) {
        mensagemSucesso.innerHTML = mensagem
        mensagemSucesso.style.display = 'block'
         mensagemErro.style.display = 'none'
    } else {
       mensagemErro.innerHTML = mensagemFalha
       mensagemErro.style.display = 'block'
        mensagemSucesso.style.display = 'none'

    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    respostas()
})

console.log(form)

