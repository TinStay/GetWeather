import React from 'react';
import classes from './ForecastCard.module.css';


const forecastCard = (props) =>{
    const imgUrl = `https://www.weatherbit.io/static/img/icons/${props.icon}.png`;

    let animatedClasses = [classes.ForecastCard, 'animated fadeInLeftBig ']

    return(
        <div className={animatedClasses.join(' ')}>
            <div className="p-3">
                <h4 className={classes.Date}>{props.date}</h4>
                <img className={classes.Icon} src={imgUrl} alt="weather icon"/>
                <h3 className="m-auto">{props.description}</h3>
                <h1 className='yellow'>{props.temp} <span>&#8451;</span></h1>
                <div className="mx-auto ">
                    <h4 className={classes.Info}><p>Max: {props.max_temp} <span>&#8451;</span></p></h4>
                    <h4 className={classes.Info}><p>Min: {props.min_temp} <span>&#8451;</span></p></h4>
                    <h4 className={classes.Info}><p>Clouds: {props.clouds}% </p></h4>
                    <h4 className={classes.Info}><p>Wind speed: {props.wind}km/h</p></h4>
                </div>
            </div>
        </div>
    )
}


export default forecastCard;