import React, { useEffect, useState } from 'react'
import './Capsules.css'
import axiosInstance from '../../helper/axiosInstance'


const Capsules = () => {

  let [capsuleData, setCapsuleData] = useState([])

  useEffect(() => {
    let fetchdata = async () => {
      let { data } = await axiosInstance.get('https://api.spacexdata.com/v3/capsules')
      setCapsuleData(data)
    }
    fetchdata()
    // console.log(capsuleData);
  }, [])

  return (
    <div className='spaceX__capsule'>
      {
        capsuleData.map((capsule) => {
          return (
            <div>
              <p>{capsule.capsule_serial}</p>
              <img src={} alt=""  height={"300px"} width={"400px"} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Capsules