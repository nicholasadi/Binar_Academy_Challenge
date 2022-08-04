const playerGame = require("./SuperClass")
const Player = playerGame.Player
const Picker = playerGame.Picker

let player1 = new Player("Ujang","Gunting")
console.log(player1)

class PlayerOne extends Picker(Player){
  constructor(name, choice){
    super(name, choice)
  }

  introduction(){
    let name = super.getName()
    return "Hola" + name;
  }

  changeChoice(input){
    super._setChoice(input)
  }
}

module.exports = PlayerOne