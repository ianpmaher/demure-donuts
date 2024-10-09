import Hero from "./Hero";
import MenuTest from "./MenuTest";

const MainPage = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} text-center flex flex-col justify-center items-center gap-20`}>
      <Hero className="flex-1" />
      <MenuTest className="flex-1" />
    </div>
  );
};

export default MainPage;
