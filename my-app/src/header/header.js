import React from 'react';
import './header.css';

export default function Header(props) {
    return <div className="header">
  
      <div className="header_logo"><img className="logo" src="https://w1.pngwave.com/png/166/949/310/logo-bird-perching-bird-wing-songbird-png-clip-art.png" alt="logo"></img></div>
      <div className="header__score">
  Score: <span>{props.score}</span>
      </div>
      <div className="header__questions"></div>
    </div>
  }