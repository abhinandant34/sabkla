import React from 'react'
import './Events.css'
import delhi_1 from './images/Delhi-Book-Fair-1.png'
import delhi_2 from './images/Delhi-Book-Fair-2.png'
import delhi_3 from './images/Delhi-Book-Fair-3.png'
import delhi_4 from './images/Delhi-Book-Fair-4.png'
import delhi_5 from './images/Delhi-Book-Fair-5.png'
import delhi_6 from './images/Delhi-Book-Fair-6.png'
import noida_1 from './images/Noida-Book-Fair-1.png'
import noida_2 from './images/Noida-Book-Fair-2.png'
import patiala_1 from './images/Patiala1.jpg'
import patiala_2 from './images/Patiala2.jpg'
import patiala_3 from './images/Patiala3.jpg'

function Events() {
  return (
    <div className='events' id='events'>
        <div className='fairs'>
            <div className='fair-heading about-heading'>
                Delhi-Book-Fair
            </div>
            <div className='fair-img'>
                <img src={delhi_1} className="fair-images"/>
                <img src={delhi_2} className="fair-images"/>
                <img src={delhi_3} className="fair-images"/>
                <img src={delhi_4} className="fair-images"/>
                <img src={delhi_5} className="fair-images"/>
                <img src={delhi_6} className="fair-images"/>                          
            </div>
        </div>
        <div className='fairs'>
            <div className='fair-heading about-heading'>
                Noida-Book-Fair
            </div>
            <div className='fair-img'>
                <img src={noida_1} className="fair-images"/>
                <img src={noida_2} className="fair-images"/>                     
            </div>
        </div>
        <div className='fairs'>
            <div className='fair-heading about-heading'>
                Patiala-Book-Fair
            </div>
            <div className='fair-img'>
                <img src={patiala_1} className="fair-images"/>
                <img src={patiala_2} className="fair-images"/>
                <img src={patiala_3} className="fair-images"/>                     
            </div>
        </div>
    </div>
  )
}

export default Events