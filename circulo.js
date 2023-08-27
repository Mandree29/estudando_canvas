export function gerar_posX(){
    let x = parseInt(Math.random() * innerWidth)
    if (x < 30){
        x = x + 30
    }
    if (x > 1200 ){
        x = x - 30
    }
    return x
} 


export function gerar_poxY(){
    let y = parseInt(Math.random() * innerHeight)
    if (y < 30){
        y = y + 30
    }
    if (y > 970){
        y = y - 30
    }
    return y
}

export function tamanho_raio(){
    let r = parseInt(Math.random() * 30)
    if (r < 3){
        r += 3
    }
    return r
}

function gerador_velocidade(){
    let v = parseInt(Math.random() * 5)
    if(v == 0){
        v = 1
    }
    return v
}
function negativo_ou_positivo(){
    let n = parseInt(Math.random() * 2)
    return n
}


export function velocidade(){
  let v = gerador_velocidade()
  let sorteio = negativo_ou_positivo()
  if(sorteio > 0){
    return v
  }else{
    return -v
  }
}

export function sorteia_cor(){
    let n = parseInt(Math.random() * 5)
    return n
}

export var cores = ["#03045e", "#0077b6", "#0096c7", "#48cae4", "#ade8f4"]



export function cor_seletor(){
    let cor = cores[sorteia_cor()]
    return cor
}