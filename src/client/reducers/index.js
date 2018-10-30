import { combineReducers } from "redux";
import { reduxForm as form } from "redux-form";
import addWordReducer from "./addWordReducer";
import getWordsReducer from "./getWordsReducer";
import dictionariesReducer from "./dictionariesReducer";
import preloadReducer from "./preloadReducer";
import errorReducer from "./errorReducer";
import recentLanguageReducer from "./recentLanguageReducer";

export default combineReducers({
	form : form,
	word: addWordReducer,
	words: getWordsReducer,
	preload: preloadReducer,
	error: errorReducer,
	recentLanguage: recentLanguageReducer,
	dictionaries: dictionariesReducer
})
