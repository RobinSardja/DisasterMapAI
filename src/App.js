import { useState, useEffect } from 'react'
import Map from './components/Map'
import Loader from './components/Loader'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)
  const [otherApiData, setOtherApiData] = useState([]) // State for the data from the other API

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events')
      const { events } = await res.json()
      setEventData(events)
      setLoading(false)
    }

    fetchEvents()
  }, []) // Empty dependency array, so this useEffect runs only once when the component mounts

  useEffect(() => {
    console.log("Event Data Updated:", eventData)
  }, [eventData]) // This useEffect watches for changes in eventData and logs it when it changes

  useEffect(() => {
    const fetchOtherApiData = async () => {
      // Replace 'YOUR_OTHER_API_ENDPOINT' with the URL of the other API you want to fetch data from
      const res = await fetch('https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries')
      const data = await res.json()
      setOtherApiData(data)
    }

    fetchOtherApiData()
  }, []) // Empty dependency array, so this useEffect runs only once when the component mounts

  useEffect(() => {
    console.log("Other API Data Updated:", otherApiData)
  }, [otherApiData]) // This useEffect watches for changes in otherApiData and logs it when it changes

  return (
    <div>
      { !loading ? <Map eventData={eventData} eventData2={otherApiData}/> : <Loader></Loader>}
    </div>
  );
}

export default App;
