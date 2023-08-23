import { gerar_posX, gerar_poxY, tamanho_raio, velocidade } from "./circulo.js"

var canvas = document.querySelector('canvas')
var c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight


const mathpi = Math.PI * 2 
var bolas_arrary = []


function circulo(x,y, r, vw, vh){
   this.x = x // x é a posição de nascimento vertical do circulo
   this.y = y // y é a posição de nascimento horizontal do circulo
   this.vw = vw // velocidade do circulo
   this.vh = vh
   this.r = r// tamanho do raio 

   this.desenho = function(){
       c.beginPath()
       c.arc(this.x, this.y, this.r, 0, mathpi, false)
       c.strokeStyle = 'cyan'
       c.stroke()
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
}


for (let index = 0; index < 200; index++) {
   bolas_arrary.push(new circulo(gerar_posX(), gerar_poxY(), tamanho_raio(), velocidade(), velocidade()))  
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


window.addEventListener('mousemove', (e)=>{
   console.log("mouse-width:", e.x, "mouse-heigth:", e.y)
})


