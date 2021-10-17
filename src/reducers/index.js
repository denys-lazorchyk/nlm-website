import { combineReducers } from "redux";
import clikedReducer from "./clickedReducer";
import clickedMarkerReducer from "./clickedMarkerReducer";
import inputReducer from "./inputreducer";
import placesReducer from "./placesReducer.JS";

const rootReducer = combineReducers({
	cliked: clikedReducer,
	input: inputReducer,
	places: placesReducer,
	clikedMarker: clickedMarkerReducer,
});

export default rootReducer;
