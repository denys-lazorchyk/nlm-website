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

const Map = ({
	setCliked,
	clicked,
	places,
	clickedMarker,
	setClikedMarker,
}) => {
	function MyComponent() {
		const map = useMapEvent({
			click: (e) => {
				setCliked(e.latlng);
			},
		});

		if (clickedMarker) {
			map.setView([clickedMarker.lat, clickedMarker.lng]);
			setClikedMarker(null);
		}

		return null;
	}

	return (
		<MainMap center={[52.2297, 21.0122]} zoom={13} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{clicked && <Circle radius={200} center={[clicked.lat, clicked.lng]} />}

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
