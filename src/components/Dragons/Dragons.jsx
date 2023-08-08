import React, { useEffect, useState } from 'react'
import './Dragons.css'
import axiosInstance from '../../helper/axiosInstance'

const Dragons = () => {

  let [dragonData, setDragonData] = useState([])

  useEffect(() => {
    let fetchdata = async () => {
      let { data } = await axiosInstance.get("https://api.spacexdata.com/v3/dragons")
      setDragonData(data)
    }
    fetchdata()
    // console.log(dragonData);
  }, [])

  return (
    <div className='spaceX__dragon'>
      {
        dragonData.map((dragon) => {
          return (
            <div>
              <p>{dragon.name}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Dragons