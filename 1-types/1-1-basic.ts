{
  //number type
  const num: number = 12;

  //string type
  const str: string = "hello TS";

  //boolen type
  const bool: boolean = true;

  // undefined. null type
  let name_undefined: undefined;
  let name_null: null; // null 도 비슷한 이유로 실무에선 안씀
  name_undefined = undefined; // <- undefined 만 가능하므로 실무에선 거의 안씀

  let name: string | undefined;
  name = undefined;
  name = "TS";

  //unknown , any type
  // 왠맨하선 쓰지 않기, 자바스크리트와 호환성을 위해 사용
  let name_unknown: unknown;
  let name_any: any;
  name_unknown = "str";
  name_unknown = 1;
  name_unknown = true;
  name_any = "str";
  name_any = 1;
  name_any = true;

  // void type
  function getInfo(): void {
    return;
  }

  //never type
  function throwError(message: string) {
    // message -> server error log
    return new Error(message);
  }

  //object type
  //왠맨해선 쓰지 않는다.
  let obj: object;
  obj = { name: "kang", age: 10 };
  obj = [1, 2, 3];
}
