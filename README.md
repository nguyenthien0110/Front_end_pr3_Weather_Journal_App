# Weather-Journal App Project

## Overview
This project requires creating an asynchronous web app that uses the OpenWeatherMap API and user data to dynamically update the UI. The app allows users to enter a zip code, retrieves the weather data for that location, and displays it along with user-inputted feelings.

## Project Setup

### Requirements
- **Node and Express** should be installed on your local machine.
- **Project Dependencies:** Install `cors` and `body-parser` using npm.
- **Local Server:** Set up an Express server to serve the project and handle API requests.

### Installation
1. Clone the repository:
    ```bash
    git clone <https://github.com/nguyenthien0110/Front_end_pr3_Weather_Journal_App.git>
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

### Project Files
The primary files involved are:
- `server.js`: Sets up the server, routes, and API endpoint.
- `website/app.js`: Contains the client-side JavaScript to fetch weather data and update the UI.
- `website/index.html`: The main HTML file.
- `website/style.css`: For custom styling.

## Instructions

### Steps to Run the App

1. **Start the Server:**  
    Run the following command to start the server:
    ```bash
    npm run dev
    ```

2. **Access the App:**  
    Open [http://localhost:3000](http://localhost:3000) in a web browser.

### Usage
1. Enter a zip code into the input field.
2. Type your feelings in the "Feelings" input box.
3. Click "Generate."
4. The app retrieves the current weather and displays it along with your feelings.

## Final Output

![Output](Front_end_pr3_Weather_Journal_App\img\output.png)