import React, { Component } from 'react'
import PeopleDetailsCell from './PeopleDetailsCell'
import Success from './Success'
import TakenDetailsCell from './TakenDetailsCell'
import Confirmation from './Confirmation'
import TimeDate from './TimeDate'

export default class Parent extends Component {
  state = {
    step: 1,
    klantId: '',
    userId: '',
    taken: '',
    start: '',
    end: ''
  }

  vasteTaken = ''

  prevStep = () => {
    const {step} = this.state;
    this.setState({step: step - 1})
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value })
  }

  handleTaken = (taken) => {
    this.setState({ taken: taken})
  }

  handleKlant = input => e => {
    this.vasteTaken = klant.taken
  }


  render() {
    const { step } = this.state;
    const { klantId, userId, taken, start, end } = this.state;
    const values = { klantId, userId, taken, start, end }

    switch(step) {
      case 1:
        return(
          <PeopleDetailsCell
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            handleKlant={ this.handleKlant }
            values={ values }
          />
        )
      case 2:
        return(
          <TakenDetailsCell
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            handleTaken={ this.handleTaken }
            vasteTaken={ this.vasteTaken }
            values={ values }
          />
        )
      case 3:
        return(
          <TimeDate
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 4:
        return(
          <Confirmation
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            values={ values }
          />
        )
      case 5:
        return(
          <Success/>
        )
      default:
    }
  }
}