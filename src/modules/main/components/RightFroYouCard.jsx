import React from 'react'
import './MainStylee/RightFroYouCard.css'
import imgF from './../assets/img/emile-perron-xrVDYZRGdw4-unsplash.jpg'

function RightFroYouCard() {
  return (
    <div className='FQ-Right-For-You-card'>
                <img src={imgF} alt='class'/>
                <div className='lesson-stars'>
                    <div className='lesson-blue'> <span>43 lesson</span></div>
                    <div className='stars-gold'> <span>4.8</span></div>
                </div>
                <h2>Education Program Title</h2>
                <p>Far far away, far form the countries Vokalia and Consonantia , there the blind texts. </p>
                <div className='Fq-lastCard-class'>
                    <div className='pris-fq-left'>$ 87.00</div>
                    <div className='loren-right'> <span>loren More</span></div>
                </div>
            </div>
  )
}

export default RightFroYouCard