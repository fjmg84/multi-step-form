import { useUserStore } from "../store/config";

export function Steps({ step, item, status }) {
  const { gotoStep } = useUserStore();

  return (
    <button
      className={`h-10 w-10 flex items-center justify-center font-ubuntu-regular text-magnolia text-xl border-2 border-magnolia transition-all duration-300 ease-in-out rounded-full ${
        step === item ? "bg-magnolia text-marine-blue" : "bg-transparent"
      }`}
      onClick={() => gotoStep(item)}
      disabled={!status.includes(item) ? true : false}
    >
      {item}
    </button>
  );
}
