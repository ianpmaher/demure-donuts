import { ReactNode } from "react";

interface MenuPageProps {
  children: ReactNode;
}

export default function MenuLayout({ children }: MenuPageProps) {
  return (
    <div className="w-[95vw] h-[95vh]">
      <div className="flex justify-center items-center flex-col">
        <div className="">{children}</div>
      </div>
    </div>
  );
}
