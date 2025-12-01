import { useEffect, useMemo, useState } from 'react';
import { FIGMA_IMAGES, TIMER_ADJUSTMENTS } from '../data/figmaAssets';

const MAX_SECONDS = 60 * 60 * 12; // 12 hours is plenty for a single focus block

export function FocusTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const { addOptions, removeOptions } = useMemo(() => {
    const addOptions = TIMER_ADJUSTMENTS.filter((item) => item.direction === 'add');
    const removeOptions = TIMER_ADJUSTMENTS.filter((item) => item.direction === 'remove');
    return { addOptions, removeOptions };
  }, []);

  const handleAdjust = (delta: number) => {
    setSeconds((prev) => {
      const next = Math.min(MAX_SECONDS, Math.max(0, prev + delta));
      return next;
    });
  };

  const formattedTime = useMemo(() => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${minutes} : ${secs}`;
  }, [seconds]);

  const handleStartPause = () => {
    if (isRunning) {
      setIsRunning(false);
      return;
    }
    if (seconds > 0) {
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  useEffect(() => {
    if (!isRunning) {
      return;
    }
    const intervalId = window.setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          window.clearInterval(intervalId);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(intervalId);
  }, [isRunning]);

  useEffect(() => {
    if (seconds === 0) {
      setIsRunning(false);
    }
  }, [seconds]);

  const startButtonDisabled = seconds === 0 && !isRunning;
  const resetDisabled = seconds === 0 && !isRunning;

  return (
    <section className="page focus">
      <div className="focus__adjustments">
        {addOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            className="focus-card"
            onClick={() => handleAdjust(option.seconds)}
          >
            <span className="focus-card__title">{option.title}</span>
            <span className="focus-card__value">{option.display}</span>
          </button>
        ))}
      </div>

      <div className="focus__timer-panel">
        <h2 className="section-title">Focus Timer</h2>
        <div className="focus__stopwatch">
          <img src={FIGMA_IMAGES.stopwatch} alt="Stopwatch illustration" />
        </div>
        <p className={`focus__time ${isRunning ? 'is-running' : ''}`} aria-live="polite">
          {formattedTime}
        </p>
        <div className="focus__controls">
          <button
            type="button"
            className="focus__control-button focus__control-button--primary"
            onClick={handleStartPause}
            disabled={startButtonDisabled}
          >
            {isRunning ? 'Pause Timer' : 'Start Timer'}
          </button>
          <button
            type="button"
            className="focus__control-button"
            onClick={handleReset}
            disabled={resetDisabled}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="focus__adjustments">
        {removeOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            className="focus-card focus-card--remove"
            onClick={() => handleAdjust(-option.seconds)}
          >
            <span className="focus-card__title">{option.title}</span>
            <span className="focus-card__value">{option.display}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

