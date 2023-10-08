import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import InfoBox from './InfoBox'
import { useState } from 'react'
import counties from "./counties.json"


const Map = ({eventData, eventData2, center, zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData && eventData.map(ev => {
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
                lng={ev.geometry[0].coordinates[0]} 
                onClick={() => setLocationInfo(
                    {id: ev.id,
                    title: ev.title}
                )}/>
        }
        return null
    })

    console.log("IIIIIIIIIIIII-----(");
    console.log(eventData2.DisasterDeclarationsSummaries);
    console.log(counties);
    console.log("IIIIIIIIIIIII-----)");

    const markers2 = eventData2 && eventData2.DisasterDeclarationsSummaries && eventData2.DisasterDeclarationsSummaries.map(ev2=> {
        var fippy = `${ev2.fipsStateCode}${ev2.fipsCountyCode}`;
        var latty;
        var longy;
        for (var i = 0; i < counties.length; i++){
            if ((counties[i].county_fips).toString() == fippy){
               latty = counties[i].lat;
               longy = counties[i].lng;
            }
        }

        if (ev2.fipsCountyCode != "000" && ev2.declarationTitle != "WELLNITZ FIRE" && ev2.declarationTitle != "WELLNITZ FIRE" && ev2.declarationTitle != "WELLNITZ FIRE" && !(ev2.declarationTitle === "SEVERE WINTER STORMS AND SNOWSTORM" && ev2.fipsCountyCode === "113")
        && ((ev2.incidentBeginDate[2] === '2' && ev2.incidentBeginDate[3] === '3')
        //|| (ev2.incidentBeginDate[2] === '2' && ev2.incidentBeginDate[3] === '2')
        )) {
        return <LocationMarker type={3}
                lat={latty} 
                lng={longy} 
                onClick={() => setLocationInfo(
                    {id: ev2.declarationTitle,
                    title: ev2.incidentBeginDate}
                )}/>
        } else {
            return null;
        }
    })

  return (
    <div className = "map">
        <GoogleMapReact bootstrapURLKeys={{key: 
        'AIzaSyCLIexfr2fJ_XSuKzMjXsAOx8gkt8uBLqM'}}
        defaultCenter={ center }
        defaultZoom={ zoom }
        >
            {markers2}
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