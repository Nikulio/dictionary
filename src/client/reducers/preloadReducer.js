import * as types  from "../actions/types";

const preloadReducer = (state = false, action) => {
	switch (action.type) {
		case types.SHOW_PRELOADER:
			return action.payload;
		default:
			return state
	}
}

export default preloadReducer
