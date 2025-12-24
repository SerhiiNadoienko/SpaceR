export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full bg-black flex flex-col items-center  overflow-hidden rounded-md ">
      {children}
    </div>
  );
}
