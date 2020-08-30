import React from 'react';
import './options.css';
import birdsData from '../birdsdata'


export default class AnswerOptions extends React.Component{

 
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
          {birdsData[this.props.currentSection][i].name}
        </div>)
        }
        return <div className="options">
          
            {arr}
              
        </div>
      }
    }


    function sum(a){
      let currentSum=a;
      return function sf(b){
        currentSum+=b;
        if(b){
          return sf(b);
        }
        else return currentSum;
      }
    }