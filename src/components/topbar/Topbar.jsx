import "./topbar.scss";

import React from "react";

export default function Topbar() {
  return (
    <div className="picture">
      
      <div className="topbar">
        <div className="wrapper">
          <div className="image">
            <img src="./assets/logo.svg" className="logo" alt="" />
          </div>
          <div className="left">
            <li className="nav">
              <a href="#trending">TRENDING</a>
            </li>
            <li className="nav">
              <a href="#videos">VIDEOS</a>
            </li>
            <li className="nav">
              <a href="#stories">STORIES</a>
            </li>
            <li className="nav">
              <a href="#Quizzes">QUIZZES</a>
            </li>
            <li className="nav">
              <a href="#memes">MEMES</a>
            </li>
            <li className="nav">
              <a href="#spotlight">SPOTLIGHT</a>
            </li>

            <img src="assets/saved2.png" className="saved" alt="" />

            <img src="assets/account2.png" className="profile" alt="" />

            <img src="assets/search2.png" className="search" alt="" />
          </div>

          <div className="right">
            <div className="hamburger">
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="rightarrow">
     <a href=""><img src="assets/down-arrow2.png" className="Rarrow" alt="" /></a>
      </div>
      <div className="leftarrow">
  <a href=""><img src="assets/down-arrow1.png" className="Larrow"  alt="" /></a>
      </div>
      <div className="details"><div className="cat">
        <div className="Cat">
          Entertaiment
          </div>
        
      </div>
      <div className="title">
      10 Annoying Stereotypes You Will Find In Almost Every Bollywood Movie
      </div>
      <div className="Read">
        Read Article
      </div>
      </div>
     
       <img src="https://s4.scoopwhoop.com/anj2/6229aaad3172a70001facc8b/f7a47979-5f49-4428-8429-fc092c7e82d0.jpg"
        className="back1"
        alt=""
      />
      
      
    </div>
  );
}
