import Title from "./ui/title";

export function Layout({ children, title, subtitle }) {
  return (
    <>
      <Title title={title} subtitle={subtitle} />
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap gap-5">{children}</div>
      </div>
    </>
  );
}
