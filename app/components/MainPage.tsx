import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Hero from "./Hero";
import MenuTest from "./MenuTest";
import Image from "next/image";
import { DoubleArrowUpIcon, CubeIcon, ChatBubbleIcon, CookieIcon } from "@radix-ui/react-icons";

const MainPage = ({ className }: { className?: string }) => {
  const images = [
    { url: "https://i.imgur.com/jYCZgWh.png", description: "Blueberry Swirl", name: "Menu", Icon: CubeIcon, href: "/", cta: "View Menu", classes: "col-span-1" },
    { url: "https://i.imgur.com/dkOnEcG.png", description: "Choco Latte", name: "Hero", Icon: ChatBubbleIcon, href: "/", cta: "View Hero", classes: "col-span-2" },
    { url: "https://i.imgur.com/ehqYwDy.png", description: "Birthday Cake", name: "Birthday", Icon: CookieIcon, href: "/", cta: "View Birthday", classes: "col-span-1" },
    { url: "https://i.imgur.com/4cPsfTF.png", description: "Breakfast Special", name: "Breakfast", Icon: DoubleArrowUpIcon, href: "/", cta: "View Breakfast", classes: "col-span-4" },
  ];

  return (
    <div className={`${className} text-center p-4`}>
      <BentoGrid>
        {images.map((image, index) => (
          <BentoCard
            key={index}
            name={image.name}
            className={`place-content-center ${image.classes}`}
            background={<Image src={image.url} alt={image.description} height={500} width={500} />}
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
