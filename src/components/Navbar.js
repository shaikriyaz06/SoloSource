import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Drawer } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import Main_Logo from "../assets/Logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSecondNavbar, setShowSecondNavbar] = useState(false); // state to control second navbar visibility
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.pathname === "/") {
      setShowSecondNavbar(false);
      setLastScrollY(0);
    }
  }, [location]);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (
        currentScrollY > 550 ||
        (location.pathname !== "/" && currentScrollY > 200)
      ) {
        setShowSecondNavbar(true);
      } else {
        setShowSecondNavbar(false);
      }
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, location.pathname]);
  const menuItems = [
    { key: "/", label: "Home" },
    { key: "/about", label: "About Us" },
    { key: "/services", label: "Services" },
    { key: "/contact", label: "Contact Us" },
    { key: "/careers", label: "Careers" },
  ];
  return (
    <>
      <header className="fixed z-[99] top-0 left-0 w-full h-auto mt-0 mx-auto pt-[25px] pb-[25px] transition-all duration-300 ease-in-out">
        <div className="container w-full max-w-[#1480px] mr-auto ml-auto">
          <div className="wrapper pr-[20px] flex flex-row flex-wrap items-center justify-between static">
            <div class="header-item-left flex basis-[18%] items-center">
              {/* <a
                href="https://www.valuecoders.com"
                class="brand tehover:underline xt-[#212121]"
              >
                <div class="large transition-all duration-700 ease-in-out">
                  <img
                    class="light h-auto block"
                    loading="lazy"
                    src="https://www.valuecoders.com/wp-content/themes/valuecoders/dev-img/logo-valuecosers.svg"
                    alt="Valuecoders"
                    width="400"
                    height="88"
                  />
                  <img
                    class="dark hidden"
                    loading="lazy"
                    src="https://www.valuecoders.com/wp-content/themes/valuecoders/dev-img/logo-valucoders-light.svg"
                    alt="Valuecoders"
                    width="400"
                    height="88"
                  />
                </div>
                <div class="small opacity-0 grid bg-[#ececec] p-[10px] w-[60px] h-[60px] border-r-[50%] items-center absolute top-[10px] transition-all duration-700 ease-in-out  ">
                  <img
                    loading="lazy"
                    src="https://www.valuecoders.com/wp-content/themes/valuecoders/v4.0/header-images/logo-small.svg"
                    alt="Valuecoders"
                    width="80"
                    height="80"
                  />
                </div>
              </a> */}
              {/* <div class="small opacity-0 grid bg-[#ececec] p-[10px] w-[60px] h-[60px] border-r-[50%] items-center absolute top-[10px] transition-all duration-700 ease-in-out  "> */}
              {/* <img
                  loading="lazy"
                  src={Main_Logo}
                  alt="Valuecoders"
                  width="100"
                  height="100"
                /> */}
              {/* </div> */}
              {/* <h1 className="text-3xl text-white">Solo Source</h1> */}
              <img
                // loading="lazy"
                src={Main_Logo}
                alt="Valuecoders"
                width="170"
                height="80"
              />
              <div class="hamberger-menu">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
              </div>
            </div>
            <div class="header-item-right flex basis-[80%] items-center justify-center">
              {/* <nav>
                <ul>
                  <li className="menu-item-has-children hover:border-b-2 border-yellow-400  inline-block transition-all duration-300 ease-in-out">
                    <a
                      href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                      class="linkhover:underline  relative no-underline text-[16px] leading-5 pt-0 pr-[10px] pb-[35px] pl-[10px] border-none outline-none text-white font-semibold"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="menu-item-has-children hover:border-b-2 border-yellow-400  inline-block transition-all duration-300 ease-in-out">
                    <a
                      href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                      class="linkhover:underline  relative no-underline text-[16px] leading-5 pt-0 pr-[10px] pb-[35px] pl-[10px] border-none outline-none text-white font-semibold"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="menu-item-has-children hover:border-b-2 border-yellow-400  inline-block transition-all duration-300 ease-in-out">
                    <a
                      href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                      class="linkhover:underline  relative no-underline text-[16px] leading-5 pt-0 pr-[10px] pb-[35px] pl-[10px] border-none outline-none text-white font-semibold"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="menu-item-has-children hover:border-b-2 border-yellow-400  inline-block transition-all duration-300 ease-in-out">
                    <a
                      href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                      class="linkhover:underline  relative no-underline text-[16px] leading-5 pt-0 pr-[10px] pb-[35px] pl-[10px] border-none outline-none text-white font-semibold"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="menu-item-has-children hover:border-b-2 border-yellow-400  inline-block transition-all duration-300 ease-in-out">
                    <a
                      href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                      class="linkhover:underline  relative no-underline text-[16px] leading-5 pt-0 pr-[10px] pb-[35px] pl-[10px] border-none outline-none text-white font-semibold"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="menu-item-has-children hover:border-b-2 border-yellow-400  inline-block transition-all duration-300 ease-in-out">
                    <a
                      href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                      class="linkhover:underline  relative no-underline text-[16px] leading-5 pt-0 pr-[10px] pb-[35px] pl-[10px] border-none outline-none text-white font-semibold"
                    >
                      About Us
                    </a>
                  </li>
                </ul>
              </nav> */}
              <div className="relative container mx-auto">
                {/* Your nav goes here */}
                <nav className="relative">
                  <ul className="flex space-x-4">
                    <li className="menu-item-has-children hover:border-b-2 border-yellow-400  inline-block transition-all duration-300 ease-in-out group">
                      <a
                        href="#"
                        className=" link relative no-underline text-[16px] leading-5 pt-0 pr-[10px] pb-[35px] pl-[10px] border-none outline-none text-white font-semibold"
                      >
                        About us
                      </a>
                      <div className="absolute hidden group-hover:block left-1/2 transform -translate-x-1/2 w-[1480px] bg-white shadow-lg rounded-lg mt-1">
                        <div className="flex">
                          <div className="w-1/4 bg-gray-50 p-4 min-h-[400px]">
                            <ul>
                              <li className="group/item">
                                <a
                                  href="#"
                                  className="hover:underline block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-md group-hover/item:bg-blue-50"
                                >
                                  Our Mission & vision
                                </a>
                              </li>

                              <li className="group/item">
                                <a
                                  href="#"
                                  className="hover:underline block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-md group-hover/item:bg-blue-50"
                                >
                                  Our Leadership team
                                </a>
                              </li>
                              <li className="group/item">
                                <a
                                  href="#"
                                  className="hover:underline block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-md group-hover/item:bg-blue-50"
                                >
                                  Why Choose Solo Source?
                                </a>
                              </li>
                              <li className="group/item">
                                <a
                                  href="#"
                                  className="hover:underline block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-md group-hover/item:bg-blue-50"
                                >
                                  Location & Presence (Saudi Arabia & Bahrain)
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu-item-has-children hover:border-b-2 border-yellow-400  inline-block transition-all duration-300 ease-in-out group">
                      <a
                        href="#"
                        className=" link relative no-underline text-[16px] leading-5 pt-0 pr-[10px] pb-[35px] pl-[10px] border-none outline-none text-white font-semibold"
                      >
                        Our Services
                      </a>
                      <div className="absolute hidden group-hover:block left-1/2 transform -translate-x-1/2 w-[1480px] bg-white shadow-lg rounded-lg mt-1">
                        <div className="flex">
                          <div className="w-1/4 bg-gray-50 p-4 min-h-[400px]">
                            <ul>
                              <li className="group/item">
                                <a
                                  href="#"
                                  className="hover:underline block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-md group-hover/item:bg-blue-50"
                                >
                                  IT Consulting & Solution
                                </a>
                                {/* Right Side Content for Web Development */}
                                <div className="absolute left-1/4 top-0 w-3/4 h-full hidden group-hover/item:block p-6">
                                  <div className="grid grid-cols-3 gap-6">
                                    <div>
                                      <h3 className="text-lg font-bold text-gray-800 mb-4">
                                        Digital Transformation
                                      </h3>
                                      <h3 className="text-lg font-bold text-gray-800 mb-4">
                                        Cloud Solutions
                                      </h3>
                                      <h3 className="text-lg font-bold text-gray-800 mb-4">
                                        Cybersecurity
                                      </h3>
                                      <h3 className="text-lg font-bold text-gray-800 mb-4">
                                        Software Development
                                      </h3>
                                      <h3 className="text-lg font-bold text-gray-800 mb-4">
                                        AI & Data Analytics
                                      </h3>
                                      {/* <ul>
                                        <li className="mb-3">
                                          <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-blue-600"
                                          >
                                            React.js
                                          </a>
                                        </li>
                                        <li className="mb-3">
                                          <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-blue-600"
                                          >
                                            Angular
                                          </a>
                                        </li>
                                        <li className="mb-3">
                                          <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-blue-600"
                                          >
                                            Vue.js
                                          </a>
                                        </li>
                                      </ul> */}
                                    </div>
                                    {/* <div>
                                      <h3 className="text-lg font-bold text-gray-800 mb-4">
                                        Backend
                                      </h3>
                                      <ul>
                                        <li className="mb-3">
                                          <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-blue-600"
                                          >
                                            Node.js
                                          </a>
                                        </li>
                                        <li className="mb-3">
                                          <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-blue-600"
                                          >
                                            Python
                                          </a>
                                        </li>
                                        <li className="mb-3">
                                          <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-blue-600"
                                          >
                                            Java
                                          </a>
                                        </li>
                                      </ul>
                                    </div> */}
                                    {/* <div>
                                      <h3 className="text-lg font-bold text-gray-800 mb-4">
                                        Database
                                      </h3>
                                      <ul>
                                        <li className="mb-3">
                                          <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-blue-600"
                                          >
                                            MongoDB
                                          </a>
                                        </li>
                                        <li className="mb-3">
                                          <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-blue-600"
                                          >
                                            MySQL
                                          </a>
                                        </li>
                                        <li className="mb-3">
                                          <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-blue-600"
                                          >
                                            PostgreSQL
                                          </a>
                                        </li>
                                      </ul>
                                    </div> */}
                                  </div>
                                </div>
                              </li>

                              <li className="group/item">
                                <a
                                  href="#"
                                  className="hover:underline block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-md group-hover/item:bg-blue-50"
                                >
                                  Business Consulting
                                </a>
                                {/* Right Side Content for Web Development */}
                                <div className="absolute left-1/4 top-0 w-3/4 h-full hidden group-hover/item:block p-6">
                                  <div className="grid grid-cols-3 gap-6">
                                    <div>
                                      <h3 className="text-lg font-bold text-gray-800 mb-4">
                                        Strategy & Operation
                                      </h3>
                                      <h3 className="text-lg font-bold text-gray-800 mb-4">
                                        Process Optimization
                                      </h3>
                                      <h3 className="text-lg font-bold text-gray-800 mb-4">
                                        Compliance & Risk Management
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="group/item">
                                <a
                                  href="#"
                                  className="hover:underline block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-md group-hover/item:bg-blue-50"
                                >
                                  Tailored Talent Solutions
                                </a>
                                {/* Right Side Content for Web Development */}
                                <div className="absolute left-1/4 top-0 w-3/4 h-full hidden group-hover/item:block p-6">
                                  <div className="grid grid-cols-3 gap-6">
                                    <div>
                                      <h3 className="text-lg font-bold text-gray-800 mb-4">
                                        IT & Business Staffing
                                      </h3>
                                      <h3 className="text-lg font-bold text-gray-800 mb-4">
                                        Contract & Permanent Hiring
                                      </h3>
                                      <h3 className="text-lg font-bold text-gray-800 mb-4">
                                        Remote & On-Site Workforce
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="menu-item-has-children hover:border-b-2 border-yellow-400  inline-block transition-all duration-300 ease-in-out group">
                      <a
                        href="#"
                        className=" link relative no-underline text-[16px] leading-5 pt-0 pr-[10px] pb-[35px] pl-[10px] border-none outline-none text-white font-semibold"
                      >
                        Industries We Serve
                      </a>
                      <div className="absolute hidden group-hover:block left-1/2 transform -translate-x-1/2 w-[1480px] bg-white shadow-lg rounded-lg mt-1">
                        <div className="flex">
                          <div className="w-1/4 bg-gray-50 p-4 min-h-[400px]">
                            <ul>
                              <li className="group/item">
                                <a
                                  href="#"
                                  className="hover:underline block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-md group-hover/item:bg-blue-50"
                                >
                                  Banking & FinTech
                                </a>
                              </li>
                              <li className="group/item">
                                <a
                                  href="#"
                                  className="hover:underline block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-md group-hover/item:bg-blue-50"
                                >
                                  IT & Technology
                                </a>
                              </li>
                              <li className="group/item">
                                <a
                                  href="#"
                                  className="hover:underline block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-md group-hover/item:bg-blue-50"
                                >
                                  Entertainment & Media
                                </a>
                              </li>
                              <li className="group/item">
                                <a
                                  href="#"
                                  className="hover:underline block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-md group-hover/item:bg-blue-50"
                                >
                                  Government & Public Sector
                                </a>
                              </li>
                              <li className="group/item">
                                <a
                                  href="#"
                                  className="hover:underline block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-md group-hover/item:bg-blue-50"
                                >
                                  Health Care & Life Sciences
                                </a>
                              </li>
                              <li className="group/item">
                                <a
                                  href="#"
                                  className="hover:underline block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-md group-hover/item:bg-blue-50"
                                >
                                  Logistics & Supply Chain
                                </a>
                              </li>
                              <li className="group/item">
                                <a
                                  href="#"
                                  className="hover:underline block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-md group-hover/item:bg-blue-50"
                                >
                                  Education & E-Learning
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu-item-has-children hover:border-b-2 border-yellow-400  inline-block transition-all duration-300 ease-in-out group">
                      <a
                        href="#"
                        className=" link relative no-underline text-[16px] leading-5 pt-0 pr-[10px] pb-[35px] pl-[10px] border-none outline-none text-white font-semibold"
                      >
                        Careers
                      </a>
                      <div className="absolute hidden group-hover:block left-1/2 transform -translate-x-1/2 w-[1480px] bg-white shadow-lg rounded-lg mt-1">
                        <div className="flex">
                          <div className="w-1/4 bg-gray-50 p-4 min-h-[400px]">
                            <ul>
                              <li className="group/item">
                                <a
                                  href="#"
                                  className="hover:underline block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-md group-hover/item:bg-blue-50"
                                >
                                  Life at Solo Source
                                </a>
                              </li>
                              <li className="group/item">
                                <a
                                  href="#"
                                  className="hover:underline block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-md group-hover/item:bg-blue-50"
                                >
                                  Job Openings
                                </a>
                              </li>
                              <li className="group/item">
                                <a
                                  href="#"
                                  className="hover:underline block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-md group-hover/item:bg-blue-50"
                                >
                                  Apply Now
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu-item-has-children hover:border-b-2 border-yellow-400  inline-block transition-all duration-300 ease-in-out group">
                      <a
                        href="#"
                        className=" link relative no-underline text-[16px] leading-5 pt-0 pr-[10px] pb-[35px] pl-[10px] border-none outline-none text-white font-semibold"
                      >
                        Contact Us
                      </a>
                      <div className="absolute hidden group-hover:block left-1/2 transform -translate-x-1/2 w-[1480px] bg-white shadow-lg rounded-lg mt-1">
                        <div className="flex">
                          <div className="w-1/4 bg-gray-50 p-4 min-h-[400px]">
                            <ul>
                              <li className="group/item">
                                <a
                                  href="#"
                                  className="hover:underline block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-md group-hover/item:bg-blue-50"
                                >
                                  Inquiry Form
                                </a>
                              </li>
                              <li className="group/item">
                                <a
                                  href="#"
                                  className="hover:underline block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-md group-hover/item:bg-blue-50"
                                >
                                  Office Location & Contact Details
                                </a>
                              </li>
                              <li className="group/item">
                                <a
                                  href="#"
                                  className="hover:underline block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-md group-hover/item:bg-blue-50"
                                >
                                  Apply Now
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* <nav>
        <div className="max-w-7xl  ml-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex justify-start items-center h-20">
            <Link to="/" className="flex items-center space-x-3">
              <h1 className="text-white text-4xl">LOGO</h1>
            </Link>
            <div className="hidden lg:flex items-center space-x-8 ml-8">
              {menuItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.key}
                  className={`text-base font-medium relative inline-block py-2 rounded-md ${
                    location.pathname === item.key
                      ? "text-white"
                      : "text-white group hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`custom-link absolute bottom-0 left-0 block h-[2px] bg-white transition-all duration-300 ${
                      location.pathname === item.key
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav> */}
        {/* <Drawer
        title="Menu"
        placement="right"
        onClose={() => setIsMenuOpen(false)}
        open={isMenuOpen}
        className="lg:hidden !bg-black text-white"
        closeIcon={<CloseOutlined className="!text-white" />}
      >
        <div className="flex flex-col space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              to={item.key}
              onClick={() => setIsMenuOpen(false)}
              className={`text-base font-medium relative inline-block py-2 rounded-md ${
                location.pathname === item.key
                  ? "text-blue-500 font-bold  underline"
                  : "text-white hover:text-black"
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 block h-[2px] bg-black transition-all duration-300 ${
                  location.pathname === item.key
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>
      </Drawer> */}
      </header>
    </>
  );
};

export default Navbar;
