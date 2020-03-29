import * as actionTypes from './actionTypes';
import axios from 'axios';


const saveCityWeather = (payload) =>{
    return{
        type: actionTypes.SAVE_WEATHER,
        payload: payload
    }
}



export function getCityWeather(city){
    return (dispatch) =>{
        axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=c2b367514ee041af88b673ce27e720e7`)
        .then(response=>{
            // console.log(response.data)

            // City info for the forecast 
            const city_info = response.data;

            // Getting the first 7 days of the 16 day forecast
            const days = response.data.data.slice(0,7)
            console.log(days)
           
            // Today weather
            const weatherData = {
                ...days[0],
            city_name: city_info.city_name,
            country_code: city_info.country_code,
            description: days[0].weather.description,
            icon: days[0].weather.icon
            }

            // 6 day forecast
            const forecastDays = days.slice(1);

            const forecastData = forecastDays.map( day=> {
                return{
                    ...day,
                    description: day.weather.description,
                    icon: day.weather.icon
                }
            })
            

            console.log(forecastData)

            const payload = {
                weatherData: weatherData,
                forecastData: forecastData
            }
            
            dispatch(saveCityWeather(payload))
        }).catch(error=>console.log(error))
    }
}



function saveCoords(payload){
    return {
        type: actionTypes.GET_LOCATION,
        latitude: payload.lat,
        longitude: payload.lon
    }
}

// const saveLocationWeather = (weatherData) =>{
//     return{
//         type: actionTypes.SAVE_WEATHER,
//         payload: weatherData,
   
//     }
// }

// api_key = "c2b367514ee041af88b673ce27e720e7"

export  function getLocationWeather(){
    return async function(dispatch){
    
        return new Promise((resolve,reject)=>{
            if (!navigator.geolocation) {
                reject(new Error('Not Supported'));
            }
            navigator.geolocation.getCurrentPosition((pos)=>{
                
                const payload = {
                    lat: pos.coords.latitude,
                    lon: pos.coords.longitude,
                }
                dispatch(saveCoords(payload))
                resolve(payload)
            })
        }).then((payload)=>{
            // console.log(payload)

            // const url = `https://api.weatherbit.io/v2.0/current?&lat=${payload.lat}&lon=${payload.lon}&key=c2b367514ee041af88b673ce27e720e7`;
            const url = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${payload.lat}&lon=${payload.lon}&key=c2b367514ee041af88b673ce27e720e7`;

            // const url = "https://api.weatherbit.io/v2.0/current?&city_id=8953360&key=c2b367514ee041af88b673ce27e720e7;"
            // const url = 'api.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=79af495533c135dce31b1c03e27ea1f6';
            
    
            axios.get(url).then(
                (response) => {
                    const city_info = response.data;
                    const days = response.data.data.slice(0,7)
                
                    const weatherData = {
                        ...days[0],
                    city_name: city_info.city_name,
                    country_code: city_info.country_code,
                    description: days[0].weather.description,
                    icon: days[0].weather.icon
                    }

                    // 6 day forecast
                    const forecastDays = days.slice(1);

                    const forecastData = forecastDays.map( day=> {
                        return{
                            ...day,
                            description: day.weather.description,
                            icon: day.weather.icon
                        }
                    })
            

                    const payload = {
                        weatherData: weatherData,
                        forecastData: forecastData
                    }

                    console.log(payload)
                    

                    dispatch(saveCityWeather(payload))
                }
            ).catch( error => console.log(error))
        })
    
    }

}