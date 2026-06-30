import { useEffect, useState } from "react";
import pt from "../../../../config/locales/pt.json";
import en from "../../../../config/locales/en.json";
import { useLanguageContext } from "../../../../context/LanguageContext";

const workflowActions = [
  {
    time: 10,
  },
  {
    time: 7,
  },
  {
    time: 5,
  },
  {
    time: 11,
  },
  {
    time: 3,
  },
];

const initialTimers = workflowActions.map(() => 0);

export const PipelineUi = () => {
  const { language } = useLanguageContext();
  const languegeRender = language === "en" ? en : pt;
  const content = languegeRender.webkitUi;
  const [timers, setTimers] = useState(initialTimers);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimers((currentTimers) => {
        const isWorkflowDone = workflowActions.every(
          (action, index) => currentTimers[index] >= action.time
        );

        if (isWorkflowDone) {
          return currentTimers;
        }

        return currentTimers.map((timer, index) =>
          Math.min(timer + 1, workflowActions[index].time)
        );
      });
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const isWorkflowDone = workflowActions.every(
      (action, index) => timers[index] >= action.time
    );

    if (!isWorkflowDone) {
      return;
    }

    const restartId = window.setTimeout(() => {
      setTimers(initialTimers);
    }, 2000);

    return () => {
      window.clearTimeout(restartId);
    };
  }, [timers]);

  return (
    <div className="relative">
      <div className="z-[1] relative flex flex-col gap-sm bg-[#151b23] border border-[#656F7E] rounded-md p-md">
        {workflowActions.map((action, index) => {
          const label = content.pipelineActions[index];
          const elapsedTime = timers[index];
          const isDone = elapsedTime >= action.time;

          return (
            <div
              key={label}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-xs"
            >
              {isDone ? (
                <svg data-component="Octicon" width="16" height="16" className="octicon octicon-check-circle-fill fill-[#3fb950]" aria-label={content.pipelineCompletedLabel} viewBox="0 0 16 16" version="1.1" role="img">
                  <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm3.78-9.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018L6.75 9.19 5.28 7.72a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l2 2a.75.75 0 0 0 1.06 0Z"></path>
                </svg>
              ) : (
                <svg aria-label={content.pipelineRunningLabel} width="16px" height="16px" fill="none" viewBox="0 0 16 16" className="animate-spin" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" stroke="#f59e0b" strokeWidth="2" d="M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9Z" opacity=".5"></path>
                  <path fill="#f59e0b" fillRule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" clipRule="evenodd"></path>
                  <path fill="#f59e0b" d="M14 8a6 6 0 0 0-6-6V0a8 8 0 0 1 8 8h-2Z"></path>
                </svg>
              )}

              <span className="min-w-0 truncate text-sm font-normal text-white">
                {label}
              </span>
              <span className="text-xs text-white/55">
                {elapsedTime}s
              </span>
            </div>
          );
        })}
      </div>
      <div
        className={[
          "absolute bottom-0 right-[-7px] top-0 z-[2] m-auto size-[16px] rounded-full bg-[linear-gradient(90deg,#151b23_0%,#151b23_50%,#656F7E_50%,#656F7E_100%)]",
          "before:absolute before:left-[1px] before:top-[1px] before:size-[14px] before:rounded-full before:bg-[#151b23] before:transition-colors before:duration-[120ms] before:ease-out before:content-['']",
          "after:absolute after:left-1 after:top-1 after:size-2 after:rounded-full after:bg-[#656c76] after:transition-colors after:duration-[120ms] after:ease-out after:content-['']",
        ].join(" ")}
      />
      <span className="absolute bottom-0 right-[-27px] z-[0] top-0 m-auto h-[1.5px] w-[50px] bg-[#656F7E]"/>
    </div>
  );
};
