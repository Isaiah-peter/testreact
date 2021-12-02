import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <h1 className="logo">Frame</h1>
        <div className="nav-menu">
          <ul>
            <li className="nav-list">
              <a href="#">home</a>
            </li>
            <li className="nav-list">
              <a href="#">feature</a>
            </li>
            <li className="nav-list">
              <a href="#">about</a>
            </li>
            <li className="nav-list">
              <a href="#">frames</a>
            </li>
            <li className="nav-list">
              <a href="#">contact us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-discription">
        <h1 className="header-main-discription">
          uicookies.com Create High Quality Bootstrap Template for free
        </h1>
        <div className="header-button">
          <button className="big ui primary button">get theme here</button>
          <button className="big ui basics button">get frame here</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
