import React from 'react';
import "./style.css";
const Score = props => (
    
    <header className="score">
        <div className="row">
            <div className="col-md-6 col-left"><h2>{props.title}</h2></div>
            <div className="col-md-3 col-right"><h5>High Score: {props.topScore}</h5></div>
            <div className="col-md-3 col-right"><h5>Score: {props.score}</h5></div>
        </div>
        <div className="row">
            <div className="cold-md-12 col-right">
                <h6>Click on a character to start, try not to click on the same character more than once.</h6>
            </div>
        </div>
    </header>
)
export default Score;

