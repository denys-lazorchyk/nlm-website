import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	useMapEvent,
	useMapEvents,
	useMap,
} from "react-leaflet";

const Map = ({ setCliked, clicked, places }) => {
	function MyComponent() {
		const map = useMapEvent({
			click: (e) => {
				setCliked(e.latlng);
			},
		});
		return null;
	}

	return (
		<MainMap center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{clicked && (
				<Marker position={[clicked.lat, clicked.lng]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			)}

			{places.length &&
				places.map((site) => {
					return (
						<Marker position={[site.lat, site.lng]} key={uuidv4()}>
							<Popup>
								A pretty CSS3 popup. <br /> Easily customizable.
							</Popup>
						</Marker>
					);
				})}
			<MyComponent></MyComponent>
		</MainMap>
	);
};

const MainMap = styled(MapContainer)`
	height: calc(100vh - 70px);
	width: 100vw;
	margin-top: 7vh;
	z-index: 20;
`;

export default Map;
