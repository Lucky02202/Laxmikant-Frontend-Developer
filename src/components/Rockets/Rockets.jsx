import React, { useEffect, useState } from 'react'
import './Rockets.css'
import axiosInstance from '../../helper/axiosInstance'

const Rockets = () => {

  let [rocketData ,setRocketData] = useState([])

  useEffect(()=>{
    let fetchdata = async ()=>{
      let {data} = await axiosInstance.get('https://api.spacexdata.com/v3/rockets')
      setRocketData(data)
    }
    fetchdata()
    console.log(rocketData);
  },[])

  return (
    <div className='spaceX__rocket'>
      {
        rocketData.map((rocket)=>{
          return(
            <div>
              <p>{rocket.rocket_name}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Rockets