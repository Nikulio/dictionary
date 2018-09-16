import * as types  from "../actions/types";

const addWordReducer = (state = {}, action) => {
	switch (action.type) {
		case types.ADD_WORD_SUCCESS:
			return action.payload;
		default:
			return state
	}
}

export default addWordReducer
