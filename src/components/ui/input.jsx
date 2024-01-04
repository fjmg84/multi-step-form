import { clsx } from "clsx";

export function CInput({
  value,
  name,
  label,
  type,
  placeholder,
  errors,
  register,
}) {
  return (
    <div className="flex relative">
      <label
        htmlFor={label}
        className="flex flex-col text-marine-blue font-ubuntu-regular w-full"
      >
        {label}
        <input
          type={type}
          defaultValue={value[name] ?? ""}
          placeholder={placeholder}
          className={`p-2 font-ubuntu-regular ${clsx({
            "border-strawberry-red": errors !== undefined ?? true,
          })} border-cool-gray border-2 border-solid rounded-md`}
          {...register}
        />
      </label>

      {errors && (
        <span className="absolute right-2 top-[5px] text-strawberry-red font-ubuntu-medium text-sm">
          {errors.message}
        </span>
      )}
    </div>
  );
}
