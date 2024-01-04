export default function Title({ title, subtitle }) {
  return (
    <div className="flex flex-col gap-2">
      {title && (
        <h1 className="text-marine-blue font-ubuntu-regular text-2xl font-700">
          {title}
        </h1>
      )}

      {subtitle && <h2 className="text-cool-gray">{subtitle}</h2>}
    </div>
  );
}
