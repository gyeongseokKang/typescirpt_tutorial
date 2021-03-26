console.log(this);

function simpleFunc() {
  console.log(this);
}

simpleFunc();

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
  increaseNoBind = () => {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase();
const caller = counter.increase.bind(counter);
const caller2 = counter.increaseNoBind;
caller();
caller2();
class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();
