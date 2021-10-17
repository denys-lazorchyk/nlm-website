const initState = {
	clickedMarker: null,
};

const clickedMarkerReducer = (state = initState, action) => {
	switch (action.type) {
		case "GET_CLIKED_MARKER":
			return {
				clickedMarker: { ...action.data.clikedMarker },
			};

		case "NULIFY":
			return {
				clickedMarker: action.data,
			};
		default:
			return { ...state };
	}
};

export default clickedMarkerReducer;
