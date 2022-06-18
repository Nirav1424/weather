import React from 'react'

function Clouds({ tempInfo}) {
const cenetr = {'text-align' : 'center'}
const padding = {'padding' : '23px'}

  const {
    temp,
    dis,
    weathermood,
    name,
    speed,
    country,
  } = tempInfo;
  return (
    <>
      <div className="card  mb-3" >
        <i className={"wi wi-day-sunny"} style={padding} alt="..."  ></i>
        <div className="card-body" >
          <h3>{weathermood}</h3>
          <h3 className="card-title">speed :{speed}</h3>
          <h3>   <p className="card-text">discription : {dis} , temp : {temp}&deg;</p>
         </h3>
          <p className="card-text">
            <div className="text-muted"><b> {name} ,{country}             </b></div>
          </p>
          <p className="center" style={cenetr}> <b>Date : {Date().toLocaleString()}
            
            </b></p>
        </div>
      </div>
    </>
  )
}

export default Clouds;