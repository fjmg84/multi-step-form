//import { Colors } from "./components/ui/colors";
import { useState, useEffect } from "react";
import { useUserStore } from "./store/config";
import PersonalInfoForm from "./components/forms/personal-info";
import SelectPlanForm from "./components/forms/select-plant";
import { PickAddOnsForm } from "./components/forms/pick-add-ons";
import { DetailsData } from "./components/details-data";
import { Steps } from "./components/steps";

function App() {
  const [btnDisables, setBtnDisables] = useState([1]);
  const { data } = useUserStore();
  const { step } = data;
  const steps = [
    {
      id: 1,
      description: "Your info",
    },
    {
      id: 2,
      description: "Select plan",
    },
    {
      id: 3,
      description: "add-ons",
    },
    {
      id: 4,
      description: "summary",
    },
  ];

  useEffect(() => {
    if (!btnDisables.includes(step)) setBtnDisables((prev) => [...prev, step]);
  }, [step]);

  return (
    <div className="mobile flex flex-col gap-10 lg:justify-center items-center h-screen w-screen bg-magnolia">
      <div className="flex mt-20 w-full items-center justify-center gap-5 lg:hidden">
        {steps.map(({ id }) => {
          return <Steps key={id} step={step} item={id} status={btnDisables} />;
        })}
      </div>

      <div className="p-5 flex rounded-2xl lg:bg-white lg:shadow-lg lg:w-[1024px] lg:h-[620px]">
        <div className="hidden lg:flex desktop w-2/5">
          <div className="p-6 flex flex-col gap-8">
            {steps.map(({ id, description }) => {
              return (
                <div key={id} className="flex gap-3">
                  <Steps step={step} item={id} status={btnDisables} />
                  <div>
                    <p className="text-magnolia opacity-70 text-sm uppercase">
                      step {id}
                    </p>
                    <p className="font-extrabold text-magnolia capitalize">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white lg:w-3/5 rounded-lg lg:shadow-none shadow-lg flex flex-col p-10 gap-5">
          {step === 1 && <PersonalInfoForm />}
          {step === 2 && <SelectPlanForm />}
          {step === 3 && <PickAddOnsForm />}
          {step === 4 && <DetailsData />}
        </div>
      </div>
    </div>
  );
}

export default App;
