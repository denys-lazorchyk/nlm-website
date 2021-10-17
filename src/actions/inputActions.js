export const setTitle = (data) => {
	return {
		type: "SET_TITLE",
		data: {
			title: data,
		},
	};
};

export const setType = (data) => {
	return {
		type: "SET_TYPE",
		data: {
			type: data,
		},
	};
};

export const setAmount = (data) => {
	return {
		type: "SET_AMOUNT",
		data: {
			amount: data,
		},
	};
};
