import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileNavigationMenu from "./MobileNavigationMenu";

const navigationItems = [
  { name: "Home", href: "/" }, // Changed to root path
  { name: "About", href: "/#about-us" },
  { name: "Events", href: "/events" },
  { name: "Incubation", href: "/incubation" },
  { name: "Alumni", href: "/alumni" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

const NavigationMenu = () => {
  const isMobile = useIsMobile();
  const [activeItem, setActiveItem] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    const currentPathname = location.pathname;
    const currentHash = location.hash;

    let foundItemName = "";

    // Handle Home page specifically
    if (currentPathname === "/" || currentPathname === "/index.html") { // Added /index.html for robustness
      if (currentHash) {
        // If on home page with an anchor, find the item matching the anchor
        const itemWithHash = navigationItems.find(item => item.href === `/${currentHash}`);
        if (itemWithHash) {
          foundItemName = itemWithHash.name;
        } else {
          // Default to Home if anchor not found
          foundItemName = "Home";
        }
      } else {
        foundItemName = "Home"; // On root path without hash
      }
    } else {
      // For other pages, find exact path match or startsWith match
      const itemMatch = navigationItems.find(item => {
        // Exact path match (e.g., /events)
        if (item.href === currentPathname) {
          return true;
        }
        // Path starts with item.href (e.g., /events/some-subpage should highlight Events)
        // Ensure it's not just a partial match of a longer path (e.g., /eventually should not highlight /events)
        if (item.href.length > 1 && currentPathname.startsWith(item.href + "/")) {
          return true;
        }
        return false;
      });

      if (itemMatch) {
        foundItemName = itemMatch.name;
      }
    }

    setActiveItem(foundItemName);
  }, [location]);

  if (isMobile) {
    return null;
  }

  return (
    <nav className="relative z-20 py-2">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top border */}
        <div className="w-full border-t border-gray-900 max-w-5xl mx-auto"></div>

        {/* Menu row */}
        <div className="flex justify-evenly items-center py-2">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={(e) => {
                setActiveItem(item.name);
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
              className={`relative font-headline text-2xl font-bold text-black px-6 py-2 transition-all duration-300 rounded-md
                hover:text-purple-400 hover:bg-gray-100
                ${activeItem === item.name ? "text-purple-600" : ""}`}
            >
              {/* Left vertical border */}
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-[2px] bg-purple-600 transition-all duration-300 group-hover:h-full"></span>

              {item.name}

              {/* Right vertical border */}
              <span className="absolute right-0 top-1/2 -translate-y-1/2 h-0 w-[2px] bg-purple-600 transition-all duration-300 group-hover:h-full"></span>
            </Link>
          ))}
        </div>

        {/* Bottom border */}
        <div className="w-full border-b border-gray-900 max-w-5xl mx-auto"></div>
      </div>
    </nav>
  );
};

export default NavigationMenu;