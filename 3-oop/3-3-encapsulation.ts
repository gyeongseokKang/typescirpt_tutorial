{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    private static BEAN_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBean: number = 0; // instance level

    private constructor(coffeeBeans: number) {
      this.coffeeBean = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number) {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBean = beans;
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

  const maker = CoffeeMaker.makeMachine(30);
  maker.makeCoffee(2);
  maker.fillCoffeeBeans(30);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error("invaild age!");
      }
      this.age = num;
    }
    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User("Steve", "Jobs");
  user.age = 20;
  console.log(user.fullName);
}
