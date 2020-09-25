import { LoginResponseMapper } from "../mappers/login_response";

export interface DataSource {
  login(username: string, password: string): Promise<any>;
}
