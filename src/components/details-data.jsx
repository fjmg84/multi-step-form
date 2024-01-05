import { useUserStore } from "../store/config";
import CButton from "./ui/button";
import Title from "./ui/title";
import { CCard } from "./ui/card";
import planData from "../mock/data.json";
import pickData from "../mock/pick.json";

export function DetailsData() {
  const { prevStep, data } = useUserStore();
  const { user, plan, pick } = data;

  const planInfo = planData.find((item) => item.id === plan.type);

  return (
    <>
      <Title
        title="Finishing up"
        subtitle="Thanks for confirming your subscription!"
      />

      <div className="flex flex-col gap-5">
        <div className="flex flex-col flex-wrap gap-5 max-w-[500px]">
          <div>
            <p className="text-marine-blue font-ubuntu-medium font-700 capitalize">
              <small className="text-cool-gray font-500">Name: </small>
              {user.name}
            </p>
            <p className="text-marine-blue font-ubuntu-medium font-700">
              <small className="text-cool-gray font-500">Email: </small>
              {user.email}
            </p>
            <p className="text-marine-blue font-ubuntu-medium font-700">
              <small className="text-cool-gray font-500">Phone number:</small>+
              {user.phone}
            </p>
          </div>
          <div>
            <CCard
              id={planInfo.id}
              name={planInfo.name}
              price={planInfo.price}
              description={planInfo.description}
              image={planInfo.image}
            />
          </div>
          <div className="w-full flex gap-2 flex-col">
            {pick.map((item) => {
              const pickInfo = pickData.find(
                (pickItem) => pickItem.id === item
              );

              const { id, name, description, price } = pickInfo;
              return (
                <div
                  key={id}
                  className={`
                flex justify-between border-2 p-5 w-full items-center rounded-md border-marine-blue bg-magnolia transition-all duration-300 ease-in-out
               
                `}
                >
                  <div className="flex gap-5">
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
          </div>
          <div className="flex justify-between w-full">
            <CButton
              type="button"
              value="Go Back"
              myStyles="text-marine-blue"
              onAction={prevStep}
            />
          </div>
        </div>
      </div>
    </>
  );
}
