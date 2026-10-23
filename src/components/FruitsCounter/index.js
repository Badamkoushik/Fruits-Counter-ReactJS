import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  clickedMango = () => {
    this.setState(prevstate => ({
      mangoCount: prevstate.mangoCount + 1,
    }))
  }

  clickedBanana = () => {
    this.setState(prevState => ({
      bananaCount: prevState.bananaCount + 1,
    }))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">
            Bob ate <span className="counter-value">{mangoCount}</span> mangoes
            <span className="counter-value"> {bananaCount}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="first-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button
                type="button"
                className="btn first-button"
                onClick={this.clickedMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="second-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <button
                type="button"
                className="btn second-button"
                onClick={this.clickedBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
