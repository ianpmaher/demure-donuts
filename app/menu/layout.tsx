import { ReactNode } from "react";

interface MenuPageProps {
  children: ReactNode;
}

export default function MenuLayout({ children }: MenuPageProps) {
  return (
    <div className="">
      <div className="min-h-screen flex justify-center items-center flex-col">
        <div className="">{children}</div>
      </div>
    </div>
  );
}
