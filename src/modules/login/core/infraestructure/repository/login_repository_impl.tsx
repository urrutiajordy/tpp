import { User } from "../../domain/entities/user";
import { LoginRepository } from "../../domain/repositories/login_repository";
import { DataSource } from "../data_source/data_source";
import { DataSourceImpl } from "../data_source/data_source_impl";

export class LoginRepositoryImpl implements LoginRepository {
  async login(username: string, password: string): Promise<any> {
    const dataSource: DataSource = new DataSourceImpl();

    try {
      const dataRawOfUser = await dataSource.login(username, password);
      //mapper
      return new User(
        dataRawOfUser.username,
        dataRawOfUser.name
      );
    } catch (error) {
      return Promise.reject({ status: false });
    }
  }
}
