import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import InfoBox from './InfoBox'
import { useState } from 'react'
import counties from "./counties.json"
import TextBox from './TextBox'
import AIText from './AIText'


const Map = ({eventData, eventData2, center, zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData && eventData.map(ev => {
        if(ev.categories[0].id === "wildfires") {
            if (ev.geometry[0].date[3] == '3') {
                return <LocationMarker type={0}
                lat={ev.geometry[0].coordinates[1]} 
                lng={ev.geometry[0].coordinates[0]}

                
                onClick={() => setLocationInfo(
                    {id: ev.id,
                    title: ev.title,
                    state: "NULL",
                    county: "NULL"}
                )}/>
            }
        }
        if(ev.categories[0].id === "severeStorms") {
            return <LocationMarker type={1}
            lat={ev.geometry[0].coordinates[1]} 
            lng={ev.geometry[0].coordinates[0]} onClick={() => setLocationInfo(
                {id: ev.id,
                title: ev.title,
                state: "NULL",
                county: "NULL"}
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
        var state;
        var county;
        var latty;
        var longy;
        for (var i = 0; i < counties.length; i++){
            if ((counties[i].county_fips).toString() == fippy){
               latty = counties[i].lat;
               longy = counties[i].lng;
               county = counties[i].county_full;
               state = counties[i].state_name;
            }
        }

        if (ev2.fipsCountyCode != "000" && ev2.declarationTitle != "WELLNITZ FIRE" && ev2.declarationTitle != "WELLNITZ FIRE" && ev2.declarationTitle != "WELLNITZ FIRE" && !(ev2.declarationTitle === "SEVERE WINTER STORMS AND SNOWSTORM" && ev2.fipsCountyCode === "113")
        && ((ev2.incidentBeginDate[2] === '2' && ev2.incidentBeginDate[3] === '3')
        //|| (ev2.incidentBeginDate[2] === '2' && ev2.incidentBeginDate[3] === '2')
        )) {
        // CATEGORIZATIONS
        var typy = 3;
        if (ev2.incidentType === "Hurricane") {
            typy = 666;
        } else if (ev2.incidentType === "Flood") {
            typy = 444;
        } else if (ev2.incidentType === "Severe Storm") {
            typy = 5;
        } else if (ev2.incidentType === "Winter Storm") {
            typy = 6;
        } else if (ev2.incidentType === "Fire") {
            typy = 7;
        } else if (ev2.incidentType === "Tornado") {
            typy = 8;
        }
        // CATEGORIZATIONS
        return <LocationMarker type={typy}
                lat={latty} 
                lng={longy} 
                state={state}
                county={county}

                onClick={() => setLocationInfo(
                    {id: ev2.incidentType,
                    title: ev2.declarationTitle,
                    county: (county) ? county : "NULL" ,
                    state: (state) ? state : "NULL" }
                )}/>
        } else {
            return null;
        }
    })

  return (
    <div className="grid-container">
    <div className="side-text-container"> 
        {locationInfo && <InfoBox info={locationInfo}/>}
        {!locationInfo && <TextBox />}
        <AIText />
    </div>
    <div className = "map">
        <GoogleMapReact bootstrapURLKeys={{key: 
        'AIzaSyCLIexfr2fJ_XSuKzMjXsAOx8gkt8uBLqM'}}
        defaultCenter={ center }
        defaultZoom={ zoom }
        >
            {markers2}
            {markers}
        </GoogleMapReact>
    </div>
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