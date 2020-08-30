import React from 'react';
import './question.css';
import birdsData from '../birdsdata';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
export default class Question extends React.Component{
 

  
    render(){
      let birdName='********';
      let birdImg='https://vignette.wikia.nocookie.net/angrybirdsfanon/images/7/7c/New_Version.jpg/revision/latest/scale-to-width-down/340?cb=20121008181024'
      if(this.props.answeredCorrect) {birdName=birdsData[this.props.currentSection][this.props.correctAnswer].name;
        birdImg=birdsData[this.props.currentSection][this.props.correctAnswer].image;
      }
  
      return <div className="question">
        <div className="question__img"><img src={birdImg} alt="bird" className="question-image"></img></div>
        <div className="question__main">
          <div className="main_name">{birdName}</div>
          <div className="main__audio">
            <AudioPlayer src={birdsData[this.props.currentSection][this.props.correctAnswer].audio}
            autoPlayAfterSrcChange ={false}
      onPlay={e => console.log("onPlay")}/>
          </div>
        </div>
  
      </div>
    }
  }