{
  // javascript style
  function JsAdd(num1, num2) {
    return num1 + num2;
  }

  // typescript style
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // javascript style
  function JsfetchData(id) {
    // do something
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }

  // typescript style
  function fetchData(id: string): Promise<boolean> {
    // do something
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }

  //optional parameter
  function getFullName(firstName: string, lastName?: string) {
    return `${firstName} ${lastName}`;
  }
  function getFullName2(firstName: string, lastName: string | undefined) {
    return `${firstName} ${lastName}`;
  }
  function getFullName3(firstName: string, lastName: string = "default name") {
    return `${firstName} ${lastName}`;
  }

  //rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
}
