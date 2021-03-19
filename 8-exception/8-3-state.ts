{
  type SuccessState = {
    result: "success";
  };
  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };

  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): ResultState {
      return { result: "fail", reason: "offline" };
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        //show dialog
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
