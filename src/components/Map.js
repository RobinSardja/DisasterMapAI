import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import InfoBox from './InfoBox'
import { useState } from 'react'

const Map = ({eventData, center, zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev => {
        if(ev.categories[0].id === "wildfires") {
            if (ev.geometry[0].date[3] == '3') {
                return <LocationMarker type={0}
                lat={ev.geometry[0].coordinates[1]} 
                lng={ev.geometry[0].coordinates[0]} onClick={() => setLocationInfo(
                    {id: ev.id,
                    title: ev.title}
                )}/>
            }
        }
        if(ev.categories[0].id === "severeStorms") {
            return <LocationMarker type={1}
            lat={ev.geometry[0].coordinates[1]} 
            lng={ev.geometry[0].coordinates[0]} onClick={() => setLocationInfo(
                {id: ev.id,
                title: ev.title}
            )}/>
        }
        if(ev.categories[0].id === "volcanoes") {
                return <LocationMarker type={2}
                lat={ev.geometry[0].coordinates[1]} 
                lng={ev.geometry[0].coordinates[0]} onClick={() => setLocationInfo(
                    {id: ev.id,
                    title: ev.title}
                )}/>
        }
        if(ev.categories[0].id === "=earthquakes") {
                return <LocationMarker type={3}
                lat={ev.geometry[0].coordinates[1]} 
                lng={ev.geometry[0].coordinates[0]} onClick={() => setLocationInfo(
                    {id: ev.id,
                    title: ev.title}
                )}/>
        }
        return null
    })

  return (
    <div className = "map">
        <GoogleMapReact bootstrapURLKeys={{key: 
        'AIzaSyCLIexfr2fJ_XSuKzMjXsAOx8gkt8uBLqM'}}
        defaultCenter={ center }
        defaultZoom={ zoom }
        >
            {markers}
        </GoogleMapReact>
        {locationInfo && <InfoBox info={locationInfo}/>}
    </div>
  )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map