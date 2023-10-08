import { Icon } from '@iconify/react';
import fire from '@iconify/icons-mdi/fire-circle';
import firez from '@iconify/icons-mdi/fire';
import storm from '@iconify/icons-mdi/storm';
import volcanoes from '@iconify/icons-mdi/volcano';
import pin from '@iconify/icons-mdi/pin';
import flood from '@iconify/icons-mdi/flood';
import hurry from '@iconify/icons-mdi/hurricane';
import stormz from '@iconify/icons-mdi/dot';
import wstorm from '@iconify/icons-mdi/snowflake-variant';
import torn from '@iconify/icons-mdi/weather-hurricane-outline';

const LocationMarker = ({ type, lat, lng, onClick }) => {
    let displayIcon;
    if (type === 0) {
        displayIcon = fire;
    }
    if (type === 1) {
        displayIcon = storm;
    }
    if (type === 2) {
        displayIcon = volcanoes;
    }
    if (type === 3) {
        displayIcon = pin;
    }
    if (type === 666) {
        displayIcon = hurry;
    }
    if (type === 444) {
        displayIcon = flood;
    }
    if (type === 5) {
        displayIcon = stormz;
    }
    if (type === 6) {
        displayIcon = wstorm;
    }
    if (type === 7) {
        displayIcon = firez;
    }
    if (type === 8) {
        displayIcon = torn;
    }
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={displayIcon} className="location-icon" />
        </div>
    );
};

export default LocationMarker;
