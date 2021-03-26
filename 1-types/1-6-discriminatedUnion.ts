{
  type successState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type failState = {
    result: "fail";
    reason: string;
  };

  type loginState = successState | failState;
  function login2(loginState: loginState) {
    if (loginState.result === "success") {
      console.log(loginState.response.body);
    } else {
      console.log(loginState.reason);
    }
  }
}
