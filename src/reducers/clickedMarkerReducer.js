const initState = {
	clickedMarker: null,
};

const clickedMarkerReducer = (state = initState, action) => {
	switch (action.type) {
		case "GET_CLIKED_MARKER":
			return {
				...state,
			};
		default:
			return { ...state };
	}
};

export default clickedMarkerReducer;
