//import { Colors } from "./components/ui/colors";
import { useUserStore } from "./store/config";
import PersonalInfoForm from "./components/forms/personal-info";
import SelectPlanForm from "./components/forms/select-plant";
import { PickAddOnsForm } from "./components/forms/pick-add-ons";
import { DetailsData } from "./components/details-data";

function App() {
  const { data } = useUserStore();
  const { step } = data;

  return (
    <div className="flex justify-center items-center bg-magnolia h-screen w-screen bg-mobile-bg bg-no-repeat bg-contain">
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
