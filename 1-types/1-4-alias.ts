{
  /**
   *  Type Alias
   */

  type name = string;
  let person: name = "kang";
  let person2: name = "park";

  type Num = number;
  let age: Num = 20;
  type student = {
    name: string;
    age: number;
  };
  let stu1: student = {
    name: "kang",
    age: 20,
  };

  /**
   * String Literal Type
   */
  type majorName = "kang" | "park";
  let kangName: majorName = "kang";
  //let kimName : majorName = "kim"; <- error : major에 정의된 값만 가능
}
