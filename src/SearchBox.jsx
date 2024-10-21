import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "5abdf43cb173a1bc1dffa9139f04b026";
    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonReponse = await response.json();
            let results = {
                city: city,
                temp: jsonReponse.main.temp,
                tempMin: jsonReponse.main.temp_min,
                tempMax: jsonReponse.main.temp_max,
                humidity: jsonReponse.main.humidity,
                feelsLike: jsonReponse.main.feels_like,
                weather: jsonReponse.weather[0].description,
            }
            return results;

        } catch (error) {
            throw error;
        }
    }

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo)
        }catch(error){
            setError(true);
        }
        
    }

    return (
        <div className='Search'>
            <h2>Search for the weather</h2>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City" variant="outlined" value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type="Submit">Submit</Button>
                {error && <p style={{color:"red"}}>No such places exist!</p>}
            </form>

        </div>
    )
}