import React from 'react';
import Pattern from '../assets/Decoration.svg';

const HomeHelp = () => {
  return (
    <>
      <div className={"HomeHelp"}>
        <h2> Komu pomagamy?</h2>
        <img src={Pattern} alt="pattern"/>
        <div className={"HelpPlaces"}>
          <button className={"HelpButton"}>Fundacjom</button>
          <button className={"HelpButton"}>Organizacjom pozarządowym</button>
          <button className={"HelpButton"}>Lokalnym zbiórkom</button>
        </div>
        <div>
          <p className={"HelpIntro"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        </div>
      </div>
      <div className={"HelpOrganizations"}>
        <div>
          <h3>Organizacja "Lorem Ipsum 1" <span>Egestas, sed, tempus</span></h3>
        <span className={"HelpOrganizationsCursive"}>Quis varius quam quiusque id diam vel quam elementum pulvinar. </span>
        <hr/>
        </div>
        <div><h3>Organizacja "Lorem Ipsum 2" <span>Ut, aliquam, purus, sit, amet</span></h3>
        <span className={"HelpOrganizationsCursive"}>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. </span>
        <hr/>
        </div>
        <div><h3>Organizacja "Lorem Ipsum 3" <span>Mi, quis, hendrerit, dolor</span></h3>
        <span className={"HelpOrganizationsCursive"}>Scelerisque in dictum non consectetur a erat nam. </span>
        </div>
      </div>
      <div className={"HelpPages"}>
        <button className={"HelpPage"}>1</button>
        <button className={"HelpPage"}>2</button>
      </div>
    </>
  );
};

export default HomeHelp;