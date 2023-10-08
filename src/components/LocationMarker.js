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
import './LocationMarker.css';

const LocationMarker = ({ type, lat, lng, onClick }) => {
    let displayIcon;
    let iconClass;

    if (type === 0) {
        displayIcon = fire;
        iconClass = 'fire-icon';
    }
    if (type === 1) {
        displayIcon = storm;
        iconClass = 'storm-icon';
    }
    if (type === 2) {
        displayIcon = volcanoes;
        iconClass = 'volanoes-icon';
    }
    if (type === 3) {
        displayIcon = pin;
        iconClass = 'pin-icon';
    }
    if (type === 666) {
        displayIcon = hurry;
        iconClass = 'hurry-icon';
    }
    if (type === 444) {
        displayIcon = flood;
        iconClass = 'flood-icon';
    }
    if (type === 5) {
        displayIcon = stormz;
        iconClass = 'stormz-icon';
    }
    if (type === 6) {
        displayIcon = wstorm;
        iconClass = 'wstorm-icon';
    }
    if (type === 7) {
        displayIcon = firez;
        iconClass = 'firez-icon';
    }
    if (type === 8) {
        displayIcon = torn;
        iconClass = 'torn-icon';
    }
    return (
        <div className={`location-marker ${iconClass}`} id={displayIcon} onClick={onClick}>
            <Icon icon={displayIcon} id={displayIcon}/>
        </div>
    );
};

export default LocationMarker;
