import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { TimerContext } from "./TimerContext";
import { usePreventReloadWarning } from "../../../shared/hooks/usePreventReloadWrning";

export type TimeType = {
  hours: string;
  minutes: string;
  seconds: string;
};

export type StepLabelType = "init" | "run";

export interface StepType {
  label: StepLabelType;
  count: number;
}

export interface TimerContextType {
  focusTime: TimeType;
  setFocusTime: Dispatch<SetStateAction<TimeType>>;
  restTime: TimeType;
  setRestTime: Dispatch<SetStateAction<TimeType>>;
  step: StepType;
  setStep: Dispatch<SetStateAction<StepType>>;
  sessions: number;
  setSessions: Dispatch<SetStateAction<number>>;
  currentSession: number;
  isTimerActive: boolean;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  remainingTime: number;
}

const saveFocusTimeToLocalStorage = (focusTime: TimeType) => {
  localStorage.setItem("FOCUS_TIME", JSON.stringify(focusTime));
};

const saveRestTimeToLocalStorage = (restTime: TimeType) => {
  localStorage.setItem("REST_TIME", JSON.stringify(restTime));
};

const saveSessionsToLocalStorage = (sessions: number) => {
  localStorage.setItem("SESSIONS", String(sessions));
};

const getTimeFromLocalStorage = (
  key: string,
  defaultValue: TimeType
): TimeType => {
  const storedTime = localStorage.getItem(key);
  if (storedTime) {
    try {
      return JSON.parse(storedTime) as TimeType;
    } catch (error) {
      console.error(`Error parsing ${key} from localStorage:`, error);
    }
  }
  return defaultValue;
};

export const TimerProvider = ({ children }: PropsWithChildren) => {
  const [focusTime, setFocusTime] = useState<TimeType>(() =>
    getTimeFromLocalStorage("FOCUS_TIME", {
      hours: "00",
      minutes: "25",
      seconds: "00",
    })
  );
  const [restTime, setRestTime] = useState<TimeType>(() =>
    getTimeFromLocalStorage("REST_TIME", {
      hours: "00",
      minutes: "05",
      seconds: "00",
    })
  );
  const [step, setStep] = useState<StepType>({
    label: "init",
    count: 1,
  });
  const [sessions, setSessions] = useState<number>(() => {
    const storedSessions = localStorage.getItem("SESSIONS");
    return storedSessions ? parseInt(storedSessions, 10) : 4;
  });
  const [currentSession, setCurrentSession] = useState<number>(1);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);

  usePreventReloadWarning(step.label === "run");

  const convertTimeToSeconds = (time: TimeType): number => {
    const hours = parseInt(time.hours) || 0;
    const minutes = parseInt(time.minutes) || 0;
    const seconds = parseInt(time.seconds) || 0;

    return hours * 3600 + minutes * 60 + seconds;
  };

  const convertSecondsToTime = (seconds: number): TimeType => {
    const hours = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");

    return { hours, minutes, seconds: secs };
  };

  const [remainingTime, setRemainingTime] = useState<number>(
    convertTimeToSeconds(focusTime)
  );

  const handleStartTimer = () => {
    setIsTimerActive(true);
  };

  const handlePauseTimer = () => {
    setIsTimerActive(false);
  };

  const handleResetTimer = () => {
    setIsTimerActive(false);
    setRemainingTime(convertTimeToSeconds(focusTime));
    setStep({ label: "run", count: 1 });
    setCurrentSession(1);
  };

  const handleSwitchPhase = () => {
    if (step.label === "run") {
      if (step.count === 1) {
        setStep({ label: "run", count: 2 });
        setRemainingTime(convertTimeToSeconds(restTime));
      } else {
        if (currentSession < sessions) {
          setCurrentSession((prev) => prev + 1);
          setStep({ label: "run", count: 1 });
          setRemainingTime(convertTimeToSeconds(focusTime));
        } else {
          handleResetTimer();
          return;
        }
      }

      setIsTimerActive(true);
    }
  };

  useEffect(() => {
    const _focusTime = localStorage.getItem("FOCUS_TIME");
    if (_focusTime) {
      try {
        setFocusTime(JSON.parse(_focusTime));
      } catch (error) {
        console.error("Invalid FOCUS_TIME format in localStorage:", error);
      }
    }

    const _restTime = localStorage.getItem("REST_TIME");
    if (_restTime) {
      try {
        setRestTime(JSON.parse(_restTime));
      } catch (error) {
        console.error("Invalid REST_TIME format in localStorage:", error);
      }
    }

    const _sessions = localStorage.getItem("SESSIONS") || "4";
    setSessions(+_sessions);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isTimerActive) {
      timer = setInterval(() => {
        setRemainingTime((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            clearInterval(timer!);
            handleSwitchPhase();
            return 0;
          }
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isTimerActive, handleSwitchPhase]);

  useEffect(() => {
    if (!isTimerActive) {
      if (step.label === "run" && step.count === 1) {
        setFocusTime(convertSecondsToTime(remainingTime));
      } else if (step.label === "run" && step.count === 2) {
        setRestTime(convertSecondsToTime(remainingTime));
      }
    }
  }, [remainingTime, isTimerActive]);

  useEffect(() => {
    if (step.label === "init") {
      setRemainingTime(convertTimeToSeconds(focusTime));
    }
  }, [focusTime, step.label]);

  useEffect(() => {
    if (step.label === "init") {
      setRemainingTime(convertTimeToSeconds(restTime));
    }
  }, [restTime, step.label]);

  useEffect(() => {
    saveFocusTimeToLocalStorage(focusTime);
  }, [focusTime]);

  useEffect(() => {
    saveRestTimeToLocalStorage(restTime);
  }, [restTime]);

  useEffect(() => {
    saveSessionsToLocalStorage(sessions);
  }, [sessions]);

  return (
    <TimerContext.Provider
      value={{
        focusTime,
        setFocusTime,
        restTime,
        setRestTime,
        step,
        setStep,
        sessions,
        setSessions,
        currentSession,
        isTimerActive,
        startTimer: handleStartTimer,
        pauseTimer: handlePauseTimer,
        resetTimer: handleResetTimer,
        remainingTime,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
