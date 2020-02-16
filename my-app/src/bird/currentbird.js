import React from 'react';
import './currentbird.css';
import birdsData from '../birdsdata'
import AudioPlayer from 'react-h5-audio-player'

export default class CurrentBird extends React.Component{
    render(){
      if(this.props.currentBird!==-1){
        let dataBird=birdsData[this.props.currentSection][this.props.currentBird];
      return <div className="current__bird">
        <div className="main-information">
          <img className="main-image" src={dataBird.image} alt='fasg'></img>
          <div className="main-information_wrapper">
            <div className="main-name">{dataBird.name}</div>
     <div className="main-family">{dataBird.species}</div>
            <div className="main-audio"><AudioPlayer 
            autoPlayAfterSrcChange ={false}
            autoPlay={false} src={dataBird.audio}/></div>
          </div>
        </div>
    <div className="description">{dataBird.description}</div>
      </div>
      }
       else return <></>
    }
  
  }