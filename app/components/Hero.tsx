import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

const Hero = ({className}: {className?: string}) => {
  const images = [
    { url: "https://i.imgur.com/jYCZgWh.png", description: "Blueberry Swirl" },
    { url: "https://i.imgur.com/dkOnEcG.png", description: "Choco Latte" },
    { url: "https://i.imgur.com/ehqYwDy.png", description: "Birthday Cake" },
    { url: "https://i.imgur.com/4cPsfTF.png", description: "Breakfast Special" },
  ];

  return (
    <div className={`${className} center-center`}>
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {images.map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold"></span>
                    <Image src={images[index].url} alt="hero image" width={300} height={300} className="" />
                  </CardContent>
                  <CardDescription className="text-center">{images[index].description}</CardDescription>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious>
          <button>Previous</button>
        </CarouselPrevious>
        <CarouselNext>
          <button>Next</button>
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default Hero;
