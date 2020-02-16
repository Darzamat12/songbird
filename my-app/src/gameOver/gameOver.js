import React from 'react';
import './gameOver.css';

export default function GameOver(props){
    return <div className="game-over">
        <div className="game-over_text">
            <h1>Поздравляем</h1>
            Вы набрали {props.score} из 30 возможных баллов
        </div>
        <button onClick ={()=>{props.startAgain()}}className="start-again">Попробовать еще раз!</button>
    </div>
}