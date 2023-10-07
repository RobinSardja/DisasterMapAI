// const API_KEY = "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"

// async function fetchData() {
//   const response = await fetch( "https://api.openai.com/v1/chat/completions", {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${API_KEY}`,
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       model: "gpt-3.5-turbo",
//       messages: [{
//         role: "user",
//         content: "What is the worst thing about wildfires?",
//       }],
//       // max_tokens: 7,
//     })
//   })

//   const data = await response.json()
//   console.log(data)
// }

// fetchData()

const App = () => {
  return (
    <div className="App">
    </div>
  );
}

export default App
