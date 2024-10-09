import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

const MenuTest = ({ className }: { className?: string }) => {
  const images = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Krispy_Kreme_Pirate_and_Glazed_Doughnuts_%2815305529630%29.jpg/800px-Krispy_Kreme_Pirate_and_Glazed_Doughnuts_%2815305529630%29.jpg",
      title: "Signature Dish",
      description:
        "Our signature dish is the Krispy Kreme Pirate and Glazed Doughnuts. It's a delicious treat that's perfect for any occasion.",
    },
    {
      url: "https://i.imgur.com/1YGAAcr.jpeg",
      title: "Technical Challenge",
      description:
        "The technical challenge is a test of the bakers' skills and knowledge. It's a chance for them to show off their creativity and talent.",
    },
    {
      url: "https://i.imgur.com/R55XiN5.png",
      title: "Showstopper",
      description:
        "The showstopper is the final challenge of the week. It's a chance for the bakers to really impress the judges with their baking skills.",
    },
  ];

  return (
    <div className={`${className} text-center`}>
      <h1>Menu Test</h1>
      <p>This is the menu test page</p>
      <div className="text-center">
        <Accordion type="multiple">
          {images.map((image, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="inline">
              <AccordionTrigger className="w-1/4 h-full">{image.title}</AccordionTrigger>
              <AccordionContent className="flex justify-evenly items-center h-64"> {/* Set a fixed height */}
                <Image src={image.url} alt={image.title} width={200} height={200} className="object-contain" /> {/* Ensure image is contained */}
                <p className="text-wrap text-md inline">{image.description}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default MenuTest;
