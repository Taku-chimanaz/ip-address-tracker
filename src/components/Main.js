import './../css/Main.css';
import { useEffect, useState } from 'react';
import { createMap } from '../lib/createMap';

export const Main = ({ ipDetails }) => {

    const [index, setIndex] = useState(0);
    const [mapInstance, setMapInstance] = useState(null)

    useEffect(() => {
        if (ipDetails === null) {
            return
        }
        createMap(mapInstance, setMapInstance, ipDetails.location.lat, ipDetails.location.lng, index);
        setIndex(index + 1);
    }, [ipDetails])

    return (
        <main>

            <div id="map">
            </div>

        </main>
    )
}
