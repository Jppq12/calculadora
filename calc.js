let tela = document.getElementById('tela')

let ult = tela.innerHTML.slice(-1)

function addnum(num) {
    if (tela.innerHTML == '0'){
        tela.innerHTML = num
    } else {
        tela.innerHTML += `${num}`
    }
}

function addponto() {
    let res = tela.innerHTML
    let ultnum = res.split(/[+\-*÷]/).pop()
    if (!ultnum.includes('.')){
        tela.innerHTML += '.'
    }
}

function addsin(sin){
    

    if (ult == '+' || ult == '-' || ult == '*' || ult =='÷') {
        return
    }//Evitando que duplique sinais

    tela.innerHTML += `${sin}`
}

function apaga(){
    tela.innerHTML = tela.innerHTML.slice(0,-1)

    if(tela.innerHTML == ''){
        tela.innerHTML = '0'
    }
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