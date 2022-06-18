import './App.css';
import React,{useEffect, useState} from 'react'
import Clouds from './componets/Clouds';

function App() {

  const [searchValue,setSearchValue] = useState('surat');
  const [tempInfo,setTempInfo] =useState({});

const getWeatherInfo =async ( ) => {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=b66c8e0adc88d36d8e0cd23170c211e8`;

    let res = await fetch(url);
    let data = await res.json();

    const { temp, humidity, pressure } = data.main;
    const { main: weathermood } = data.weather[0];
    const { name } = data;
    const { speed } = data.wind;
    const { country, sunset } = data.sys;
    const {description :dis } = data.weather[0];


    const myNewWeatherInfo = {
      temp,
      dis,
      humidity,
      pressure,
      weathermood,
      name,
      speed,
      country,
      sunset,
    };

   setTempInfo(myNewWeatherInfo);
  } catch (error) {
    console.log(error);
  }
};


useEffect(()=>{
  getWeatherInfo();
 
},[]);

  return (
    <>

      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
             onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>



     <Clouds tempInfo={tempInfo}/>
    </>

  );
}

export default App;
