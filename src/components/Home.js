// src/components/Home.js
import React, { useRef } from "react";
import { Card, Row, Col, Typography, Carousel, Button, Collapse } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import herovideo from "../assets/home-video.mp4";
import Hero_Logo from "../assets/Hero_Logo.webp";
const { Title, Paragraph } = Typography;
// const { Panel } = Collapse;

const Home = () => {
  return (
    <>
      <section className="hero-section pt-[145px] pr-0 pl-[50px] pb-[70px]  h-[100vh] items-center relative bg-[rgba(4,12,23,.5)]">
        {/* <video
          autoPlay
          loop
          muted
          className="z-[-1] absolute inset-0 w-full h-full object-cover"
        >
          <source src={herovideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <img
          src={Hero_Logo}
          className="z-[-1] absolute inset-0 w-full h-full object-cover"
        />
        <div className="home-container">
          <div className="flex items-center flex-wrap">
            <div className="box basis-[85%] text-white">
              <h1 className="mt-16 text-7xl font-bold mb-4 leading-tight">
                Your Trusted Tech Partner
              </h1>
              <p className="text-lg mt-4">
                Empowering Innovation, Engineering Excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Key Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions for your development needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-16 w-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white font-bold">WD</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Web Development
              </h3>
              <p className="text-gray-600 text-center">
                Modern web applications built with cutting-edge technologies and
                responsive design principles.
              </p>
            </div>

            {/* Mobile Development Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-16 w-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white font-bold">MD</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Mobile Development
              </h3>
              <p className="text-gray-600 text-center">
                Native and cross-platform mobile applications for iOS and
                Android platforms.
              </p>
            </div>

            {/* Cloud Solutions Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-16 w-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white font-bold">CS</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Cloud Solutions
              </h3>
              <p className="text-gray-600 text-center">
                Scalable cloud infrastructure and deployment solutions for
                enterprise applications.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide innovative solutions across various industries, helping
              businesses transform and grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Healthcare */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Healthcare
              </h3>
              <p className="text-gray-600">
                Digital solutions for modern healthcare providers and
                organizations
              </p>
            </div>

            {/* Finance */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Finance</h3>
              <p className="text-gray-600">
                Secure and efficient solutions for financial institutions
              </p>
            </div>

            {/* Education */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Education
              </h3>
              <p className="text-gray-600">
                Modern learning solutions for educational institutions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              What sets us apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Highly skilled professionals with years of industry experience
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick turnaround time without compromising quality
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Cutting-edge solutions using latest technologies
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock technical support and assistance
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-gray-400">Team Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <p className="text-gray-400">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your ideas to life. Our team is
            ready to start working on your project.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Contact Us
              </button>
            </Link>
            <Link to="/services">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
