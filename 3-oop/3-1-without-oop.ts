{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBean < shots * BEAN_GRAMM_PER_SHOT) {
      throw new Error("Not enough coffee beans");
    }
    coffeeBean -= shots * BEAN_GRAMM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }

  const BEAN_GRAMM_PER_SHOT: number = 7;
  let coffeeBean: number = 0;

  coffeeBean += 3 * BEAN_GRAMM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
