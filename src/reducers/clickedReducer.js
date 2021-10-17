const initState = {
	clicked: null,
};

const clikedReducer = (state = initState, action) => {
	switch (action.type) {
		case "GET_CLIKED":
			if (action.data)
				return {
					clicked: { lat: action.data.lat, lng: action.data.lng },
				};
			else {
				return {
					clicked: null,
				};
			}
		default:
			return { ...state };
	}
};

export default clikedReducer;
