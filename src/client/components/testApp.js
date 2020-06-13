import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { data: '' };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  callBackendAPI = async () => {
    const response = await fetch('/secret');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="../assets/logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}
export default App;

/*
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {CommonAction, TestAction, Incrementer, Decrementer} from '../actions/testAction'

export class App extends Component {
  constructor(props) {
    super(props);
    this.incrementer = this.incrementer.bind(this);
    this.decrementer = this.decrementer.bind(this);
  }

  componentWillMount() {
    this.props.CommonAction();
    this.props.TestAction();
  }

  incrementer () {
    this.props.Incrementer();
  }

  decrementer () {
    this.props.Decrementer();
  }

  render() {
    return (
      <React.Fragment>
        <div>
          App Loads Here
        </div>
        <div className={"inc-dec"}>
          <button onClick={this.decrementer}>-</button>
          <i className={"number"}>{this.props.state.number}</i>
          <button onClick={this.incrementer}>+</button>
        </div>
        <img className={"kakar"} src="../assets/dummy.jpg" alt="Ganpat Kakar"/>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  state: state
})

const mapDispatchToProps = {
  CommonAction,
  TestAction,
  Incrementer,
  Decrementer
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
*/