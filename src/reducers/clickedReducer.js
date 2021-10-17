const initState = {
	clicked: null,
};

const clikedReducer = (state = initState, action) => {
	switch (action.type) {
		case "GET_CLIKED":
			return {
				...state,
			};
		default:
			return { ...state };
	}
};

export default clikedReducer;
