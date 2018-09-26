import * as types  from "../actions/types";

const errorReducer = (state = false, action) => {
	switch (action.type) {
		case types.SHOW_ERROR:
			return action.payload;
		default:
			return state
	}
}

export default errorReducer
