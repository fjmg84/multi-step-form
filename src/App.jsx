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

  useEffect(() => {
    if (!btnDisables.includes(step)) setBtnDisables((prev) => [...prev, step]);
  }, [step]);

  return (
    <div className="main flex flex-col justify-center items-center  h-screen w-screen bg-magnolia">
      <div className="flex gap-5">
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <Steps key={index} step={step} item={item} status={btnDisables} />
          );
        })}
      </div>
      <div className="p-10">
        <div className="bg-white rounded-lg shadow-lg flex flex-col p-10 gap-5">
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
