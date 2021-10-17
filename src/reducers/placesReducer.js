const initState = {
	places: [],
};

const placesReducer = (state = initState, action) => {
	switch (action.type) {
		case "GET_PLACES":
			return {
				places: [...state.places, action.data],
			};
		default:
			return { ...state };
	}
};

export default placesReducer;
