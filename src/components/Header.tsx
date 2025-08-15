import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileNavigationMenu from "./MobileNavigationMenu";

const Header = () => {
  const isMobile = useIsMobile();
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDay = (date: Date) => {
    return date.getDate().toString().padStart(2, "0");
  };

  const formatMonth = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "long" });
  };

  const formatYear = (date: Date) => {
    return date.getFullYear();
  };

  const formatWeekday = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  const formatTime = (date: Date) => {
    const timeString = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    const [time, ampm] = timeString.split(" ");
    return { time, ampm };
  };

  const { time, ampm } = formatTime(currentDate);

  return (
    <header className="pt-8 px-6 sm:px-12 mb-2">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center">
        {isMobile && <MobileNavigationMenu />}
        {!isMobile && (
          <>
            {/* Left: Date Section */}
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <div className="flex items-baseline gap-3">
                <div className="font-headline text-5xl font-bold text-coffee-dark leading-none">
                  {formatDay(currentDate)}
                </div>
                <div className="text-left">
                  <div className="font-headline text-xl font-semibold text-coffee-dark">
                    {formatMonth(currentDate)}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Centered Main Title */}
        <div className="text-center mb-4 sm:mb-0">
          <img src="/images/IEDC Logo.svg" alt="IEDC CUSAT Logo" className="h-12 sm:h-20 w-auto mx-auto" />
        </div>

        {!isMobile && (
          <>
            {/* Right: Time Section */}
            <div className="text-center sm:text-right w-[140px]">
              <div className="flex items-baseline gap-1 text-3xl text-coffee-dark font-mono">
                <span className="font-subtitle">{time}</span>
                <span className="font-subtitle text-xl self-end">{ampm}</span>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="max-w-6xl mx-auto mt-8 h-[2px] bg-coffee-dark"></div>
    </header>
  );
};

export default Header;
