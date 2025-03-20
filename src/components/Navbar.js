import { useState, useEffect } from "react";
import { Dropdown, Menu } from "antd";
import { DownOutlined, PhoneOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import Main_Logo from "../assets/Hero-logo.png";
import Main_Logo1 from "../assets/Hero-logo1.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // // ✅ Fix hash-based navigation
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const menuItemStyle = {
    padding: "12px 20px",
    fontSize: "18px",
    fontWeight: "500",
    color: "#333",
    transition: "all 0.2s ease-in-out",
    borderRadius: "6px",
  };

  const servicesMenu = (
    <Menu style={menuItemStyle}>
      <Menu.SubMenu
        key="itconsulting"
        title={
          <span className="font-medium text-gray-700">
            IT Consulting & Solutions
          </span>
        }
      >
        {[
          {
            key: "2",
            label: "Digital Transformation",
            link: "/services/ItConsulting#digitalTransformation",
          },
          {
            key: "3",
            label: "Cloud Solutions",
            link: "/services/ItConsulting#cloudSolutions",
          },
          {
            key: "4",
            label: "Cyber Security",
            link: "/services/ItConsulting#cyberSecurity",
          },
          {
            key: "5",
            label: "Software Development",
            link: "/services/ItConsulting#softwareDevelopment",
          },
          {
            key: "6",
            label: "AI & Data Analytics",
            link: "/services/ItConsulting#ai",
          },
          {
            key: "7",
            label: "Enterprise Architecture",
            link: "/services/ItConsulting#enterpriseArchitecture",
          },
        ].map((item) => (
          <Menu.Item key={item.key} style={menuItemStyle}>
            <Link to={item.link}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu.SubMenu>
      <Menu.SubMenu
        key="businessconsulting"
        title={
          <span className="font-medium text-gray-700">Business Consulting</span>
        }
      >
        {[
          {
            key: "9",
            label: "Strategy & Operations",
            link: "/services/BusinessConsulting#strategyandoperations",
          },
          {
            key: "10",
            label: "Process Optimization",
            link: "/services/BusinessConsulting#processoptimization",
          },
          {
            key: "11",
            label: "Risk Management",
            link: "/services/BusinessConsulting#riskManagement",
          },
        ].map((item) => (
          <Menu.Item key={item.key} style={menuItemStyle}>
            <Link to={item.link}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu.SubMenu>
      <Menu.SubMenu
        key="tailoredtalent"
        title={
          <span className="font-medium text-gray-700">
            Tailored Talent Solutions
          </span>
        }
      >
        {[
          {
            key: "12",
            label: "IT & Business Staffing",
            link: "/services/TailoredTalent#itStaffing",
          },
          {
            key: "13",
            label: "Contract & Permanent Hiring",
            link: "/services/TailoredTalent#contractHiring",
          },
          {
            key: "14",
            label: "Remote & On-Site Workforce",
            link: "/services/TailoredTalent#remoteWorkforce",
          },
        ].map((item) => (
          <Menu.Item key={item.key} style={menuItemStyle}>
            <Link to={item.link}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu.SubMenu>
    </Menu>
  );
  const industriesMenu = (
    <Menu style={menuItemStyle}>
      {[
        { key: "1", path: "/industries/banking", label: "Banking & Fintech" },
        {
          key: "2",
          path: "/industries/it",
          label: "Information Technology & TMT",
        },
        {
          key: "3",
          path: "/industries/digital",
          label: "Digital Entertainment",
        },
        {
          key: "4",
          path: "/industries/healthcare",
          label: "Health Care & Life Sciences",
        },
        {
          key: "5",
          path: "/industries/logistics",
          label: "Logistic & Supply Chain",
        },
        {
          key: "6",
          path: "/industries/education",
          label: "Education & E-learning",
        },
        {
          key: "7",
          path: "/industries/government",
          label: "Government & Public Sector",
        },
      ].map((industry) => (
        <Menu.Item
          key={industry.key}
          style={menuItemStyle}
          className="hover:bg-gray-100 px-4 py-2 rounded-md"
        >
          <Link to={industry.path}>{industry.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  const linkClass = (path) => {
    return `transition px-2 py-2 rounded-md font-medium border-b-2 ${
      location.pathname === path
        ? isScrolled
          ? "bg-teal-950 text-white "
          : "bg-white text-black"
        : isScrolled
        ? "text-black border-transparent hover:text-teal-900 hover:border-teal-950 rounded-none"
        : "text-white border-transparent hover:text-gray-300 hover:border-teal-300 rounded-none"
    }`;
  };

  const iconClass = `transition ${
    isScrolled
      ? "text-black group-hover:text-teal-500"
      : "text-white group-hover:text-gray-300"
  }`;

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-50 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-2 px-6">
        {/* ✅ Logo */}
        <div>
          <Link to="/">
            <img
              src={isScrolled ? Main_Logo : Main_Logo1}
              alt="Logo"
              className="h-16 w-32"
            />
          </Link>
        </div>

        {/* ✅ Navigation Links */}
        <div className="flex space-x-8 ml-auto items-center">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/aboutus" className={linkClass("/aboutus")}>
            About Us
          </Link>

          {/* ✅ Services Dropdown */}
          <Dropdown
            overlay={servicesMenu}
            trigger={["hover"]}
            placement="bottom"
            overlayClassName="rounded-xl shadow-lg"
          >
            <div
              className={`group ${linkClass(
                "/services"
              )} cursor-pointer flex items-center`}
            >
              <span>Our Services</span>
            </div>
          </Dropdown>
          {/* <Dropdown
            overlay={industriesMenu}
            trigger={["hover"]}
            placement="bottom"
            overlayClassName="rounded-xl shadow-lg"
          >
            <div
              className={`group ${linkClass(
                "/industries"
              )} cursor-pointer flex items-center`}
            >
              <span>Industries We Serve</span>
            </div>
          </Dropdown> */}
          <Link to="/industries " className={linkClass("/industries")}>
            Industries We Serve
          </Link>

          <Link to="/careers" className={linkClass("/careers")}>
            Find A Job
          </Link>
          <Link to="/contact" className={linkClass("/contact")}>
            <PhoneOutlined className="mr-1" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
