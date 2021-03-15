interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log("full time");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log("Part time");
  }
  workPartTime() {}
}

//💣
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const kang = new FullTimeEmployee();
const park = new PartTimeEmployee();
kang.workFullTime();
park.workPartTime();

const kangAfterPay = pay(kang);
const parkAfterPay = pay(park);

const obj = {
  name: "kang",
  age: 20,
};

console.log(getValue(obj, "name"));

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
