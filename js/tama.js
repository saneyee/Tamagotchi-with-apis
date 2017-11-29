export class Tamagotchi {

  constructor(name,foodlevel,happiness,restlevel) {
    this.name = name;
    this.foodLevel = foodlevel;
    this.happinessLevel = happiness;
    this.restLevel = restlevel;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  setAttention() {
      setInterval(() => {
        this.happinessLevel--;
      }, 1000);
    }

  setRest() {
    setInterval(() => {
      this.restLevel--;
    }, 1000);
    }


  dead() {
      if(this.foodLevel <= 0 || this.happinessLevel <= 0 || this.restLevel <= 0)
      {
        return true;
      }
      else{
        return false;
      }
    }

    feed() {
      this.foodLevel = 10;
    }

    play(){
      this.happinessLevel = 10;
    }

    rest(){
      this.restLevel = 10;
    }


    timePass(){
        this.foodLevel--;
        this.happinessLevel--;
        this.restLevel--;
      }



























}
