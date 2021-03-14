{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEAN_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBean: number = 0; // instance level

    constructor(coffeeBeans: number) {
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

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      public readonly serial: string,
      private milkFrother: milkFrother
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
    }
  }

  interface milkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }
  interface SuparProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(private beans: number, private sugar: SuparProvider) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class CheapMilkSteamer implements milkFrother {
    private steamMilk(): void {
      console.log(`steaming milk`);
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class CandySugarMixer implements SuparProvider {
    private getSuger() {
      console.log(`getting some sugar`);
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSuger();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      private milk: milkFrother,
      private sugar: SuparProvider
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      const milkAdded = this.milk.makeMilk(sugarAdded);
      return milkAdded;
    }
  }
}
