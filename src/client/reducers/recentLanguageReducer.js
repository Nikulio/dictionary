import * as types  from "../actions/types";

const recentLanguageReducer = (state = "English", action) => {
	switch (action.type) {
		case types.RECENT_LANGUAGE_SUCCESS:
			return action.payload;
		default:
			return state
	}
}

export default recentLanguageReducer
