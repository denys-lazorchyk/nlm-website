import { combineReducers } from "redux";
import clikedReducer from "./clickedReducer";
import clickedMarkerReducer from "./clickedMarkerReducer";
import inputReducer from "./inputReducer";
import placesReducer from "./placesReducer";

const rootReducer = combineReducers({
	clicked: clikedReducer,
	input: inputReducer,
	places: placesReducer,
	clickedMarker: clickedMarkerReducer,
});

export default rootReducer;
