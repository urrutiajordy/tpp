export class LoginResponseMapper {
  username: string;
  name: string;
  token: string;

  status: boolean;

  constructor(username: string, name: string, token: string, status: boolean) {
    this.name = name;
    this.username = username;
    this.token = token;
    this.status = status;
  }
}
