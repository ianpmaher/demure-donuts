import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const MenuTest = ({ className }: { className?: string }) => {
  const images = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Krispy_Kreme_Pirate_and_Glazed_Doughnuts_%2815305529630%29.jpg/800px-Krispy_Kreme_Pirate_and_Glazed_Doughnuts_%2815305529630%29.jpg",
      title: "Signature Dish",
      description:
        "Our signature dish is the Krispy Kreme Pirate and Glazed Doughnuts. It's a delicious treat that's perfect for any occasion.",
      price: "$5.99",
    },
    {
      url: "https://i.imgur.com/1YGAAcr.jpeg",
      title: "Technical Challenge",
      description:
        "The technical challenge is a test of the bakers' skills and knowledge. It's a chance for them to show off their creativity and talent.",
      price: "$4.99",
    },
    {
      url: "https://i.imgur.com/R55XiN5.png",
      title: "Showstopper",
      description:
        "The showstopper is the final challenge of the week. It's a chance for the bakers to really impress the judges with their baking skills.",
      price: "$6.99",
    },
  ];

  return (
    <div className={`${className} text-center`}>
      <div className="text-center">
        <Accordion type="multiple">
          {images.map((image, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="inline">
              <AccordionTrigger className=" w-1/3 h-full">
                <div className="">{image.title}</div>
              </AccordionTrigger>
              <AccordionContent className="flex justify-center gap-4 items-center h-64">
                {" "}
                {/* Set a fixed height */}
                <Image src={image.url} alt={image.title} width={200} height={200} className="object-contain" />{" "}
                {/* Ensure image is contained */}
                <p className="text-md inline w-1/3 text-pretty">{image.description}</p>
                <div className="mx-4 font-bold">{image.price}</div>
              </AccordionContent>
              <Separator />
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default MenuTest;
