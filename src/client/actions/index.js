import * as types from "./types";
import configAxios from "../config/axios";
import history from "../config/history";

export const addWordAction = (payload) => async dispatch => {
	const res = await configAxios.post("/add-word", payload);
	if (res.status === 200) {
		history.push("/");
		dispatch({
			type: types.ADD_WORD_SUCCESS,
			payload: res.data
		})
	}
};

export const fetchAllWordsAction = () => async dispatch => {
	const res = await configAxios.get("/get-words");
	if (res.status === 200) {
		dispatch({
			type: types.GET_WORDS_SUCCESS,
			payload: res.data
		})
	}
};

export const fetchDictionaries = () => async dispatch => {
	const res = await configAxios.get("/get-dictionaries");
	if (res.status === 200) {
		dispatch({
			type: types.GET_DICTS_SUCCESS,
			payload: res.data
		})
	}
};

export const fetchWordsByDictionary = (dictionary) => async dispatch => {
	const res = await configAxios.post("/get-words-by-dict", {language: dictionary});
	if (res.status === 200) {
		dispatch({
			type: types.GET_WORDS_BY_DICT_SUCCESS,
			payload: res.data
		})
	}
};



