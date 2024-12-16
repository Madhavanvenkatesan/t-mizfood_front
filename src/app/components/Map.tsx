import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { LatLngExpression } from "leaflet";

const polygon: LatLngExpression[] = [
    [49.25767, 4.03209],
    [50.42857,2.83198],
    [50.95224,1.85291],
    [50.72480, 1.61311],
    [49.44348, 1.09878],
    [48.95470, 2.89332],
]
const limeOptions = { color: 'lime' }
const Map = () => {
    return (
        <MapContainer
            center={[49.37825, 2.44063]}
            zoom={7}
            scrollWheelZoom={true}
            style={{ height: "400px", width: "100%" }} // Ensure proper size
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[49.37825, 2.44063]} >
                <Popup>T-MIZ FOOD</Popup>
            </Marker>
            <Polygon pathOptions={limeOptions} positions={polygon} />
        </MapContainer>
    );
};

export default Map;
