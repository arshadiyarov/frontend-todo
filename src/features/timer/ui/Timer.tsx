import { Colon } from "../../../shared/ui/Colon";
import { useTimer } from "../povider/useTimer";

export const Timer = () => {
  const { remainingTime } = useTimer();

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");

    return { hours, minutes, seconds };
  };

  const currentTime = formatTime(remainingTime);

  return (
    <div className="flex items-center justify-center text-center">
      <div className="w-32">
        <div className="w-full text-center text-7xl">{currentTime.hours}</div>
      </div>

      <Colon />

      <div className="w-32">
        <div className="w-full text-center text-7xl">{currentTime.minutes}</div>
      </div>

      <Colon />

      <div className="w-32">
        <div className="w-full text-center text-7xl">{currentTime.seconds}</div>
      </div>
    </div>
  );
};
