{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEAN_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBean: number = 0; // instance level

    private constructor(coffeeBeans: number) {
      this.coffeeBean = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number) {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBean = beans;
    }
    clean() {
      console.log;
      `Cleaning the machine`;
    }

    private grindBeans(shots: number) {
      if (this.coffeeBean < shots * CoffeeMachine.BEAN_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans");
      }
      this.coffeeBean -= shots * CoffeeMachine.BEAN_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating!!");
    }
    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots}`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(30);
  maker.fillCoffeeBeans(30);
  maker.makeCoffee(2);

  const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(30);
  maker2.makeCoffee(2);
  maker2.clean();

  class AmateurUser {
    constructor(private machine: CoffeeMachine) {}
    makeCofffee() {
      const coffee = this.machine.makeCoffee(2);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCofffee() {
      const coffee = this.machine.makeCoffee(2);
      this.machine.fillCoffeeBeans(30);
      this.machine.clean();
    }
  }
}
