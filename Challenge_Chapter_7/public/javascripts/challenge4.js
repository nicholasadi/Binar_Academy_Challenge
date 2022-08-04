
function getChooseComp(){
  const comp = Math.random()
  if (comp<0.33) return "scissor"
  if (comp>=0.33 && comp<0.66) return "paper"
  return "rock"
}

function getResult(comp,player){
  if (player == comp) {
    return "draw"
  } else if (player == "scissor") {
    return (comp == "paper") ? "win" : "lose"
  } else if (player == "paper") {
    return (comp == "rock") ? "win" : "lose"
  } else  if (player == "rock") {
    return (comp == "scissor") ? "win" : "lose"
  }console.log(getResult())
}

function rolling(){
  const imgComputer = document.querySelector(".imgcomputer")
  const image = ["rock","paper","scissor"]
  let imaginary = 0
  const start = new Date().getTime()
  setInterval (function(){
    if (new Date().getTime()-start>=1000) {
      clearInterval
      return
    }      
    imgComputer.setAttribute("src","/images/" + image[imaginary++] + ".png")
    if (imaginary == image.length) {
      return imaginary=0
    }
  },100)
}

const playerScissor = document.querySelector(".scissor");
playerScissor.addEventListener("click", function(){
  const chooseComp = getChooseComp()
  const choosePlayer = playerScissor.className
  const result = getResult(chooseComp, choosePlayer)

  rolling()

  setTimeout(function(){
  const imgComputer = document.querySelector(".imgcomputer")
  imgComputer.setAttribute("src", "/images/" + chooseComp + ".png")
  const information = document.querySelector(".information")
  information.innerHTML = result
  console.log("player : " + choosePlayer)
  console.log("comp : " + chooseComp)
  console.log("result = " + result)
  },1000)


  
})

const playerRock = document.querySelector(".rock")
playerRock.addEventListener("click", function(){
  const chooseComp = getChooseComp()
  const choosePlayer = playerRock.className
  const result = getResult(chooseComp, choosePlayer)

  rolling()

  setTimeout(function(){  
  const imgComputer = document.querySelector(".imgcomputer")
  imgComputer.setAttribute("src", "/images/" + chooseComp + ".png")
  const information = document.querySelector(".information")
  information.innerHTML = result
  console.log("player : " + choosePlayer)
  console.log("comp : " + chooseComp)
  console.log("result = " + result)
  },1000)
})

const playerPaper = document.querySelector(".paper")
playerPaper.addEventListener("click", function(){
  const chooseComp = getChooseComp()
  const choosePlayer = playerPaper.className
  const result = getResult(chooseComp, choosePlayer)

  rolling();

  setTimeout(function(){
  const imgComputer = document.querySelector(".imgcomputer")
  imgComputer.setAttribute("src", "/images/" + chooseComp + ".png")
  const information = document.querySelector(".information")
  information.innerHTML = result
  console.log("player : " + choosePlayer)
  console.log("comp : " + chooseComp)
  console.log("result = " + result)
  },1000)
  
})

function refreshPage(){
  location.reload();
}
