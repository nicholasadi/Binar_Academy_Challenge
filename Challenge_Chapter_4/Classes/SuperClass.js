class Player{
  constructor(name,choice){
    if (this.constrtuctor === Player){
      throw new console.error(`Can't fill with Player`);
    }
    this.name = name || "PlayerOne";
    this.choice = choice || null;
  }

  #setName(input){
    this.name = input
  }

  getName(){
    return this.name
  }

  _setChoice(input){
    this.choice = input
  }

  getChoice(){
    return this.choice
  }

  changeName(input){
    this.#setName(input)
  }
}

const Picker = Base => class extends Base{
  changeChoiceInfo(input){
    console.log("You choice"+ input + "for the chance to be winner")
  }
}

module.exports = {Player,Picker} 