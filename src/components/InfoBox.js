const InfoBox = ({info}) => {
  return (
    <div>
        <h1 style={{ color: 'white', fontSize: 25}}>Natural Disaster</h1>
        <div className="info-list">
          <div className="info-name">
          <p p style={{ color: 'white', fontSize: 16, paddingLeft: 10, paddingRight: 10 }}>Disaster Type: <strong>{info.id}</strong></p>
          <p p style={{ color: 'white', fontSize: 16, paddingLeft: 10, paddingRight: 10 }}>Name: <strong>{info.title}</strong></p>
          {info.state && <p p style={{ color: 'white', fontSize: 16, paddingLeft: 10, paddingRight: 10 }}>State: <strong>{info.state}</strong></p>}
          {info.county && <p p style={{ color: 'white', fontSize: 16, paddingLeft: 10, paddingRight: 10 }}>County: <strong>{info.county}</strong></p>}
          {/* {info.date && <p p style={{ color: 'white', fontSize: 16, paddingLeft: 10, paddingRight: 10 }}>Date: <strong>{info.date}</strong></p>} */}
          </div>
        </div>
    </div>
  )
}

export default InfoBox