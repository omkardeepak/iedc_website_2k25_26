import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Incubation", href: "/incubation" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

const MobileNavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 p-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
          >
            <path
              d="M3 5h18M3 12h18M3 19h18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <Link to="/" className="mr-6 flex items-center space-x-2 mb-8">
          <span className="text-3xl font-extrabold sm:inline-block">
            IEDC CUSAT
          </span>
        </Link>
        <div className="my-4 h-[calc(100vh-6rem)] pb-10 pl-6 overflow-auto">
          <div className="flex flex-col space-y-4 text-lg">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={(e) => {
                  setIsOpen(false);
                  if (item.href.startsWith("/#")) {
                    e.preventDefault();
                    const targetId = item.href.substring(2);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                      const headerOffset = 128; // Approximate height of header + nav (8rem * 16px/rem)
                      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                      window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
                    }
                  }
                }}
                className="text-2xl"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigationMenu;
