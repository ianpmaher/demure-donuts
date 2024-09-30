import { ReactNode } from 'react';

interface AboutPageProps {
  children: ReactNode;
}

export default function AboutPage({ children }: AboutPageProps) {
  return (
    <div className="outline">
      <div className="h-full w-full mx-auto my-8 self-center flex justify-center">
        <div className="flex self-start justify-self-center md:pt-16 ">
          {children}
          </div>
      </div>
    </div>
  );
}
