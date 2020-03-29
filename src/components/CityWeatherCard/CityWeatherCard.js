import React from 'react';
import classes from './CityWeatherCard.module.css';


const cityWeatherCard = (props) =>{
    const imgUrl = `https://www.weatherbit.io/static/img/icons/${props.icon}.png`;

    let animatedClasses = [classes.WeatherCard, 'animated zoomIn ']

    return(
        <div className={animatedClasses.join(' ')}>
            <div className="container">
                <div className='row'>
                    <div className="col-md-6 ">
                        <div className="col-12 ">
                            <img className={classes.Icon} src={imgUrl} alt="weather icon"/>
                            <h1 className={classes.City}>{props.city}, {props.code}</h1>
                        </div>
                        <div className="col-12 h4">
                            <p>{props.date}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                            <div className="col-12 mb-4">
                                <h4 className="m-auto">{props.description}</h4>
                                <h1 className='yellow'>{props.temp} <span>&#8451;</span></h1>
                            </div>
                            <div className="row mt-4 ">
                                <div className="col-md-10 d-flex justify-content-between mx-auto">
                                    <h4 className={classes.MinMax}><p>Max temp: {props.max_temp}<span>&#8451;</span> </p></h4>
                                    <h4 className={classes.MinMax}><p>Min temp: {props.min_temp}<span>&#8451;</span></p></h4>
                                </div>
                                <div className="mx-auto mt-4">
                                    <h4 className={classes.Info}>Clouds: {props.clouds}%</h4>
                                    <h4 className={classes.Info}>Wind speed: {props.wind} km/h </h4>
                                </div>
                                
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}


export default cityWeatherCard