import * as types  from "../actions/types";

const dictionariesReducer = (state = [], action) => {
	switch (action.type) {
		case types.GET_DICTS_SUCCESS:
			return action.payload;
		default:
			return state
	}
}

export default dictionariesReducer
