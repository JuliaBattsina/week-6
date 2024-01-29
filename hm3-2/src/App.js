import {Component} from "react";


export default class App extends Component {
  state = {
    count: 100
  }
  render () {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick = { () => this.setState({count: this.state.count - 5 })}>Click</button>
      </div>
    )
  }
}

