import { ModeToggle } from "./ModeToggle";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="flex justify-around">
      <Nav />
      <ModeToggle className="" />
    </header>
  );
};

export default Header;
