import { LoginRepositoryImpl } from "../infraestructure/repository/login_repository_impl";

//interface
export interface LoginService {
  login(username: string, password: string): Promise<any>;
}

// se implementa la interface
export class LoginServiceImpl implements LoginService {
  // loginRepository: LoginRepository;
  // constructor(repository: LoginRepository) {
  //   //inyeccion de dependencias
  //   // this.loginRepository = repository;
  // }

  login(username: string, password: string): Promise<any> {
    //validaciones
    //la contraseña debe de ser 6 digitos
    // console.log(this.loginRepository);
    const loginRepository = new LoginRepositoryImpl();
    return loginRepository.login(username, password);
  }
}
