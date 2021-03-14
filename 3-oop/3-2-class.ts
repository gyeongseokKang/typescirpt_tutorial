{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEAN_GRAMM_PER_SHOT: number = 7; // class level
    coffeeBean: number = 0; // instance level

    constructor(coffeeBeans: number) {
      this.coffeeBean = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number) {
      return new CoffeeMaker(coffeeBeans);
    }
    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBean < shots * CoffeeMaker.BEAN_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans");
      }
      this.coffeeBean -= shots * CoffeeMaker.BEAN_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  maker.makeCoffee(2);

  const maker2 = CoffeeMaker.makeMachine(30);
  maker.makeCoffee(1);
}
