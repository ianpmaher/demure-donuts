import { ReactNode } from 'react';

interface CaterPageProps {
  children: ReactNode;
}

export default function AboutPage({ children }: CaterPageProps) {
  return (
    <div className="h-[90vh] w-[95vw] bg-gradient-to-bl from-sky-300 via-orange-400 to-violet-400 rounded-lg">
      <div className="h-full w-full self-center flex justify-center ">
        <div className="flex self-start justify-self-center md:pt-8 ">
          {children}
          </div>
      </div>
    </div>
  );
}
