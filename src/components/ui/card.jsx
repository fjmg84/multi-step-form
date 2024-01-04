import clsx from "clsx";
import { useUserStore } from "../../store/config";

export function CCard({ id, image, name, description, price }) {
  const {
    updatePlan,
    data: {
      plan: { type, monthly },
    },
  } = useUserStore();
  return (
    <button
      onClick={() => updatePlan({ type: id })}
      className={`${clsx({
        "bg-magnolia": type === id,
      })} transition-all duration-300 ease-in-out text-left flex justify-between flex-col border-solid border-2 hover:border-marine-blue p-5 rounded-md w-[150px] h-[180px]`}
    >
      <img src={image} alt={image} className="w-[60px]" />
      <div>
        <p className="text-marine-blue font-ubuntu-bold font-700">{name}</p>
        <div className="flex flex-col">
          <small className="text-cool-gray text-left">{price}</small>

          {!monthly && <small>{description}</small>}
        </div>
      </div>
    </button>
  );
}
