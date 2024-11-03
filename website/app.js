/* Global Variables */
const apiKey = 'd3a2bc42e35819a393dac62a42820c19';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

// Function to fetch weather data from OpenWeatherMap API
const getWeather = async (zip) => {
  const response = await fetch(`${baseURL}${zip}&appid=${apiKey}`);
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// Function to POST data to server
const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

// Function to update UI with retrieved data
const updateUI = async () => {
  const request = await fetch('/all');
  try {
    const allData = await request.json();
    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('temp').innerHTML = Math.round(allData.temp) + ' degrees';
    document.getElementById('content').innerHTML = allData.feel;
  } catch (error) {
    console.log("error", error);
  }
};

// Event listener for the Generate button
document.getElementById('generate').addEventListener('click', performAction);

function performAction() {
  const zip = document.getElementById('zip').value;
  const feelings = document.getElementById('feelings').value;

  getWeather(zip).then((data) => {
    postData('/add', { date: newDate, temp: data.main.temp, feel: feelings });
  }).then(() => {
    updateUI();
  });
}
