import React from 'react';
import Pattern from '../assets/Decoration.svg';
import Facebook from '../assets/Facebook.svg';
import Instagram from '../assets/Instagram.svg';

const HomeContact = () => {
  return (
    <>
      <div className={"HomeContact"}>
        <div className={"HomeContactUs"}>
        <h2>Skontaktuj się z nami</h2>
        <img src={Pattern} alt=""/>
        </div>
        <form>
          <label>
             Wpisz swoje imię <br></br>
            <input type="text" name="name" placeholder= {"Krzysztof"} />
              </label>
              <label>
             Wpisz swój email <br></br>
            <input type="email" name="name" placeholder= {"abc@xyz.pl"} />
              </label>
              <label>
             Wpisz swoją wiadomość <br></br>
            <textarea name="name" placeholder= {"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exaea commodo consequat."} />
              </label>
              <button>Wyślij</button>
         </form>
      </div>
      <div className={"Footer"}>
        <span>Copyright by Coders Lab</span>
        <div className={"Media"}>
          <a href={"https://facebook.com"}>
            <img src={Facebook} alt="facebook"/>
          </a>
          <a href={"https://instagram.com"}>
            <img src={Instagram} alt="instagram"/>
          </a>
        </div>
      </div>
    </>
  );
};

export default HomeContact;