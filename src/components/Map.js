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
} from "react-leaflet";

const Map = () => {
	let [clicked, setCliked] = useState(null);
	let [sites, setSites] = useState([]);

	function MyComponent() {
		const map = useMapEvent({
			click: (e) => {
				setCliked(e.latlng);
				setSites([...sites, e.latlng]);
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
			<Marker position={[51.505, -0.09]}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>

			{sites.length &&
				sites.map((site) => {
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
