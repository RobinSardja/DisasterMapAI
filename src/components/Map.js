import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import InfoBox from './InfoBox'
import { useState, useEffect } from 'react'
import counties from "./counties.json"
import TextBox from './TextBox'
import Description from './Description'
import News from './News'
import Loader from './Loader'

const Map = ({eventData, eventData2, center, zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const markers = eventData && eventData.map(ev => {
        if(ev.categories[0].id === "wildfires") {
            if (ev.geometry[0].date[3] === '3') {
                return <LocationMarker type={0}
                lat={ev.geometry[0].coordinates[1]}
                lng={ev.geometry[0].coordinates[0]}

                onClick={() => setLocationInfo(
                    {id: ev.id,
                    title: ev.title,
                    state: "",
                    county: ""}
                )}/>
            }
        }
        if(ev.categories[0].id === "severeStorms") {
            return <LocationMarker type={1}
            lat={ev.geometry[0].coordinates[1]} 
            lng={ev.geometry[0].coordinates[0]} onClick={() => setLocationInfo(
                {id: ev.id,
                title: ev.title,
                state: "",
                county: ""}
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
            if ((counties[i].county_fips).toString() === fippy){
               latty = counties[i].lat;
               longy = counties[i].lng;
               county = counties[i].county_full;
               state = counties[i].state_name;
            }
        }

        if (ev2.fipsCountyCode !== "000" && ev2.declarationTitle !== "WELLNITZ FIRE" && ev2.declarationTitle !== "WELLNITZ FIRE" && ev2.declarationTitle !== "WELLNITZ FIRE" && !(ev2.declarationTitle === "SEVERE WINTER STORMS AND SNOWSTORM" && ev2.fipsCountyCode === "113")
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
                    state: (state) ? state : "NULL" ,
                    date: (ev2.incidentBeginDate) ? ev2.incidentBeginDate : "2023",}
                )}/>
        } else {
            return null;
        }
    })

    const AIText = () => {

      
      const [ disaster, setDisaster ] = useState(locationInfo ? locationInfo.title : "");
      const [ county, setCounty ] = useState(locationInfo ? locationInfo.state : "");
      const [ state, setState ] = useState(locationInfo ? locationInfo.county : "");
      const [ date, setDate ] = useState(locationInfo ? locationInfo.date : "");
      const [loading, setLoading ] = useState(false);
      //NEWSCONTENT
      var newsContent = News(disaster, county, state, locationInfo.id) // <----- ROBIN IS SO SMART!!!!!!!!
      //NEWSCONTENT
      const [ value, setValue ] = useState("")
      const [ message, setMessage ] = useState("")
    
      const [ previousChats, setPreviousChats ] = useState([])
    
      const [ currentTitle, setCurrentTitle ] = useState("")

      const getMessages = async () => {
        setLoading(true);
        console.log("GETTTING MESSAGE");
        console.log("NEWS IS ---------------------")
        console.log(newsContent)
        console.log("NEWS IS ---------------------")
        const options = {
          method: "POST",
          body: JSON.stringify({
            disaster: disaster,
            county: county,
            state: state,
            date: locationInfo.date,
            news: newsContent,
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }
        console.log(prompt);
        try {
          const response = await fetch('http://localhost:8000/completions', options);
          const data = await response.json();
          setMessage(data.choices[0].message);
        } catch (error) {
          console.error(error)
        }
        setLoading(false);
      }
    
      useEffect(() => {
        console.log(currentTitle, value, message)
        setCurrentTitle(value)
        setPreviousChats(prevChats => (
          [ // ...prevChats,
            {
              title: currentTitle,
              role: message.role,
              content: message.content,
            },
          ]
        ))
      }, [message, currentTitle])
      
      console.log(previousChats)
    
      const currentChat = previousChats.filter( previousChat => previousChat.title === currentTitle )
      const uniqueTitles = Array.from(new Set(previousChats.map( previousChat => previousChat.title )))
      console.log(uniqueTitles)
    
      return (
        <div className='info2'>
          <div>
          <h1 style={{ color: 'white', fontSize: 25}}>More Information:</h1>
          <div className="feed">
            <div id="feed">
            {loading ? (
          <div className='small-loading' id='small-loading'><Loader /></div>
        ) : (
          <ul id="navbar-menu">
            {currentChat.map((chatMessage, index) => (
              <li key={index}>
                <p style={{ color: 'white', fontSize: 17, paddingLeft: 10, paddingRight: 10 }}>{chatMessage.content}</p>
              </li>
            ))}
          </ul>
        )}
          </div>
        </div>
            <div className="bottom-section">
              <div className="input-container">
                <button className='button' id="submit" onClick={getMessages}>Latest Information</button>
              </div>
              <div className="input-container">
                <button className='button' id="prepare" onClick={getMessages}>How can I prepare?</button>
              </div>
              <div className="input-container">
                <button className='button' id="respond" onClick={getMessages}>How can I respond?</button>
              </div>
              <div className="input-container">
                <button className='button' id="recover" onClick={getMessages}>How can I help recover?</button>
              </div>
            </div>
          </div>
        </div>
      );
    }

  return (
    <div className="grid-container">
    <div> 
        {locationInfo && <div className='side-text-container'> <div className='info'><InfoBox info={locationInfo}/></div> <AIText /></div>}
        {!locationInfo  && <div className='side-text-container'><div className='info'><TextBox className="info"/></div> <div className='info'><Description className="info" /></div></div>}
    </div>
    <div>
    <h1>Map of Natural Disasters in the US in 2023</h1>
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
    </div>
  )
}

Map.defaultProps = {
    center: {
        lat: 38,
        lng: -97
    },
    zoom: 4.5
}

export default Map