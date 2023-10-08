const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())

const API_KEY = process.env.GPT_API_KEY

app.post('/completions', async (req, res) => {
    if (req.body.id === 1) {
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
                content: ` Professionally summarize the following news briefings
                about ${req.body.disaster} in ${req.body.county}, ${req.body.state} 
                with date ${req.body.date} in naturally spoken prose.
                If you don't find enough information, give general knowledge on 
                how to respond to the corresponding disaster without dismissing its existence.
                Strictly stay on topic and respond in 50 words or less.${req.body.news}.`,
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
    }
    if (req.body.id === 2) {
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
                    content: `How to best prepare for a ${req.body.disaster} 30 words or less`,
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
    }
    if (req.body.id === 3) {
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
                    content: `How can first responders respond to a ${req.body.disaster} 30 words or less`,
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
    }
    if (req.body.id === 4) {
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
                    content: `How can I help for ${req.body.disaster} give me a couple links 30 words or less`,
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
    }
})

app.listen( PORT, () => console.log('Your server is running on PORT ' + PORT) )