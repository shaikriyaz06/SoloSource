import React, { useEffect, useRef } from "react";
import serviceCard1 from "../assets/IT-Consulting-Services-2-.jpg";
import serviceCard2 from "../assets/business-strategy.jpeg";
import serviceCard3 from "../assets/service-cards3.jpeg";
import { Link } from "react-router-dom";
import Hero_Logo from "../assets/Hero_Logo.webp";
import { Button, Card, Col, Row } from "antd";
import banking from "../assets/bankingfintech.png";
import government from "../assets/government.webp";
import elearning from "../assets/e-learning.png";
import logistics from "../assets/logistics.jpg";
import IT from "../assets/IT&TMT.avif";
import ET from "../assets/Entertainment.avif";
import Health from "../assets/Health.avif";
import {
  CheckCircleOutlined,
  ThunderboltOutlined,
  BulbOutlined,
  ShakeOutlined,
} from "@ant-design/icons";

const Home = () => {
  const services = [
    {
      link: "/services/ItConsulting",
      title: "IT Consulting & Solutions",
      description:
        "Empowering businesses with innovative technology and strategic guidance.Unlock your potential with tailored, future-ready solutions.",
      img: serviceCard1,
      // color: "bg-blue-900",
      buttonColor: "text-blue-900",
      hoverColor: "hover:bg-blue-100",
    },
    {
      link: "/services/BusinessConsulting",
      title: "Business Consulting",
      description:
        "Strategic business solutions and consulting services to drive your organization's growth and success.",
      img: serviceCard2,
      // color: "bg-green-900",
      buttonColor: "text-green-900",
      hoverColor: "hover:bg-green-100",
    },
    {
      link: "/services/TailoredTalent",
      title: "Tailored Talent Solutions",
      description:
        "Custom staffing and talent management solutions to build your ideal team and drive innovation.",
      img: serviceCard3,
      // color: "bg-purple-900",
      buttonColor: "text-purple-900",
      hoverColor: "hover:bg-purple-100",
    },
  ];
  const industries = [
    {
      link: "/industries",
      color: "green",
      title: "Banking & Fintech",
      description: "Innovative financial solutions for the digital age",
      image: banking,
    },
    {
      link: "/industries",
      color: "blue",
      title: "Information Technology & TMT",
      description:
        "Cutting-edge solutions for technology and telecommunications",
      image: IT,
    },
    {
      link: "/industries",
      color: "purple",
      title: "Digital Entertainment",
      description:
        "Engaging digital experiences for the entertainment industry",
      image: ET,
    },
    {
      link: "/industries",
      color: "red",
      title: "Health Care & Life Sciences",
      description: "Advanced solutions for healthcare and research",
      image: Health,
    },
    {
      link: "/industries",
      color: "yellow",
      title: "Logistics & Supply Chain",
      description: "Optimized solutions for modern supply chain management",
      image: logistics,
    },
    {
      link: "/industries",
      color: "cyan",
      title: "Education & E-learning",
      description: "Digital platforms for modern education delivery",
      image: elearning,
    },
  ];
  return (
    <>
      <section className="hero-section pt-[145px] pr-0 pl-[50px] pb-[70px]  h-[100vh] items-center relative bg-[rgba(4,12,23,.5)]">
        <img
          src={Hero_Logo}
          className="z-[-1] absolute inset-0 w-full h-full object-cover"
        />
        <div className="home-container">
          <div className="flex items-center flex-wrap">
            <div className="box basis-[85%] text-white" data-aos="fade-right">
              <h1 className="mt-16 text-7xl font-bold mb-4 leading-tight">
                Your Trusted <span className="italic"> Tech Partner</span>
              </h1>
              <p className="text-lg mt-4">
                Empowering Innovation, Engineering Excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <div className="px-8 rounded-sm bg-gradient-to-r from-[#00232E] via-[#00788C] to-[#01495f]">
        <section className="pt-10 pb-20 bg-gradient-to-r from-[#00232E] via-[#00788C] to-[#01495f]   relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-5xl pb-2 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 animate-fade-in">
                Our Key Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Comprehensive solutions for your development needs
              </p>
            </div>

            <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4">
              <div className="flex flex-wrap gap-6 justify-center">
                {services.map((service, index) => (
                  <Card
                    key={index}
                    data-aos="fade-right"
                    data-aos-delay={index * 150} // Stagger effect for each card
                    data-aos-duration="800"
                    className="backdrop-blur-sm bg-white/10 border border-white/20 w-full md:w-[30%]"
                  >
                    <img
                      className="h-44 w-full object-cover"
                      src={service.img}
                      alt={service.title}
                    />
                    <div className="p-6 flex flex-col justify-between min-h-[220px] backdrop-blur-sm">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:scale-105 transition-transform duration-300 ease-out">
                          {service.title}
                        </h3>
                        <p className="text-lg text-gray-200/90 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <Link to={service.link}>
                        <Button
                          type="default"
                          className={`px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 
            rounded-full transition-all duration-300 font-semibold text-white
            hover:bg-white/20 hover:border-white/50 hover:scale-105 
            active:scale-95 `}
                        >
                          <span className="relative z-10">Learn More</span>
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="pt-10 pb-20 bg-gradient-to-r from-[#00232E] via-[#00788C] to-[#01495f] relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-pattern transform rotate-45 scale-150"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 animate-fade-in">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
                We provide innovative solutions across various industries,
                helping businesses transform and grow
              </p>
            </div>

            {/* <div
              className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              data-aos="zoom-in"
            >
              <Link to="/industries/banking">
                <div
                  className="group backdrop-blur-sm bg-white/10 p-8 rounded-xl border border-white/20 
        hover:border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 
        hover:-translate-y-2 hover:cursor-pointer"
                >
                  <div className="text-green-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-16 h-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">
                    Banking & Fintech
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Innovative financial solutions for the digital age
                  </p>
                </div>
              </Link>
              <Link to="/industries/it">
                <div
                  className="group backdrop-blur-sm bg-white/10 p-8 rounded-xl border border-white/20 
        hover:border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 
        hover:-translate-y-2 hover:cursor-pointer"
                >
                  <div className="text-blue-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-16 h-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    Information Technology & TMT
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Cutting-edge solutions for technology and telecommunications
                  </p>
                </div>
              </Link>
              <Link to="/industries/digital">
                <div
                  className="group backdrop-blur-sm bg-white/10 p-8 rounded-xl border border-white/20 
        hover:border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 
        hover:-translate-y-2 hover:cursor-pointer"
                >
                  <div className="text-purple-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-16 h-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    Digital Entertainment
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Engaging digital experiences for the entertainment industry
                  </p>
                </div>
              </Link>
              <Link to="/industries/healthcare">
                <div
                  className="group backdrop-blur-sm bg-white/10 p-8 rounded-xl border border-white/20 
        hover:border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 
        hover:-translate-y-2 hover:cursor-pointer"
                >
                  <div className="text-red-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-16 h-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-300 transition-colors duration-300">
                    Health Care & Life Sciences
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Advanced solutions for healthcare and research
                  </p>
                </div>
              </Link>
              <Link to="/industries/logistics">
                <div
                  className="group backdrop-blur-sm bg-white/10 p-8 rounded-xl border border-white/20 
        hover:border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 
        hover:-translate-y-2 hover:cursor-pointer"
                >
                  <div className="text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-16 h-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                    Logistics & Supply Chain
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Optimized solutions for modern supply chain management
                  </p>
                </div>
              </Link>
              <Link to="/industries/education">
                <div
                  className="group backdrop-blur-sm bg-white/10 p-8 rounded-xl border border-white/20 
        hover:border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 
        hover:-translate-y-2 hover:cursor-pointer"
                >
                  <div className="text-cyan-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-16 h-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    Education & E-learning
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Digital platforms for modern education delivery
                  </p>
                </div>
              </Link>
            </div> */}
            <div className="max-w-7xl">
              <Row gutter={[24, 24]} style={{ marginLeft: 0, marginRight: 0 }}>
                {industries.map((industry, index) => (
                  <Col xs={24} sm={12} lg={8} key={index}>
                    <Link to={industry.link}>
                      <Card
                        className="custom-card shadow-lg rounded-s-3xl cursor-pointer shadow-blue-200 h-full hover:shadow-lg transition-shadow duration-300 transform perspective-1000"
                        bordered={false}
                        data-aos="flip-left"
                        data-aos-duration="1000"
                      >
                        <div className="relative text-center transform-style-preserve-3d transition-transform duration-300 ease-in-out hover:rotate-y-180">
                          <div className="relative">
                            <img
                              src={industry.image}
                              alt={industry.title}
                              className="w-full h-72 object-cover rounded-md transform transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                            <div className="absolute inset-0 flex flex-col items-start justify-end bg-black bg-opacity-45 hover:bg-opacity-10 rounded-md px-4 pb-4">
                              <p className="text-[#70eee8] font-bold text-lg mb-2 text-left">
                                {industry.title}
                              </p>
                              <p className="text-white text-md font-semibold text-left">
                                {industry.description}
                              </p>
                              <p className="text-[#8cd521] text-md font-bold text-left">
                                Readmore
                              </p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </section>

        <hr />
        {/* <section className="pt-10 pb-20  bg-gradient-to-r from-[#00232E] via-[#00788C] to-[#01495f] group text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-lg">
                In a rapidly evolving business landscape, Solo Source stands out
                as your strategic advantage.
              </p>
            </div>

            <div
              data-aos="fade-right"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
            >
              <div className="text-center p-6 relative">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Expertise Without Compromise
                </h3>
                <p>Deep domain knowledge across IT and business landscapes.</p>

                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-4/5 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              </div>

              <div className="text-center p-6 relative">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Holistic Solutions
                </h3>
                <p>Bridging technology, strategy, and talent under one roof.</p>

                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-4/5 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              </div>

              <div className="text-center p-6 relative">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-xl">💡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Future-Ready Results
                </h3>
                <p>
                  We don't just solve problems—we future-proof your business{" "}
                </p>

                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-4/5 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              </div>

              <div className="text-center p-6 relative">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Client-Centric DNA
                </h3>
                <p>Your goals drive every decision we make</p>
              </div>

              <div className="lg:hidden absolute left-4 right-4 top-1/3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent md:hidden"></div>
              <div className="lg:hidden absolute left-4 right-4 top-2/3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent md:hidden"></div>

              <div className="hidden md:block lg:hidden absolute left-4 right-4 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
          </div>
        </section> */}
        <section className="pt-20 pb-28 bg-gradient-to-br from-[#00232E] via-[#00788C] to-[#01495f] text-white">
          <div className="container mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-5xl font-extrabold mb-6 tracking-wide leading-tight">
                Why Choose Us
              </h2>
              <p className="text-lg max-w-3xl mx-auto leading-relaxed opacity-90">
                In a rapidly evolving business landscape, Solo Source stands out
                as your strategic advantage.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
              {/* Feature 1 */}
              <div
                className="group text-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110">
                  <CheckCircleOutlined className="text-blue-400 text-5xl transition-transform duration-300 group-hover:rotate-[10deg]" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 group-hover:text-blue-300">
                  Expertise Without Compromise
                </h3>
                <p className="text-base leading-relaxed opacity-80">
                  Deep domain knowledge across IT and business landscapes.
                </p>
              </div>

              {/* Separator */}
              <div className="hidden lg:block absolute top-0 bottom-0 left-1/4 w-px bg-white/20" />

              {/* Feature 2 */}
              <div
                className="group text-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110">
                  <ThunderboltOutlined className="text-green-400 text-5xl transition-transform duration-300 group-hover:rotate-[10deg]" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 group-hover:text-green-300">
                  Holistic Solutions
                </h3>
                <p className="text-base leading-relaxed opacity-80">
                  Bridging technology, strategy, and talent under one roof.
                </p>
              </div>

              {/* Separator */}
              <div className="hidden lg:block absolute top-0 bottom-0 left-2/4 w-px bg-white/20" />

              {/* Feature 3 */}
              <div
                className="group text-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110">
                  <BulbOutlined className="text-purple-400 text-5xl transition-transform duration-300 group-hover:rotate-[10deg]" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 group-hover:text-purple-300">
                  Future-Ready Results
                </h3>
                <p className="text-base leading-relaxed opacity-80">
                  We don’t just solve problems—we future-proof your business.
                </p>
              </div>

              {/* Separator */}
              <div className="hidden lg:block absolute top-0 bottom-0 left-3/4 w-px bg-white/20" />

              {/* Feature 4 */}
              <div
                className="group text-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110">
                  <ShakeOutlined className="text-orange-400 text-5xl transition-transform duration-300 group-hover:rotate-[10deg]" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 group-hover:text-orange-300">
                  Client-Centric DNA
                </h3>
                <p className="text-base leading-relaxed opacity-80">
                  Your goals drive every decision we make.
                </p>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="relative pt-10 pb-10  overflow-hidden">
          {/* Background with animated gradient */}
          <div className="absolute inset-0  bg-gradient-to-r from-[#00232E] via-[#00788C] to-[#01495f]">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-96 h-96  rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>
          </div>

          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Main content */}
              <h2
                data-aos="zoom-in"
                className="text-5xl font-bold text-white mb-6 transform hover:scale-105 transition-transform duration-300"
              >
                Ready to Transform Your Ideas Into Reality?
              </h2>

              <p
                data-aos="zoom-in"
                className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto"
              >
                Join hands with our expert team to bring your vision to life.
                We're committed to delivering excellence in every project we
                undertake.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <Link to="/contact" className="group w-full sm:w-auto">
                  <button
                    className="w-full sm:w-auto bg-white px-10 py-4 rounded-full font-semibold
                           text-blue-600 hover:text-white relative overflow-hidden
                           transform hover:-translate-y-1 transition-all duration-300
                           hover:shadow-2xl hover:shadow-white/20 group"
                  >
                    <span
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800
                           translate-y-full group-hover:translate-y-0 transition-transform
                           duration-300"
                    ></span>
                    <span className="relative group-hover:text-white flex items-center justify-center gap-2">
                      Contact Us Now
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </button>
                </Link>

                <Link
                  to="/services/ItConsulting"
                  className="group w-full sm:w-auto"
                >
                  <button
                    className="w-full sm:w-auto px-10 py-4 rounded-full font-semibold
                           border-2 border-white text-white
                           hover:bg-white hover:text-blue-600
                           transform hover:-translate-y-1
                           transition-all duration-300
                           hover:shadow-2xl hover:shadow-white/20"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Explore Services
                      <svg
                        className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>

              {/* Optional Trust Indicators */}
              <div className="mt-12 pt-12 border-t border-white/10">
                <p className="text-blue-100 mb-6">
                  Trusted by Industry Leaders
                </p>
                <div className="flex justify-center items-center gap-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
                  {/* Add your trust indicators/logos here */}
                  <div className="text-white text-opacity-70">
                    ★★★★★ <span className="text-sm">5/5 Average Rating</span>
                  </div>
                  <div className="text-white text-opacity-70">
                    500+ <span className="text-sm">Projects Completed</span>
                  </div>
                  <div className="text-white text-opacity-70">
                    100% <span className="text-sm">Client Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
