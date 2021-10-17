const initState = {
	title: "",
	type: "",
	amount: "",
};

const inputReducer = (state = initState, action) => {
	switch (action.type) {
		case "GET_TITLE":
			return {
				title: state.title,
			};

		case "GET_TYPE":
			return {
				type: state.type,
			};

		case "GET_AMOUNT":
			return {
				amount: state.amount,
			};

		case "GET_FULL_INPUT":
		default:
			return { ...state };
	}
};

export default inputReducer;
