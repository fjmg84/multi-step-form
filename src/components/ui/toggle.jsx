import clsx from "clsx";
import { useUserStore } from "../../store/config";

export function CToggle() {
  const { data, updatePlan } = useUserStore();
  const {
    plan: { monthly },
  } = data;

  return (
    <>
      <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          defaultChecked={monthly}
          onChange={() => updatePlan({ monthly: !monthly })}
          className="sr-only"
        />
        <span
          className={`label flex items-center text-sm font-medium ${clsx({
            "text-marine-blue": monthly,
          })} text-cool-gray`}
        >
          Monthly
        </span>
        <span
          className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            monthly ? "bg-marine-blue" : "bg-light-blue"
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
              !monthly ? "translate-x-[28px]" : ""
            }`}
          ></span>
        </span>
        <span
          className={`label flex items-center text-sm font-medium ${clsx({
            "text-marine-blue": !monthly,
          })} text-cool-gray`}
        >
          Yearly
        </span>
      </label>
    </>
  );
}
