import React, {Component} from 'react';
import _ from 'lodash';

import * as Dice from './Dice';
import AddDieButton from './AddDieButton';

type Props = {

};

export default class DiceRoller extends Component {

  constructor() {
    super();

    this.state = {
      selectedAttackDice: {},
      rolledAttackDice: [],
    };
  }
  addDie(color: string): void {
    let selectedAttackDice = this.state.selectedAttackDice;
    selectedAttackDice[color] = 1 + (selectedAttackDice[color] || 0);
    this.setState({selectedAttackDice});
  }
  clearDice(): void {
    this.setState({selectedAttackDice: {}, rolledAttackDice: []});
  }
  randomIndex(): number {
    return _.random(0, 5, false);
  }
  rollDice(): void {
    const counts = this.state.selectedAttackDice;
    const rolledAttackDice = _.flatMap(this.props.colors, color => {
      const count = counts[color];
      if (!count) { return []; }
      return _.times(count, i => {
        return {color, index: this.randomIndex()};
      });
    });
    this.setState({rolledAttackDice});
  }
  rerollDieIndex(index: number): void {
    if (index >= this.state.rolledAttackDice.count) {
      return;
    }
    let {rolledAttackDice} = this.state;
    rolledAttackDice[index].index = this.randomIndex();
    this.setState({rolledAttackDice});
  }
  render() {
    let selections = _.flatMap(this.props.colors, (color) => {
      const count = this.state.selectedAttackDice[color] || 0;
      return _.times(count, (i) => {
        return <AddDieButton key={`${color}${i}`} color={color}/>;
      });
    });
    let currentBar = (
      <div className="currentBar">
        <div className="selectionBar">{selections}</div>
        <button className="rollButton" onClick={() => this.rollDice()}>Roll</button>
        <button className="clearButton" onClick={() => this.clearDice()}>Clear</button>
      </div>
    );
    let attackDieButtons = this.props.colors.map(color => {
      return <AddDieButton key={color} color={color} onClick={() => this.addDie(color)} />;
    });
    let controlsBar = (
      <div>{attackDieButtons}</div>
    );
    let attackResults = this.state.rolledAttackDice.map((roll, i) => {
      return <img
        key={i}
        className="rollResult"
        src={`images/${Dice[roll.color].imagePrefix}${roll.index + 1}.jpg`}
        onClick={() => this.rerollDieIndex(i)}/>;
    });
    let results = <div className="rollResults">{attackResults}</div>;
    return (
      <div>
        <h1 className="diceRollerTitle">{this.props.title}</h1>
        {currentBar}
        {controlsBar}
        {results}
      </div>
    );
  }
}
