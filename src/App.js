import { useState, useEffect } from 'react'

const App = () => {

  const [ value, setValue ] = useState("")
  const [ message, setMessage ] = useState("")

  const [ previousChats, setPreviousChats ] = useState([])

  const [ currentTitle, setCurrentTitle ] = useState("")

  const [ disaster, setDisaster ] = useState("Hurricane Idalia")
  const [ county, setCounty ] = useState("Hillsborough County")
  const [ state, setState ] = useState("FL")

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        disaster: disaster,
        county: county,
        state: state,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const response = await fetch('http://localhost:8000/completions', options)
      const data = await response.json()
      setMessage(data.choices[0].message)
    } catch (error) {
      console.error(error)
    }
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
    <div className="App">
      <section className="main">
        <h1>EmergenSAVE</h1>
        <ul className="feed">
          {currentChat.map(( chatMessage, index ) => <li key={index}>
            <p>{chatMessage.content}</p>
          </li>)}
        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <button id="submit" onClick={getMessages}>Latest info</button>
          </div>
          <p className="info">
            Made by Grace Chang, Nathan Cheng, Robin Sardja, and Nicholas Tsai for SASEhack Fall 2023
          </p>
        </div>
      </section>
    </div>
  );
}

export default App