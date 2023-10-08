
const InfoBox = ({info}) => {
  return (
    <div className="location-info">
        <h2>INFO</h2>
        <ul>
            <li>ID: <strong>{info.id}</strong></li>
            <li>TITLE: <strong>{info.title}</strong></li>
        </ul>
    </div>
  )
}

export default InfoBox