import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Nav = () => {
  return (
    <NavigationMenu>
      <NavigationMenuTrigger>
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuViewport>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/services">Services</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuIndicator />
        </NavigationMenuViewport>
      </NavigationMenuContent>
    </NavigationMenu>
  );
};

export default Nav;
