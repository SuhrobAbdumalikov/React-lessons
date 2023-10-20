import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

function Header() {
  const navLinks = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/contact",
      label: "Contact",
    },
    {
      href: "/product",
      label: "Product",
    },
  ];

  return (
    <div className="w-full bg-gray-300 p-4">
      <NavigationMenu className={"max-md:hidden  gap-10"}>
        <NavigationMenuList>
          {navLinks.map((link) => (
            <Link
              to={link.href}
              className={navigationMenuTriggerStyle()}
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Sheet>
        <SheetTrigger className="bg-white md:hidden p-3 rounded">
          Menu
        </SheetTrigger>
        <SheetContent className={"w-3/4"}>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription className="flex flex-col mx-auto items-center">
              {navLinks.map((link) => (
                <Link
                  to={link.href}
                  className={navigationMenuTriggerStyle()}
                  key={link.label}
                >
                  {link.label}
                </Link>
              ))}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Header;
