import React, {Component} from 'react';

class Timer extends Component{
   minutes = this.props.minutes === '0' ? 0 : this.props.minutes; 
   seconds = this.props.seconds === '0' ? 0 : this.props.seconds;
   state = {
      minutes: this.minutes,
      seconds: this.seconds
  }

  componentDidMount() {
      this.myInterval = setInterval(() => {
          const { seconds, minutes } = this.state

          if (seconds > 0) {
              this.setState(({ seconds }) => ({
                  seconds: seconds - 1
              }))
          }
          if (seconds === 0) {
              if (minutes === 0) {
                  clearInterval(this.myInterval)
              } else {
                  this.setState(({ minutes }) => ({
                      minutes: minutes - 1,
                      seconds: 59
                  }))
              }
          } 
      }, 1000)
  }

  componentWillUnmount() {
      clearInterval(this.myInterval)
  }

  render() {
      const { minutes, seconds } = this.state
      return (
          <div>
              { minutes === 0 && seconds === 0
                  ? <p>Patience level 100. Good! :)</p>
                  : <p>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
              }
          </div>
      )
  }
}

export default Timer;