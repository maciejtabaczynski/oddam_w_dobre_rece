import React from 'react';
import {Link} from 'react-router-dom';
import Pattern from '../assets/Decoration.svg';


class HomeHeader extends React.Component {
  render () {

    return (
      <>
        <div className={"homeHeaderContainer"}>
            <div className={"homeHeaderImg"}></div>

            <div className={"homeHeaderSection"}>
            <div className={"homeHeaderArticle"}>
              <p>Zacznij pomagać!</p>
              <p>Oddaj niechciane rzeczy w zaufane ręce</p>
              <img src={Pattern} alt={"pattern"}/>
            </div>
            <div className={"homeHeaderButtons"}>
              <button className={"homeHeaderButton"}>
              <Link to={"/logowanie"}>Oddaj rzeczy</Link>
              </button>
              <button className={"homeHeaderButton"}>
              <Link to={"/logowanie"}>Zorganizuj zbiórkę</Link>
              </button>
              </div>
            </div>
        </div>
      </>
    )
  };
};

export default HomeHeader;
