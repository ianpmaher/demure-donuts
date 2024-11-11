import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Hero from "./Hero";
import Image from "next/image";
import { DoubleArrowUpIcon, CubeIcon, ChatBubbleIcon, CookieIcon } from "@radix-ui/react-icons";
import CommentModal from "./CommentModal";

const MainPage = ({ className }: { className?: string }) => {
  const images = [
    { url: "https://i.imgur.com/jYCZgWh.png", description: "", name: "Blueberry Swirl", Icon: CubeIcon, href: "/", cta: "🫐", classes: "col-span-1" },
    { url: "https://i.imgur.com/dkOnEcG.png", description: "", name: "Choco Latte", Icon: ChatBubbleIcon, href: "/", cta: "🍩", classes: "col-span-2" },
    { url: "https://i.imgur.com/ehqYwDy.png", description: "", name: "Birthday Cake", Icon: CookieIcon, href: "/", cta: "🎂", classes: "col-span-2" },
    { url: "https://i.imgur.com/4cPsfTF.png", description: "", name: "Breakfast Special", Icon: DoubleArrowUpIcon, href: "/", cta: "☕", classes: "col-span-1" },
    { url: "https://i.imgur.com/qOsjHIf.jpeg", description: "", name: "The One Ring", Icon: CookieIcon, href: "/", cta: "⚔️", classes: "col-span-1" },
    { url: "https://i.imgur.com/jSuJvfb.jpeg", description: "", name: "Doggo Donut", Icon: DoubleArrowUpIcon, href: "/", cta: "🐶", classes: "col-span-1" },
  ];

  return (
    <div className={`${className} text-center`}>
      <BentoGrid>
        {images.map((image, index) => (
          <BentoCard
            key={index}
            name={image.name}
            className={`place-content-center flex p-1 ${image.classes}`}
            background={<Image src={image.url} alt={image.name} width={300} height={300} className="p-1 rounded-2xl flex justify-self-center scale-110" />}
            Icon={image.Icon}
            description={image.description}
            // href={image.href}
            cta={image.cta}
            func={() => <CommentModal />}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default MainPage;
