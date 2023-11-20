// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  subClicked = () => {
    this.setState({isSubscribed: false})
  }

  subClick = () => {
    this.setState({isSubscribed: true})
  }

  buttonStatus = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      return <button onClick={this.subClicked}>Subscribe</button>
    }
    return <button onClick={this.subClick}>Subscribed</button>
  }

  render() {
    return (
      <div className="main-bg">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        {this.buttonStatus()}
      </div>
    )
  }
}

export default Welcome
