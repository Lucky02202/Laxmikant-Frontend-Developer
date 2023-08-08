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
    <main className='spaceX__capsule'>
      <header className='spaceX__capsule-header'>
        <section className='spaceX__capsule-header-heading'>
          <h1>
            <div></div>
            CAPSULE
            <div></div>
          </h1>
          <p>The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond.</p>
        </section>
      </header>
      <section className='spaceX__capsule-cardgrid'>
        <div className='spaceX__capsule-cardgrid__heading'>
          <h1>Checkout Some Of Our Capsules</h1>
        </div>
        <div className='spaceX__capsule-cardgrid__cards'>
          {
            capsuleData.map((capsule, index) => {
              return (
                <article className='spaceX__capsule-card' key={index}>
                  <div className='spaceX__capsule-card-header'>
                    <div className='spaceX__capsule-card-header__serial'>
                      <h1>{capsule.capsule_serial}</h1>
                    </div>
                    <div className='spaceX__capsule-card-header__status'>
                      <b>STATUS</b>
                      <p>{capsule.status}</p>
                    </div>
                  </div>
                  <div className='spaceX__capsule-card-footer'>
                    <div className='spaceX__capsule-card-footer__left'>
                      <p><b>Mission Count</b> : {capsule.missions.length}</p>
                      <p><b>Type</b> : {capsule.type}</p>
                    </div>
                    <div className='spaceX__capsule-card-footer__right'>
                      <div className='spaceX__capsule-card-footer__right-button'>
                          Learn More
                      </div>
                    </div>
                  </div>
                </article>
              )
            })
          }
        </div>
      </section>
    </main>
  )
}

export default Capsules