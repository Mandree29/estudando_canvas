import { gerar_posX, gerar_poxY, tamanho_raio, velocidade, cores, cor_seletor } from "./circulo.js"

var canvas = document.querySelector('canvas')
var c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight


const mathpi = Math.PI * 2 
var bolas_arrary = []

window.addEventListener('mousemove', (e)=>{
   for (let index = 0; index < bolas_arrary.length; index++) {
        if((e.x - bolas_arrary[index].x  <= 40 && 40 > bolas_arrary[index].x - e.x) &&
         (e.y - bolas_arrary[index].y <= 40 && 40 > bolas_arrary[index].y - e.y)){
            bolas_arrary[index].aumentando_raio()
        }else{
            bolas_arrary[index].diminuindo_raio()
        }
   }
})

function circulo(x,y, vw, vh){
   this.x = x // x é a posição de nascimento vertical do circulo
   this.y = y // y é a posição de nascimento horizontal do circulo
   this.vw = vw // velocidade do circulo
   this.vh = vh
   this.r = tamanho_raio()
   this.jaAmentou = false
   this.color = cor_seletor()
   this.min_r = tamanho_raio()

   this.desenho = function(){
       c.beginPath()
       c.arc(this.x, this.y, this.r, 0, mathpi, false)
      //  c.strokeStyle = 'cyan'
      let cor = this.color
      c.fillStyle = cor
      c.fill()


   }

   this.atualizacao = function(){
      this.x = this.x + this.vw
      this.y = this.y + this.vh

      if(this.x + this.r >= innerWidth || this.x - this.r < 0){
         this.vw = this.vw * -1
      }
      if(this.y + this.r >= innerHeight || this.y - this.r < 0){
         this.vh = this.vh * -1 
      }


      this.desenho()
   }
   this.aumentando_raio = function(){
      if(this.r < 40){
         this.r += this.r + 1
      }
   }

   this.diminuindo_raio = function(){
      if(this.r > this.min_r){
         this.r  = this.r -1
      }
   }

}

for (let index = 0; index < 400; index++) {
   bolas_arrary.push(new circulo(gerar_posX(), gerar_poxY(), velocidade(), velocidade()))  
}
for (let index = 0; index < bolas_arrary.length; index++) {
   bolas_arrary[index].desenho()
}


function animation(){
     requestAnimationFrame(animation)
     c.clearRect(0,0, innerWidth, innerHeight)
     for (let index = 0; index < bolas_arrary.length; index++) {
         bolas_arrary[index].atualizacao()
      
     }
}
animation()





