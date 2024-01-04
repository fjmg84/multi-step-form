import clsx from "clsx";
import CButton from "../ui/button";
import Title from "../ui/title";
import { useUserStore } from "../../store/config";
import dataMock from "../../mock/pick.json";

export function PickAddOnsForm() {
  const { data, prevStep, nextStep, updatePick } = useUserStore();
  const { pick } = data;

  return (
    <>
      <Title
        title="Pick add-ons"
        subtitle="Add-ons help enhance your gaming experience."
      />

      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap gap-5 max-w-[500px]">
          {dataMock.map((data) => {
            const { id, name, description, price } = data;
            return (
              <div
                key={id}
                className={`
                flex justify-between border-2 p-5 w-full items-center rounded-md hover:border-marine-blue  transition-all duration-300 ease-in-out
                ${clsx({
                  "border-marine-blue": pick.includes(id),
                  "bg-magnolia": pick.includes(id),
                })}
                `}
              >
                <div className="flex gap-5">
                  <input
                    type="checkbox"
                    id={`${id}_${name}`}
                    name={name}
                    className="w-5 bg-marine-blue"
                    defaultChecked={pick.includes(id)}
                    onClick={() => updatePick(id)}
                  />
                  <div>
                    <p className="text-marine-blue font-700">{name}</p>
                    <small className="text-cool-gray">{description}</small>
                  </div>
                </div>
                <p className="text-purplish-blue font-ubuntu-bold font-700">
                  {price}
                </p>
              </div>
            );
          })}
          <div className="flex justify-between w-full">
            <CButton
              type="button"
              value="Go Back"
              myStyles="text-marine-blue"
              onAction={prevStep}
            />
            <CButton
              type="submit"
              value="Next step"
              myStyles="bg-marine-blue text-magnolia px-10 py-5 rounded-md"
              onAction={nextStep}
            />
          </div>
        </div>
      </div>
    </>
  );
}
