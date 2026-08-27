let tela = document.getElementById('tela')
function addnum(num) {
    if (tela.innerHTML == '0'){
        tela.innerHTML = num
    } else {
        tela.innerHTML += `${num}`
    }
    
}
function addponto() {
    if (!tela.innerHTML.includes('.')){
        tela.innerHTML += '.'
    }
}
function addsin(sin){
    let ult = tela.innerHTML.slice(-1)

    if (ult == '+' || ult == '-' || ult == '*' || ult =='÷') {
        return
    }//Evitando que duplique sinais

    tela.innerHTML += `${sin}`
}

function limpar() {
    tela.innerHTML = '0'
}

function calcular() {
    if (tela.innerHTML.includes('÷')){
        tela.innerHTML = tela.innerHTML.replace('÷','/')
    }
    let res = tela.innerHTML
    tela.innerHTML = eval(res)
    
}