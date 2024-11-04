import { ReactNode } from 'react';

interface AboutPageProps {
  children: ReactNode;
}

export default function AboutPage({ children }: AboutPageProps) {
  return (
    <div className="outline bg-donut-bg bg-center bg-cover h-[95vh] w-[95vw]">
      <div className="h-full w-full mx-auto my-8 self-center flex justify-center">
        <div className="flex self-start justify-self-center md:pt-16 ">
          {children}
          </div>
      </div>
    </div>
  );
}
