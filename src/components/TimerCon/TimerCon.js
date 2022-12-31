import React, { Component } from "react";
import "./TimerCon.css";

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.count = this.count.bind(this);
    this.state = {
      days: 0,
      minutes: 0,
      hours: 0,
      secounds: 0,
      time_up: "",
    };
    this.x = null;
    this.deadline = null;
  }
  count() {
    var now = new Date().getTime();

    var t = this.deadline - now;

    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    this.setState({ days, minutes, hours, seconds });
    if (t < 0) {
      clearInterval(this.x);
      this.setState({
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
      });
    }
  }
  componentDidMount() {
    this.deadline = new Date("2023-11-28").getTime();

    this.x = setInterval(this.count, 1000);
  }

  render() {
    const { days, seconds, hours, minutes } = this.state;
    return (
      <div className="navclockdiv">
        <div className="clock-item">
          <span className="days" id="day">
            {days}
          </span>
          <div className="smalltext">Days</div>
        </div>
        <div className="clock-item">
          <span className="hours" id="hour">
            {hours}
          </span>
          <div className="smalltext">Hours</div>
        </div>
        <div className="clock-item">
          <span className="minutes" id="minute">
            {minutes}
          </span>
          <div className="smalltext">Minutes</div>
        </div>
        <div className="clock-item">
          <span className="seconds" id="second">
            {seconds}
          </span>
          <div className="smalltext">Seconds</div>
        </div>
      </div>
    );
  }
}

export default CountDown;
