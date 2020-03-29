import * as actionTypes from '../actions/actionTypes';


const initialState = {
    latitude: null,
    longitude: null,
    weatherData: {},
    forecastData: {},
    showLocationCard: null
}

const reducer = (state = initialState, action) =>{

    switch(action.type){
        case actionTypes.GET_LOCATION:
            return{
                ...state,
                latitude: action.latitude,
                longitude: action.latitude
            }

        case actionTypes.SAVE_WEATHER:
            return{
                ...state,
                weatherData: action.payload.weatherData,
                forecastData: action.payload.forecastData,
                showLocationCard: true
            }

        // case actionTypes.SAVE_FORECAST_DATA:
        //     return{
        //         ...state,
        //         weatherData: action.payload.weatherData,
        //         forecastData: action.payload.forecastData,
        //         showLocationCard: true
        //     }
    }

    return state
}

export default reducer;