import { createStore, combineReducers } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
import QuestionReducers from "./reducers/QuestionReducers";
QuestionReducers
const root = combineReducers({QuestionReducers}) ;

const store = createStore( root )

export default store