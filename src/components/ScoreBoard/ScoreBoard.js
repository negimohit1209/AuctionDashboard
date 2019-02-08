import React from 'react';
import Score from './Score';
import classes from './ScoreBoard.module.css';

const ScoreBoard = (props) => {
let arr = [0,0,0,0];
let num = props.score;
let strnum = num.toString();
let j = 0
for(let i=strnum.length-1; i>=0 ; i-- ){
    arr[j++] = parseInt(strnum[i]);
}
arr.reverse();
  return (
    <div className={classes.scoreboard}>
      {arr.map((ele, index) => {
          return(
              <Score score={ele} key={index}/>
          )
      })}
    </div>
  )
}

export default ScoreBoard

