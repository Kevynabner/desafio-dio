//variaveis

let nomeHeroi = ["batman" , "superman" , "mulher maravilha" , "pantera negra" , "thor" , "loki" , "aquaman" , "homem aranha"]
let xpHeroi= [450, 1200, 4000, 6500, 7400, 8600, 9800, 11000]


//laços de repetição
let contador = [0]
while (contador < 7){

   let nome = nomeHeroi[contador]
   let xp = xpHeroi[contador]
   let nivel
    contador++
  

if (xp <= 1000){
    nivel = "Ferro"
  
  }else if (xp >= 1001 && xp <= 2000){
    nivel = "Bronze" 

  }else if (xp >= 2001 && xp <= 5000){
    nivel = "Prata"

  }else if (xp >= 5001 && xp <= 7000){
    nivel = "Ouro"

  }else if (xp >= 7001 && xp <= 8000){
    nivel = "Platina"
          
  }else if (xp >= 8001 && xp <= 9000){
    nivel = "Ascendente"

  }else if (xp >= 9001 && xp <= 10000){
    nivel = "Imortal"

  }else if (xpHeroi >= 10001){
    nivel = "Radiante"
 }
  //Saída

 console.log("O Herói " + nome + " está no nível: " + nivel)
    
}