import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hours: 0, minutes: 0, seconds: 0 };
  }

  tick() {
    this.setState((state) => ({
      minutes: state.seconds >= 59 ? state.minutes + 1 : state.minutes,
      seconds: state.seconds < 59 ? state.seconds + 1 : 0,
    }));
    this.setState((state) => ({
      hours: state.minutes > 59 ? state.hours + 1 : state.hours,
      minutes: state.minutes <= 59 ? state.minutes : 0,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="timer">
        {this.state.hours.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
        :
        {this.state.minutes.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
        :
        {this.state.seconds.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </div>
    );
  }
}

export default Timer;
