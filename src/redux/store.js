import { createStore,applyMiddleware } from "redux";
import cakeReducer from './cakes/cakeReducer'
import logger from 'redux-logger'
import rootReducer from "./rootReducer";

const store=createStore(cakeReducer,applyMiddleware(logger ))
export default store
