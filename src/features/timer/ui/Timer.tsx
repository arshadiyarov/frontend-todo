import { Component } from "react";
import { Colon } from "../../../shared/ui/Colon";
import { TimerContext } from "../povider/TimerContext";

class Timer extends Component {
  formatTime(totalSeconds: number) {
    const hours = Math.floor(totalSeconds / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");

    return { hours, minutes, seconds };
  }

  render() {
    return (
      <TimerContext.Consumer>
        {(context) => {
          if (!context) {
            return <div>Error: TimerContext is not available</div>;
          }

          const { remainingTime } = context;
          const { hours, minutes, seconds } = this.formatTime(remainingTime);

          return (
            <div className="flex items-center justify-center text-center">
              <div className="w-32">
                <div className="w-full text-center text-7xl">{hours}</div>
              </div>

              <Colon />

              <div className="w-32">
                <div className="w-full text-center text-7xl">{minutes}</div>
              </div>

              <Colon />

              <div className="w-32">
                <div className="w-full text-center text-7xl">{seconds}</div>
              </div>
            </div>
          );
        }}
      </TimerContext.Consumer>
    );
  }
}

export default Timer;
