import React from 'react'
import './Banner.css'
import patentsteachers from './images/for-parents-teachers4.jpg'
import students from './images/for-students5.jpg'

function Banner() {
  return (
    <div className='banner'>
        <div className='for-parents-teachers banner-img'>
            <img src={patentsteachers} className="banner-image"/>
            <div className='banner-btn'>For Parents & Teachers</div>
        </div>
        <div className='for-students banner-img' >
        <img src={students} className="banner-image"/>
            <div className='banner-btn'>For Students</div>
        </div>
    </div>
  )
}

export default Banner