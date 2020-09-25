import { call, put, takeLatest } from 'redux-saga/effects'
import { LoginServiceImpl } from '../../core/application/login_service';
import { successLogin } from './actions';
import { LOGIN } from './constants';



//llamadas
function* login() {
    console.log('ejecutando saga');
    const loginService = new LoginServiceImpl();
    try {
        const result = yield call(loginService.login, 'a', 'b');
        yield put(successLogin(result));
    } catch (error) {
        yield put(successLogin({ status: false }));
    }
}


//watchers
export default function* rootLogin() {
    yield takeLatest(LOGIN, login);
}