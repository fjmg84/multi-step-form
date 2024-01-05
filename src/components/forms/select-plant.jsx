import { useUserStore } from "../../store/config";
import CButton from "../ui/button";
import clsx from "clsx";
import { CToggle } from "../ui/toggle";
import dataMock from "../../mock/data.json";
import { CCard } from "../ui/card";
import { Layout } from "../layout";

export default function SelectPlanForm() {
  const { data, prevStep, nextStep } = useUserStore();
  const {
    plan: { type },
  } = data;

  return (
    <Layout
      title="Select your plan"
      subtitle="You have the option of monthly or yearly to billing"
    >
      {dataMock.map((data) => {
        return <CCard key={data.id} {...data} />;
      })}

      <div className="w-full bg-alabaster p-5 flex items-center justify-center rounded-md">
        <CToggle />
      </div>

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
          disabled={type === undefined ? true : false}
          myStyles={`${clsx({
            "bg-marine-blue": type !== undefined,
            "text-marine-blue": type === undefined,
          })} bg-alabaster text-magnolia px-10 py-5 rounded-md`}
          onAction={nextStep}
        />
      </div>
    </Layout>
  );
}
