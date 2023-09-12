import React from 'react'
import './MainStylee/RightForYou.css'
import RightFroYouCard from './RightFroYouCard';

function RightForYou() {
  return (
    <section className='FQ-Right-For-You'>
        <div className='fq-title-you'>
            <h2>The Right Course For You</h2>
            <p>Far far away , behind the word mountains , far form the countries Vokalia and Consonantia , there the blind texts. </p>
        </div>
        <div className='all-cardf-fq'>
            <RightFroYouCard />
            <RightFroYouCard />
            <RightFroYouCard />
        </div>
    </section>
  )
}

export default RightForYou;