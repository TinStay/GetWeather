import React, { PureComponent } from 'react';
import { connect }from 'react-redux';
// import * as actionTypes from '../store/actions/actionTypes';
import * as actions from '../store/actions/actions';
import classes from './getWeather.module.css';
import axios from 'axios';

import CityWeatherCard from '../components/CityWeatherCard/CityWeatherCard';
import ForecastSection from '../components/Forecast/ForecastSection/ForecastSection';
import Card from '../components/CityWeatherCard/Card';
import Searchbar from '../components/Searchbar/Searchbar';


class getWeather extends PureComponent{

    state = {
        showLocation: false,
        city: "California"
        
    }

    componentDidMount(){
        this.props.getCityWeather(this.state.city)
    }


    searchCity= ()=>{
        this.props.getCityWeather(this.state.city)
    }

    changeKeyword = (e) =>{
        this.setState({
            city: e.target.value
        })
    }

    
    

    render(){

        let weatherCard = <Card />;
        if(this.props.showLocationCard){
            weatherCard = (
                <CityWeatherCard 
                icon={this.props.weather.icon}
                temp={this.props.weather.temp}
                city={this.props.weather.city_name}
                code={this.props.weather.country_code}
                description={this.props.weather.description}
                clouds = {this.props.weather.clouds}
                wind = {this.props.weather.wind_spd.toFixed()}
                date={this.props.weather.datetime}
                max_temp={this.props.weather.max_temp}
                min_temp={this.props.weather.min_temp}/>
            )   
        }
        

        return(
            <div  >
                
                <div id="current"><h1 >KURVE</h1></div>
                
                <div  className="container mb-4 pb-4">
                    <div   className={classes.Jumbotron}>
                        
                        <div className="col-12 text-center">
                            <h1 className={classes.Heading}>Current weather</h1>
                        </div>
                        <h5 className="mt-4 mb-3 mx-auto"><b >GET WEATHER FOR YOUR LOCATION</b></h5>
                        <button onClick={this.props.getLocationWeather} className="btn btn-lg btn-info mt-3 mb-4 animated heartBeat">Get weather</button>
                        
                        <h5 className='mt-4'><b>OR SEARCH BY CITY</b></h5>
                        <Searchbar search={this.searchCity}
                        changeKeyword={this.changeKeyword}/>

                    </div>

                    <div className="pb-3 mb-4">
                        

                        {weatherCard}
                        <a href="#forecast" className="btn animated infinite bounce delay-2s slow"><span className={classes.Arrow}>&#709;</span></a>
                    </div>

                    
                </div>
                
            
                <div id="forecast">
                    <ForecastSection />
                </div>
           
        </div>
        )
    }
    
};


const mapStateToProps = (state) =>{
    return{
        lat: state.latitude,
        lon: state.longitude,
        weather: state.weatherData,
        showLocationCard: state.showLocationCard

    }
}

const mapDispatchToProps = dispatch =>{
    return{
        getLocationWeather: () => dispatch(actions.getLocationWeather()),
        getCityWeather: (city) => dispatch(actions.getCityWeather(city))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(getWeather);