import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import birdsData from './birdsdata'
import AudioPlayer from 'react-h5-audio-player'



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

//   updateData = () => {
//     this.setState({ score: 52 });
//     console.log('sabaka');
//     console.log(this.state.score);
//     this.updateData=this.updateData.bind(this);
//  }

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
    if(this.state.answeredCorrect){
      if(this.state.section===4){
        this.setState({
          end:true,
        })
      }
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
  this.nextLevel=this.nextLevel.bind(this);
  }

  
 render(){
    if(this.state.end){
    return <>
    <h1>That's it. Your score is {this.state.score}</h1>
    <h3>Reload page to play again</h3>
    </>
    }
    else{
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
  
}

function Sections(props){
  return <div className="sections">
    <div className="section active-section" >Разминка</div>
    <div className="section">Воробьиные</div>
    <div className="section">Лесные птицы</div>
    <div className="section">Певчие птицы</div>
    <div className="section">Хищные птицы</div>
    <div className="section">Морские птицы</div>
  </div>
}

function Header(props) {
  return <div className="header">

    <div className="header_logo"><img className="logo" src="https://f1.pngfuel.com/png/659/658/411/bird-beak-logo-perching-bird-songbird-png-clip-art.png" alt="logo"></img></div>
    <div className="header__score">
Score: <span>{props.score}</span>
    </div>
    <div className="header__questions"></div>
  </div>
}
// const api_url = await fetch(apiLink);
// const data= await api_url.json();
// const tempData=data.list[0];
class Question extends React.Component{
 

  
  render(){
    let birdName='********';
    let birdImg='https://vignette.wikia.nocookie.net/angrybirdsfanon/images/7/7c/New_Version.jpg/revision/latest/scale-to-width-down/340?cb=20121008181024'
    if(this.props.answeredCorrect) {birdName=birdsData[this.props.currentSection][this.props.correctAnswer].name;
      birdImg=birdsData[this.props.currentSection][this.props.correctAnswer].image;
    }

    return <div className="question">
      <div className="question__img"><img src={birdImg} alt="bird"></img></div>
      <div className="question__main">
        <div className="main_name">{birdName}</div>
        <div className="main__audio">
          <AudioPlayer src={birdsData[this.props.currentSection][this.props.correctAnswer].audio}
    onPlay={e => console.log("onPlay")}/>
        </div>
      </div>

    </div>
  }
}

class AnswerOptions extends React.Component{

 
answerClicked(e){
  if(e.target.classList.length<2 && !this.props.answeredCorrect){
  let correct=false;
  if(e.target.textContent===birdsData[this.props.currentSection][this.props.correctAnswer].name){
    e.target.classList.add('right-answer');
    correct=true;
   
  }
  else {
    e.target.classList.add('wrong-answer');
 
    
  }
 
  var child = e.target
var parent = child.parentNode;
var index = Array.prototype.indexOf.call(parent.children, child);
console.log(index);
  this.props.updateData(correct,index);
}
}

  render(){
    
    let arr=[];
    for(let i=0;i<6;i++){
      arr.push(<div onClick={(e)=>this.answerClicked(e)}  className="option" key={i}>
      <div className="option-indicator"></div>
      {birdsData[this.props.currentSection][i].name}
    </div>)
    }
    return <div className="options">
      
        {arr}
          
    </div>
  }
}

class CurrentBird extends React.Component{
  render(){
    if(this.props.currentBird!==-1){
      let dataBird=birdsData[this.props.currentSection][this.props.currentBird];
    return <div className="current__bird">
      <div className="main-information">
        <img className="main-image" src={dataBird.image} alt='fasg'></img>
        <div className="main-information_wrapper">
          <div className="main-name">{dataBird.name}</div>
   <div className="main-family">{dataBird.species}</div>
          <div className="main-audio"><AudioPlayer autoPlay={false} src={dataBird.audio}/></div>
        </div>
      </div>
  <div className="description">{dataBird.description}</div>
    </div>
    }
     else return <></>
  }

}

export default App;
