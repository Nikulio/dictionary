import { combineReducers } from "redux";
import { reduxForm as form } from "redux-form";
import addWordReducer from "./addWordReducer";
import getWordsReducer from "./getWordsReducer";
import dictionariesReducer from "./dictionariesReducer";

export default combineReducers({
	form : form,
	word: addWordReducer,
	words: getWordsReducer,
	dictionaries: dictionariesReducer
})
