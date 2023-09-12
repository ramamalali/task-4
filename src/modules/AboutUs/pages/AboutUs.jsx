import React from 'react'
import HeroAbout from '../components/HeroAbout'
import Instructor from '../../main/components/Instructor'
import Text from '../components/Text';
import Cards from '../components/Cards';


function AboutUs () {
  return (
    <div>
       <HeroAbout />
       <Instructor />
       <Text />
       <Cards />
    </div>
  )
}

export default AboutUs