import React from 'react';
import './App.css';
import { render } from 'react-dom';
import Sections from './sections/sections';
import Header from './header/header';
import Question from './question/question';
import AnswerOptions from './options/options';
import CurrentBird from './bird/currentbird';
import GameOver from './gameOver/gameOver'



class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      currentBird:-1,
      currentSection:0,
      score:0,
      gettingScore:5,
      correctAnswer: Math.floor(Math.random() * 6),
      answeredCorrect: false,
      stopMusic: false,
      end:false,
    }
  }


  handleClick(value,number){
    if(value){
      this.setState({
        answeredCorrect:true,
        score: this.state.score+ this.state.gettingScore,

      });
    }
    else{
      this.setState({
        gettingScore: this.state.gettingScore-1,
      });
     
    }
    this.setState({
      currentBird:number,
    })
    console.log(this.state);
    this.handleClick=this.handleClick.bind(this);
  }

  nextLevel(){

    if(this.state.currentSection===5){
      this.setState({
        end:true,
      })
    }
    else{
    if(this.state.answeredCorrect){
    this.setState({
      currentSection:this.state.currentSection+1,
      currentBird:-1,
      correctAnswer: Math.floor(Math.random() * 6),
      gettingScore:5,
      answeredCorrect:false,
    });
    document.querySelectorAll('.wrong-answer').forEach(n => n.classList.remove('wrong-answer'));
    document.querySelectorAll('.right-answer').forEach(n => n.classList.remove('right-answer'))
    document.querySelector('.active-section').classList.remove('active-section');
    document.querySelector('.sections').childNodes[this.state.currentSection+1].classList.add('active-section');
    
  }
}
  this.nextLevel=this.nextLevel.bind(this);
  }

  startAgain(){
    this.setState({
      currentSection:0,
      currentBird:-1,
      correctAnswer: Math.floor(Math.random() * 6),
      gettingScore:5,
      answeredCorrect:false,
      score:0,
      end:false,
    });
    this.startAgain=this.startAgain.bind(this);
  }

  
 render(){
   let gameOver;
    if(this.state.end) return <GameOver startAgain={()=>this.startAgain()} score={this.state.score}></GameOver>;
    else 
     return <>
     <Header score={this.state.score}></Header>
     <Sections></Sections>
     <Question currentSection={this.state.currentSection} currentBird={this.state.currentBird} correctAnswer={this.state.correctAnswer} answeredCorrect={this.state.answeredCorrect}></Question>
     <div className="wrapper"><AnswerOptions updateData={(value,number)=>this.handleClick(value,number)} currentSection={this.state.currentSection} currentBird={this.state.currentBird} correctAnswer={this.state.correctAnswer} answeredCorrect={this.state.answeredCorrect}></AnswerOptions>
     <CurrentBird currentSection={this.state.currentSection} currentBird={this.state.currentBird}></CurrentBird>
     </div>
     <button className="nextlevel" onClick={()=>this.nextLevel()}>Next Level</button>
     </>
    }
  
}

export default App;
