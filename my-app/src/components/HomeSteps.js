import React from 'react';
import Pattern from '../assets/Decoration.svg';
import Shirt from '../assets/Icon-1.svg';
import Bag from '../assets/Icon-2.svg';
import Zoom from '../assets/Icon-3.svg';
import Arrows from '../assets/Icon-4.svg';

const HomeSteps = () => {
  return (
    <>
      <div className={"HomeSteps"}>
        <h2>
          Wystarczą 4 proste kroki
        </h2>
        <img src={Pattern} alt="pattern" className={"HomeStepsPattern"}/>
        <div className={"Steps"}>
          <div>
            <img src={Shirt} alt="shirt"/>
            <p>Wybierz rzeczy</p>
            <p>ubrania, zabawki, sprzęt i inne</p>
          </div>
          <div>
            <img src={Bag} alt="bag"/>
            <p>Spakuj je</p>
            <p>skorzystaj z worków na śmieci</p>
          </div>
          <div>
            <img src={Zoom} alt="zoom"/>
            <p>Zdecyduj komu chcesz pomóc</p>
            <p>wybierz zaufane miejsce</p>
          </div>
          <div>
            <img src={Arrows} alt="arrows"/>
            <p>Zamów kuriera</p>
            <p>kurier przyjedzie w dogodnym terminie</p>
          </div>
        </div>
        <button className={"ButtonSteps"}>oddaj rzeczy</button>
      </div>

    </>
  )
}

export default HomeSteps;