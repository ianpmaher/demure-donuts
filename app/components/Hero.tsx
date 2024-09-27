import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

const Hero = () => {

  const images = [
    "https://i.imgur.com/jYCZgWh.png",
    "https://i.imgur.com/dkOnEcG.png",
    "https://i.imgur.com/ehqYwDy.png",
    "https://i.imgur.com/4cPsfTF.png",
  ];

  return (
    <div className="hero">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
        {images.map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold"></span>
                  <Image src={images[index]} alt="hero image" width={300} height={300} className="" />
                </CardContent>
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
