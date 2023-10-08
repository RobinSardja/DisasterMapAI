
const InfoBox = ({info}) => {
  return (
    <div className="location-info">
        <h2>Natural Disaster Information</h2>
        <ul>
            <li>ID: <strong>{info.id}</strong></li>
            <li>TITLE: <strong>{info.title}</strong></li>
            <li>STATE: <strong>{info.state}</strong></li>
            <li>COUNTY: <strong>{info.county}</strong></li>
        </ul>
    </div>
  )
}

export default InfoBox