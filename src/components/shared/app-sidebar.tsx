import { useState } from "react";
import { Home, Menu, X } from "lucide-react";
import { instagram, twitter, facebook, logo } from "@/assets";
import { Button } from "@/components/ui/button";

export function AppSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const currentPath = window.location.pathname;

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/join-waitlist", label: "Join waitlist" },
  ];

  return (
    <>
      <div className="lg:hidden flex justify-between items-center p-4">
        <img src={logo} alt="" />
        <div>
          <Button
            variant="secondary"
            className=" text-white uppercase rounded-full"
            size="lg"
          >
            Join Waitlist
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-10 w-10 text-black" />
            ) : (
              <Menu className="h-10 w-10 text-black" />
            )}
          </Button>
        </div>
      </div>

      <aside
        className={`fixed inset-y-0 left-0 z-50 transform bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:w-[10%] xl:w-[13%] w-[75%]`}
      >
        <div className="flex flex-col items-start h-full p-6 md:p-10 ">
          <div className="pb-6">
            <a href="/" className="logo">
              <img src={logo} alt="logo" className="max-w-full h-auto" />
            </a>
          </div>

          <nav className="flex-1">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li
                  key={item.href}
                  className={`relative ${
                    currentPath === item.href
                      ? "before:bg-orange-400 before:w-1 before:h-full before:absolute before:top-0 before:left-0"
                      : ""
                  }`}
                >
                  <a
                    href={item.href}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                      currentPath === item.href
                        ? " text-[#d87023] font-medium"
                        : "text-gray-700 hover:bg-[#FFF5EE] hover:text-[#d87023]"
                    }`}
                  >
                    {item.icon && <item.icon className="h-5 w-5" />}
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="transition-transform transform hover:scale-110"
                >
                  <img src={facebook} alt="Facebook" className="w-8 h-8" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="#"
                  className="transition-transform transform hover:scale-110"
                >
                  <img src={twitter} alt="Twitter" className="w-8 h-8" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="#"
                  className="transition-transform transform hover:scale-110"
                >
                  <img src={instagram} alt="Instagram" className="w-8 h-8" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
