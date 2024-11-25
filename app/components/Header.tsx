import { ModeToggle } from "./ModeToggle";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="flex justify-around rounded-xl">
      <Nav />
      <ModeToggle className="" />
    </header>
  );
};

export default Header;
