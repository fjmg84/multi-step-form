import { useForm } from "react-hook-form";
import { CInput } from "../ui/input";
import CButton from "../ui/button";
import Title from "../ui/title";
import { useUserStore } from "../../store/config";

export default function PersonalInfoForm() {
  const { data, nextStep, updateUser } = useUserStore();
  const { user } = data;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    updateUser(data);
    nextStep();
  };

  return (
    <>
      <Title
        title={"Personal info"}
        subtitle={"Please provide your name, email address, and phone number."}
      />

      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5">
          <CInput
            value={user}
            name={"name"}
            label="Name"
            placeholder="e.g. Steven King"
            register={register("name", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
            errors={errors["name"]}
          />
          <CInput
            value={user}
            name={"email"}
            label="Email Address"
            placeholder="e.g. stevenking@gmail.com"
            register={register("email", {
              required: {
                value: true,
                message: "This field is required",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email",
              },
            })}
            errors={errors["email"]}
          />

          <CInput
            value={user}
            name={"phone"}
            label="Phone Number"
            placeholder="e.g. +1 9999-9999"
            register={register("phone", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
            errors={errors["phone"]}
          />
        </div>

        <div>
          <CButton
            myStyles="bg-marine-blue text-magnolia px-10 py-5 rounded-md"
            type={"submit"}
            value="Next step"
          />
        </div>
      </form>
    </>
  );
}
