import React from 'react';
import './sections.css';

export default function Sections(props){
    return <div className="sections">
      <div className="section active-section" >Разминка</div>
      <div className="section">Воробьиные</div>
      <div className="section">Лесные птицы</div>
      <div className="section">Певчие птицы</div>
      <div className="section">Хищные птицы</div>
      <div className="section">Морские птицы</div>
    </div>
  }