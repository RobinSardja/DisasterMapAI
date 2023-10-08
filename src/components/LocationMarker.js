import { Icon } from '@iconify/react';
import fire from '@iconify/icons-mdi/fire-alert';
import storm from '@iconify/icons-mdi/storm';
import volcanoes from '@iconify/icons-mdi/volcano';
import earthquake from '@iconify/icons-mdi/pin';

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
        displayIcon = earthquake;
    }

    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={displayIcon} className="location-icon" />
        </div>
    );
};

export default LocationMarker;