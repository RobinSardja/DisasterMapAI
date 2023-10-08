import spinner from './spinner.gif'
const Loader = () => {
  return (
    <div className="loader">
        <h1>Fetching Data...</h1>
        <img src={spinner} alt = "Loading"/>
    </div>
  )
}

export default Loader