import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Hero from "./Hero";
import MenuTest from "./MenuTest";
import Image from "next/image";
import { DoubleArrowUpIcon, CubeIcon, ChatBubbleIcon, CookieIcon } from "@radix-ui/react-icons";

const MainPage = ({ className }: { className?: string }) => {
  const images = [
    { url: "https://i.imgur.com/jYCZgWh.png", description: "Blueberry Swirl", name: "Menu", Icon: CubeIcon, href: "/", cta: "Menu", classes: "col-span-1" },
    { url: "https://i.imgur.com/dkOnEcG.png", description: "Choco Latte", name: "Hero", Icon: ChatBubbleIcon, href: "/", cta: "Hero", classes: "col-span-2" },
    { url: "https://i.imgur.com/ehqYwDy.png", description: "Birthday Cake", name: "Birthday", Icon: CookieIcon, href: "/", cta: "Birthday", classes: "col-span-2" },
    { url: "https://i.imgur.com/4cPsfTF.png", description: "Breakfast Special", name: "Breakfast", Icon: DoubleArrowUpIcon, href: "/", cta: "Breakfast", classes: "col-span-1" },
  ];

  return (
    <div className={`${className} text-center`}>
      <BentoGrid>
        {images.map((image, index) => (
          <BentoCard
            key={index}
            name={image.name}
            className={`place-content-center flex ${image.classes}`}
            background={<Image src={image.url} alt={image.description} width={300} height={300} className="p-1 rounded-md" />}
            Icon={image.Icon}
            description={image.description}
            href={image.href}
            cta={image.cta}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default MainPage;
