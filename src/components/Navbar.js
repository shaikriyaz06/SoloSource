import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Main_Logo from "../assets/Hero-logo.png";
import Main_Logo1 from "../assets/Hero-logo1.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeLink, setActiveLink] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveLink("Home");
    } else if (location.pathname === "/aboutus") {
      setActiveLink("About Us");
    } else if (location.pathname === "/contact") {
      setActiveLink("Contact Us");
    }
  }, [location]);

  const servicesMenu = {
    "IT Consulting & Solution": [
      {
        name: "Digital Transformation",
        description:
          "Empower your business with cutting-edge digital solutions for growth and efficiency.",
      },
      {
        name: "Cloud Solutions",
        description:
          "Leverage scalable and secure cloud technologies to drive innovation and agility.",
      },
      {
        name: "Cyber Security",
        description:
          "Protect your digital assets with advanced security strategies and threat mitigation.",
      },
      {
        name: "Software Development",
        description:
          "Develop custom software solutions to optimize workflows and enhance productivity.",
      },
      {
        name: "AI & Data Analytics",
        description:
          "Gain actionable insights and drive smarter decisions with AI-driven analytics.",
      },
      {
        name: "Enterprise Architecture",
        description:
          "Design a scalable and resilient IT architecture to support long-term business goals.",
      },
    ],
    "Business Consulting": [
      {
        name: "Strategy & Operations",
        description:
          "Enhance business performance with data-driven strategies and process improvements.",
      },
      {
        name: "Process Optimization",
        description:
          "Streamline operations and eliminate inefficiencies for maximum productivity.",
      },
      {
        name: "Compliance Risk Management",
        description:
          "Ensure regulatory compliance and mitigate risks to safeguard business continuity.",
      },
    ],
    "Tailored Talent Solutions": [
      {
        name: "IT & Business Staffing",
        description:
          "Connect with top-tier IT and business professionals to meet your staffing needs.",
      },
      {
        name: "Contract & Permanent Hiring",
        description:
          "Flexible hiring solutions to help you scale your workforce efficiently.",
      },
      {
        name: "Remote & On-Site Workforce",
        description:
          "Build a high-performing team with remote and on-site talent tailored to your needs.",
      },
    ],
  };

  const navLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/aboutus",
    },
    {
      title: "Our Services",
      isMegaMenu: true,
    },
    {
      title: "Industries We Serve",
      dropdown: [
        { name: "Banking & Fintech", href: "#", icon: "🏦" },
        { name: "IT & Technology", href: "#", icon: "💻" },
        { name: "Entertainment & Media", href: "#", icon: "🎬" },
        { name: "Health Care & Life Sciences", href: "#", icon: "⚕️" },
        { name: "Logistic & Supply Chain", href: "#", icon: "🚛" },
        { name: "Education & E-learning", href: "#", icon: "📚" },
        { name: "Government & Public Sector", href: "#", icon: "🏛️" },
      ],
    },
    {
      title: "Careers",
      dropdown: [
        { name: "Job Openings", href: "#", icon: "🔍" },
        { name: "Life at Solo Source", href: "#", icon: "🌟" },
      ],
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-white shadow-lg backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 w-[150px] transition-transform duration-300 hover:scale-105">
            <Link to="/" onClick={() => setActiveLink("Home")}>
              <img
                src={isScrolled ? Main_Logo : Main_Logo1}
                alt="Logo"
                className="h-14 w-28"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex space-x-10">
              {navLinks.map((link, index) => (
                <li key={index} className="relative group">
                  <Link
                    to={link.href || "#"}
                    className={`inline-flex items-center text-base font-medium transition-all duration-300 py-2
        ${
          activeLink === link.title
            ? "border-yellow-400 text-yellow-400"
            : "border-transparent border-b-2 hover:border-yellow-400"
        } 
        ${isScrolled ? "text-gray-800" : "text-white"}
        hover:text-yellow-400
        group-hover:text-yellow-400 group-hover:border-yellow-400`}
                    onClick={() => setActiveLink(link.title)}
                    onMouseEnter={() => {
                      if (link.isMegaMenu) {
                        setActiveCategory(Object.keys(servicesMenu)[0]);
                      }
                    }}
                  >
                    {link.title}
                    {(link.dropdown || link.isMegaMenu) && (
                      <svg
                        className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Regular Dropdown */}
                  {link.dropdown && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 mt-2 w-60 opacity-0 invisible 
        group-hover:opacity-100 group-hover:visible 
        transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                    >
                      <div className="py-2 px-2 bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5">
                        {link.dropdown.map((item, itemIndex) => (
                          <a
                            key={itemIndex}
                            href={item.href}
                            className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 
                hover:bg-gray-50 hover:text-yellow-400 rounded-md transition-colors duration-200"
                          >
                            <span className="text-lg">{item.icon}</span>
                            <span>{item.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Mega Menu */}
                  {link.isMegaMenu && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 mt-2 w-[1000px] h-[400px] 
        opacity-0 invisible group-hover:opacity-100 group-hover:visible 
        transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                    >
                      {/* Add hover gap div */}
                      <div className="absolute h-[20px] w-full -top-[20px]"></div>
                      <div className="bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 p-6 h-full">
                        <div className="flex h-full">
                          {/* Categories */}
                          <div className="w-[250px] border-r border-gray-200 h-full overflow-y-auto">
                            {Object.keys(servicesMenu).map((category) => (
                              <div
                                key={category}
                                className={`px-4 py-3 cursor-pointer text-sm font-medium rounded-md transition-all duration-200 group/item flex items-center justify-between ${
                                  activeCategory === category
                                    ? "bg-yellow-50 text-yellow-600"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-yellow-600"
                                }`}
                                onMouseEnter={() => setActiveCategory(category)}
                              >
                                <span>{category}</span>
                                <span
                                  className={`transform transition-all duration-200 ${
                                    activeCategory === category
                                      ? "opacity-100 translate-x-0"
                                      : "opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0"
                                  }`}
                                >
                                  <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                  </svg>
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Sublinks */}
                          <div className="flex-1 pl-6 h-full overflow-y-auto">
                            {activeCategory && (
                              <div
                                className={`grid ${
                                  activeCategory === "IT Consulting"
                                    ? "grid-cols-3"
                                    : "grid-cols-2"
                                } gap-4 auto-rows-min`}
                              >
                                {servicesMenu[activeCategory].map((service) => (
                                  <a
                                    key={service.name}
                                    href="#"
                                    className="group p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 border border-gray-100 hover:border-gray-200"
                                  >
                                    <div className="font-medium text-gray-900 group-hover:text-yellow-600">
                                      {service.name}
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                                      {service.description}
                                    </p>
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${
                isScrolled ? "text-gray-800" : "text-white"
              } hover:text-yellow-400 focus:outline-none`}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } lg:hidden bg-white shadow-lg`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navLinks.map((link, index) => (
            <div key={index} className="relative">
              {link.isMegaMenu ? (
                <div className="py-2">
                  <div className="px-3 py-2 text-base font-medium text-gray-900">
                    Services
                  </div>
                  <div className="space-y-4 mt-2">
                    {Object.entries(servicesMenu).map(
                      ([category, services]) => (
                        <div key={category} className="px-3">
                          <div className="text-sm font-semibold text-gray-900 mb-2">
                            {category}
                          </div>
                          <div className="space-y-2">
                            {services.map((service) => (
                              <a
                                key={service.name}
                                href="#"
                                className="block px-3 py-2 text-sm text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 rounded-md"
                              >
                                {service.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ) : (
                <div className="py-2">
                  <Link
                    to={link.href || "#"}
                    className={`block px-3 py-2 text-base font-medium ${
                      activeLink === link.title
                        ? "text-yellow-600 bg-yellow-50"
                        : "text-gray-900 hover:text-yellow-600"
                    }`}
                    onClick={() => {
                      setActiveLink(link.title);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {link.title}
                  </Link>
                  {link.dropdown && (
                    <div className="mt-2 space-y-2">
                      {link.dropdown.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href={item.href}
                          className="flex items-center space-x-3 px-6 py-2 text-sm text-gray-600 hover:text-yellow-600 hover:bg-yellow-50"
                        >
                          <span className="text-lg">{item.icon}</span>
                          <span>{item.name}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
