{
  // Array
  const fruits: string[] = ["apple", "banana"];
  const prices: Array<number> = [100, 200];

  function printFruits(fruits: readonly string[]) {
    // fruits : readonly Array<string> <- 불가, 아직 문법상 허용되지 않음
    // fruits.push("melon") <- 불가
  }

  // Tuple
  let kang: [string, number];
  kang = ["Kang", 20];
  kang[0]; // "kang"
  kang[1]; // 20
  // Tuple은 가독성이 떨어짐으로 -> interface, type alias, class로 바꾸길 권장
  const [name, age] = kang;
  //const [name, setName] = React.useState("kang")
}
