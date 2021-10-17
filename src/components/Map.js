import React from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import {
	MapContainer,
	TileLayer,
	CircleMarker,
	Popup,
	useMapEvent,
	Circle,
} from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { clikedAction } from "../actions/clikedAction";
import { clikedMarkerNulify } from "../actions/clikedMarkerAction";

const Map = () => {
	function MyComponent() {
		const map = useMapEvent({
			click: async (e) => {
				dispatch(clikedAction(e.latlng));
			},
		});

		if (clickedMarker.clickedMarker) {
			map.panTo([
				clickedMarker.clickedMarker.lat,
				clickedMarker.clickedMarker.lng,
			]);
			dispatch(clikedMarkerNulify());
		}

		return null;
	}

	const dispatch = useDispatch();
	const clicked = useSelector((state) => state.clicked);
	const { places } = useSelector((state) => state.places);
	const clickedMarker = useSelector((state) => state.clickedMarker);

	return (
		<MainMap center={[52.2297, 21.0122]} zoom={13} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{clicked.clicked && (
				<Circle
					radius={200}
					center={[clicked.clicked.lat, clicked.clicked.lng]}
				/>
			)}

			{places.length &&
				places.map((site) => {
					return (
						<CircleMarker
							radius={20}
							center={[site.lat, site.lng]}
							key={uuidv4()}
							pathOptions={{ color: site.data.color }}
						>
							<Popup>
								{site.data.title} z {site.data.amount} m3/dzień
							</Popup>
						</CircleMarker>
					);
				})}
			<MyComponent></MyComponent>
		</MainMap>
	);
};

const MainMap = styled(MapContainer)`
	height: calc(100vh - 70px);
	width: 100vw;
	margin-top: 70px;
	z-index: 20;
`;

export default Map;
