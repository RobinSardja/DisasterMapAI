const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())

const API_KEY = process.env.GPT_API_KEY

app.post('/completions', async (req, res) => {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: `${req.body.news} ....
                <<Summarize professionally the following news briefings about 
                ${req.body.disaster} in ${req.body.county}, ${req.body.state} 
                with date ${req.body.date} in natural language format at the top.
                If you don't find enough information give general knowledge on 
                how to respond to disaster and don't say that there isn't.
                Don't mention anything unrelated to disaster.
                Respond in 80 words or less.>>`,
            }],
            max_tokens: 150,
        })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.error(error)
    }
})

app.listen( PORT, () => console.log('Your server is running on PORT ' + PORT) )