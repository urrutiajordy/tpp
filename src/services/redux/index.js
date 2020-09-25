import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxSaga from 'redux-saga';
import { loginReducer } from '../../modules/login/presentation/redux/reducer';
import rootSaga from '../../modules/login/presentation/redux/saga'

const sagaMiddleware = reduxSaga();

const rootReducer = combineReducers({
    login: loginReducer
});
const initalState = {};

//store
export const store = { ...createStore(rootReducer, initalState, applyMiddleware(sagaMiddleware)), runSaga: sagaMiddleware.run(rootSaga) };
