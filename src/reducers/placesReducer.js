const initState = {
	places: [],
};

const placesReducer = (state = initState, action) => {
	switch (action.type) {
		case "GET_PLACES":
			return {
				...state,
			};
		default:
			return { ...state };
	}
};

export default placesReducer;
