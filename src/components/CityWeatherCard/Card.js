import React from 'react';
import classes from './CityWeatherCard.module.css';


const Card = (props) =>{
    

    return(
        <div className={classes.WeatherCard}>
            <div className="container ">
               <h2>Loading weather inforrmation...</h2>
            </div>
        </div>
    )
}


export default Card;