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

    feed() {
      this.foodLevel = this.foodLevel + 1;
      return this.foodLevel;
    }

    play(){
      this.happinessLevel = this.happinessLevel + 1;
      return this.happinessLevel;
    }

    rest(){
      this.restLevel = this.restLevel + 1;
      return this.restLevel;
    }
}
