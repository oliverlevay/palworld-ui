export default function TopBar({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex justify-between h-[30px] w-full bg-[#485654] pl-4 relative">
      {/* Circles in the corners */}
      <div className="absolute top-[-1px] left-[-1px] w-1 h-1 bg-[white] opacity-40 rounded-full" />
      <div className="absolute bottom-[-1px] left-[-1px] w-1 h-1 bg-[white] opacity-40 rounded-full" />
      <div className="absolute top-[-1px] right-[-1px] w-1 h-1 bg-[white] opacity-40 rounded-full" />
      <div className="absolute bottom-[-1px] right-[-1px] w-1 h-1 bg-[white] opacity-40 rounded-full" />
      <p className="text-primary font-medium text-xl tracking-wide">{title}</p>
      {children}
    </div>
  );
}
