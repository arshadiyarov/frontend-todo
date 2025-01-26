import {
  ChangeEvent,
  Dispatch,
  FocusEvent,
  SetStateAction,
  useRef,
} from "react";
import { Colon } from "../../../shared/ui/Colon";
import { TimeType } from "../povider/TimerProvider";

interface SetTimerProps {
  time: TimeType;
  setTime: Dispatch<SetStateAction<TimeType>>;
}

export const SetTimer = ({ time, setTime }: SetTimerProps) => {
  const minutesInput = useRef<HTMLInputElement>(null);
  const secondsInput = useRef<HTMLInputElement>(null);

  const handleInputChange = (value: string, key: keyof TimeType): void => {
    if (!/^\d*$/.test(value)) return;

    setTime((prev) => {
      const updatedTime = { ...prev };

      if (key === "hours") {
        if (value.length <= 2) updatedTime.hours = value;
        if (value.length === 2) minutesInput.current?.focus();
      } else if (key === "minutes") {
        if (value.length <= 2) {
          if (value[0] >= "6" && value.length > 1) return prev;
          updatedTime.minutes = value;
        }
        if (value.length === 2) secondsInput.current?.focus();
      } else if (key === "seconds") {
        if (value.length <= 2) {
          if (value[0] >= "6" && value.length > 1) return prev;
          updatedTime.seconds = value;
        }
      }

      return updatedTime;
    });
  };

  const handleBlur = (value: string, key: keyof TimeType): void => {
    setTime((prev) => {
      const updatedTime = { ...prev };
      if (value === "" || value.length === 1) {
        updatedTime[key] = value.padStart(2, "0");
      }
      return updatedTime;
    });
  };

  return (
    <div className="flex items-center justify-center text-center">
      <div className="w-32">
        <input
          type="text"
          value={time.hours}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e.target.value, "hours")
          }
          onBlur={(e: FocusEvent<HTMLInputElement>) =>
            handleBlur(e.target.value, "hours")
          }
          maxLength={2}
          placeholder="00"
          className="w-full text-center text-7xl outline-none"
        />
      </div>

      <Colon />

      <div className="w-32">
        <input
          type="text"
          ref={minutesInput}
          value={time.minutes}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e.target.value, "minutes")
          }
          onBlur={(e: FocusEvent<HTMLInputElement>) =>
            handleBlur(e.target.value, "minutes")
          }
          maxLength={2}
          placeholder="00"
          className="w-full text-center text-7xl outline-none"
        />
      </div>

      <Colon />

      <div className="w-32">
        <input
          type="text"
          ref={secondsInput}
          value={time.seconds}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e.target.value, "seconds")
          }
          onBlur={(e: FocusEvent<HTMLInputElement>) =>
            handleBlur(e.target.value, "seconds")
          }
          maxLength={2}
          placeholder="00"
          className="w-full text-center text-7xl outline-none"
        />
      </div>
    </div>
  );
};
