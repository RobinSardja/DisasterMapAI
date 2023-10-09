# DisasterMapAI
An interactive web application powered by AI that provides a map of the USA showing recent or upcoming disasters to give the best information based on user.

# How to Test
You will need Node.js installed to run this project. You will also need an API key from ChatGPT.

Clone repository locally and run "npm-install" inside of project repository to download all necessary node modules for local testing. 

Crate an .env file in the project file directory and store the API key for ChatGPT-3.5 here. Your file will have the line "GPT_API_KEY = [insert your API key here]".

Once this is complete, run "npm run start:backend" to start the backend. If this is done correctly, your backend server should be running on port 8000. 

In a new terminal, run "npm run start:frontend" to start the frontend. If this is done correctly, localhost will open in your default browser with the web application.
