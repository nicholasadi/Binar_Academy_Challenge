const {Player,Picker} = require("./SuperClass")

class ComputerRandom extends Picker(Player){
  constructor (name, choice, difficulty, chance){
    super(name,choice)
    this.difficulty = difficulty || "easy"
    this.chance = chance || 1
  }

  get chance(){
    let difficulty = this.difficulty
    switch (difficulty) {
      case "easy":
        this.chance = 1
        break;
      case "normal" :
        this.chance = 2
        break;
      case "hard":
        this.chance = 3
        break;    
      default:
        break;
    }  
  }
}

module.exports = ComputerRandom