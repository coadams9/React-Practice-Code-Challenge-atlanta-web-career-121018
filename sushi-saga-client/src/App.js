import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    index: 0,
    money: 100,
    eaten: [],
    ate: 0
  }

  chooseFour = () => {
    this.setState({
      index: this.state.index + 4
    })
  }

  fourToShow(){
    return this.state.sushis.slice(this.state.index, this.state.index + 4)
  }

  eaten = (sushi) => {
    if (this.state.money - this.state.ate <= 0) {
      console.log('out of money')
    } else {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        ate: sushi.price + this.state.ate
      })
    }
  }


  componentDidMount(){
    fetch('http://localhost:3000/sushis')
    .then(res => res.json())
    .then(data => this.setState({ sushis: data }))
  }

  render() {

    // console.log(this.state.sushis)
    // console.log(this.state.eaten)
    console.log('money:', this.state.money)
    console.log('ate:', this.state.ate)
    return (
      <div className="app">
        <SushiContainer  chooseFour={this.chooseFour} sushis={this.fourToShow()} eaten={this.eaten} eatenArr={this.state.eaten}/>
        <Table money={this.state.money} ate={this.state.ate} eatenArr={this.state.eaten}/>
      </div>
    );
  }
}

export default App;
