import React, { Component } from 'react';
import _ from 'lodash';

import * as dice from './Dice';

import './App.css';

const RESULT_ORDER = ['damage', 'surge', 'accuracy', 'block', 'evade', 'dodge'];

const RESULT_TO_SYMBOL = {
  damage: '💥',
  //damage: '💢',
  surge: '⚡',
  block: '▲',
  evade: '⍉',
  dodge: '⦻',
};

function getFaceDescription(face) {
  const parts = RESULT_ORDER
    .map(result => {
      const count = face[result];
      if (!count) {
        return null;
      }
      if (result === 'accuracy') {
        return `${count}`;
      }
      return _.times(count, () =>  RESULT_TO_SYMBOL[result])
        .join('');
    }).filter(x => x);
  if (parts.length === 0) {
    return '_';
  }
  return parts.join('');
}

class App extends Component {
  render() {
    const rows2 = dice.ORDER.map(key => {
      const die = dice[key];
      const faces = die.faces.map((face, i) => {
        const desc = getFaceDescription(face);
        console.log(desc);
        return (
          <span style={{display: 'inline-block', padding: 5}} >
            <img style={{margin: 'auto'}} src={`images/${die.imagePrefix}${i+1}.jpg`} alt="" />
            <br />
            <span style={{margin: 'auto'}}>{desc}</span>
          </span>
        );
      });
      return <div>{faces}</div>;
    });
    return (
      <div>
        {rows2}
      </div>
    );
  }
}

export default App;
