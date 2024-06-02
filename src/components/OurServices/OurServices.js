import React from 'react'
import './OurServices.css'
import first from '../../assets/first.webp'
import second from '../../assets/second.webp'
import third from '../../assets/third.webp'
import fourth from '../../assets/fourth.webp'
import fifth from '../../assets/fifth.webp'
import sixth from '../../assets/sixth.webp'

const OurServices = () => {
    return (
        <>
            <div className='mainBody'>
                <div className='ourServices'>
                    <h1> OUR SERVICES</h1>
                </div>
                <div className='firstBox'>
                    <div><img src={first}  alt='' /></div>
                    <div><img src={second} alt='' /></div>
                    <div><img src={third} alt='' /></div>
                </div>
                <div className='secondBox'>
                    <div><img src={fourth} alt='' /></div>
                    <div><img src={fifth} alt='' /></div>
                    <div><img src={sixth} alt='' /></div>
                </div>
            </div>
        </>
    )
}

export default OurServices
