{
  const obj = {
    name: "ellie",
  };
  obj.name; // ellie
  obj["name"]; // ellie

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // string
  const text: Name = "only string";

  type Gender = Animal["gender"]; //"male" | "female"

  type keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: keys = "age";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "kang",
    gender: "male",
  };
}
