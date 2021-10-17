const initState = {
	title: "",
	type: "",
	amount: "",
};

const inputReducer = (state = initState, action) => {
	switch (action.type) {
		case "SET_TITLE":
			return {
				...state,
				title: action.data.title,
			};

		case "SET_TYPE":
			return {
				...state,
				type: action.data.type,
			};

		case "SET_AMOUNT":
			return {
				...state,
				amount: action.data.amount,
			};

		case "GET_FULL_INPUT":
		default:
			return { ...state };
	}
};

export default inputReducer;
