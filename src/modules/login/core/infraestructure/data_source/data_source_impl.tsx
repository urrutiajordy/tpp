import { LoginResponseMapper } from "../mappers/login_response";
import { DataSource } from "./data_source";

export class DataSourceImpl implements DataSource {
  login(username: string, password: string): Promise<any> {
    //llenamos el Response
    const response = new LoginResponseMapper(
      "yonattan95",
      "yonattan",
      "hb43hjb23",
      true
    );

    // axios(url,{body});
    return Promise.resolve(response);
  }
}
