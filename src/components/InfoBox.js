const InfoBox = ({info}) => {
  return (
    <div>
        <h2>Natural Disaster Information</h2>
        <div className="info-list">
          <p>Disaster Type: <strong>{info.id}</strong></p>
          <p>Name: <strong>{info.title}</strong></p>
          {info.state && <p>State: <strong>{info.state}</strong></p>}
          {info.county && <p>County: <strong>{info.county}</strong></p>}
          {info.date && <p>Date: <strong>{info.date}</strong></p>}
        </div>
    </div>
  )
}

export default InfoBox