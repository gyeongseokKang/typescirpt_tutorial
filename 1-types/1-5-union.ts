{
  /**
   * Union Type
   */

  type Direction = "top" | "bottom" | "rigjt" | "left";
  function move(direction: Direction) {
    // do something
  }
  move("top");
  move("bottom");
  //move("back") <- error

  // function login => success | fail
  type successState = {
    response: true;
  };
  type failState = {
    response: false;
  };
  function login(id: string, password: string): successState | failState {
    return { response: true };
  }
}
