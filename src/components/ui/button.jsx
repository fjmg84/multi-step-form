export default function CButton({
  type,
  myStyles,
  value,
  onAction = undefined,
  disabled = false,
}) {
  return (
    <input
      className={`${myStyles} cursor-pointer transition-all duration-300 ease-in-out`}
      type={type}
      value={value}
      onClick={onAction}
      disabled={disabled}
    />
  );
}
