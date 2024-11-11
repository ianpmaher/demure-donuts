import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import CommentModal from "@/app/components/CommentModal";

const BentoGrid = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={cn("grid w-full auto-rows-[25rem] auto-cols-auto grid-cols-4 gap-3", className)}>{children}</div>;
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  func,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href?: string;
  cta: string;
  func?: any;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-slate-400 hover:outline hover:outline-slate-400 transition-all duration-300 ease-in-out",
      // dark styles
      "transform-gpu dark:bg-black shadow-lg",
      className
    )}
  >
    <div className="">{background}</div>
    <div className="pointer-events-none z-10 flex justify-center transform-gpu flex-col gap-0 p-1 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-500 transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">{name}</h3>
      <p className="max-w-md text-neutral-400 text-center">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-20 transform-gpu flex-row items-center p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 bg-opacity-70"
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto text-lg">
        <a href={href}>
          {cta}
            {func && func()}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-2 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
