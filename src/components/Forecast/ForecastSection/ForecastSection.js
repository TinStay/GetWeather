import React, {PureComponent} from 'react';
import classes from './ForecastSection.module.css';
import ForecastCard from '../ForecastCard/ForecastCard';
import forecastImg from '../../../assets/pictures/forecast.png';
import {connect} from 'react-redux'


class ForecastSection extends PureComponent{
    
    render(){
        const forecast = this.props.forecastData
        const forecastArray = Object.values(forecast)
        // console.log(forecastArray)

        const days = forecastArray.map(day =>{
            return(
                <div key={day.datetime} className="col-md-6 col-lg-4 col-xl-2 mt-4">
                    <ForecastCard 
                    icon={day.icon}
                    date={day.datetime.slice(5)}
                    city={day.city}
                    description={day.description}
                    temp={day.temp}
                    clouds={day.clouds}
                    wind={day.wind_spd.toFixed()}
                    max_temp={day.max_temp}
                    min_temp={day.min_temp}
                    />
                </div>
            )
        })
    
        return(
            <div  className={classes.ForecastSection}>
                <div className="container-fluid">
                    <div className="col-12 text-center">
                        <h1 className={classes.Heading}>Weekly forecast for {this.props.city}</h1>
                        {/* <h2 className={classes.Heading}>for {this.props.city}</h2> */}
                    </div>
                    <div className="row mb-4">
                        {days}
                    </div>
                </div>
                
            </div>
        )
    }

}

const mapStateToProps = state =>{
    return{
        forecastData: state.forecastData,
        city: state.weatherData.city_name
    }
}


export default connect(mapStateToProps)(ForecastSection);