import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'  
import Webd from '../components/contents/Webd'
import Website from '../components/contents/Website'
import Gsap from '../components/contents/Gsap'
import Port from '../components/contents/Port'
import Youtube from '../components/contents/Youtube'



const Home = () => {
  return (
    <Main 
      title="라라 유튜브" 
      description="환영합니다."
    >
            <Today />
            <Developer />
            <Webd />
            <Website />
            <Gsap />
            <Port />
            <Youtube />

    </Main>
  )
}

export default Home
