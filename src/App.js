import React, { Component } from 'react';
import _ from 'lodash';

import DiceRoller from './DiceRoller';
import * as dice from './Dice';
import AddDieButton from './AddDieButton';

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
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <DiceRoller title="ATTACK" colors={dice.ATTACK_DICE} />
        <DiceRoller title="DEFENSE" colors={dice.DEFENSE_DICE} />
      </div>
    )
  }
}

export default App;
