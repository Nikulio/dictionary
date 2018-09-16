import * as types  from "../actions/types";

const getWordsReducer = (state = [], action) => {
	switch (action.type) {
		case types.GET_WORDS_SUCCESS:
			return action.payload;
		case types.GET_WORDS_BY_DICT_SUCCESS:
			return action.payload;
		default:
			return state
	}
}

export default getWordsReducer
