import { accessToken } from "./accessToken";
import { refreshToken } from "./refreshToken";
import { tableNumber } from "./tableNumber";
import { randomPassword } from "./randomPassword";

class GenerateFn {
  accessToken: typeof accessToken;
  refreshToken: typeof refreshToken;
  tableNumber: typeof tableNumber;
  randomPassword: typeof randomPassword;
  constructor() {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.tableNumber = tableNumber;
    this.randomPassword = randomPassword;
  }
}

export default new GenerateFn();
