export const clikedMarkerAction = (data) => {
	return {
		type: "GET_CLIKED_MARKER",
		data: {
			clikedMarker: data,
		},
	};
};

export const clikedMarkerNulify = () => {
	return {
		type: "NULIFY",
		data: null,
	};
};
