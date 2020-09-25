export interface LoginRepository {
  login(username: string, password: string): Promise<any>;
}
