import React from 'react';
import Pattern from '../assets/Decoration.svg';
import Signature from '../assets/Signature.svg';
import People from '../assets/People.jpg';



const HomeAbout = () => {
  return (
    <>
      <div className={"HomeAbout"}>
        <div className={"HomeAboutInfo"}>
          <h2>O nas</h2>
          <img src={Pattern} alt="pattern" className={"HomeAboutPattern"}/>
          <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
          <img src={Signature} alt="signature" className={"HomeAboutSignature"}/>
        </div>
        <img src={People} alt="people" className={"HomeAboutImg"}/>
      </div>
    </>
  )
}

export default HomeAbout;