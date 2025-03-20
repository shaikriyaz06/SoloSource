import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[80vh] bg-gradient-to-r from-blue-900 to-blue-400 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3")',
            opacity: 0.2,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-3xl" data-aos="fade-up">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Transforming Ideas Into Digital Reality
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're more than just a technology company. We're your partner in
              digital transformation, helping businesses thrive in the digital
              age.
            </p>
          </div>
        </div>
      </section>
      <hr className="border-b-[1px] border-black" />
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from- via-gray-400 to-indigo-50 z-0" />

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Mission Section */}
            <div className="flex-1 relative" data-aos="fade-right">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center transform -rotate-6">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-black">
                    Our Mission
                  </h3>
                </div>
                <div className="pl-16">
                  <p className="text-xl text-gray-800 leading-relaxed">
                    Solo Source empowers businesses to thrive in the digital
                    age. We deliver strategic IT and business solutions,
                    fostering innovation and driving sustainable growth through
                    expert guidance and tailored talent.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-48 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

            {/* Vision Section */}
            <div className="flex-1 relative" data-aos="fade-left">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center transform rotate-6">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-black">
                    Our Vision
                  </h3>
                </div>
                <div className="pl-16">
                  <p className="text-xl text-gray-800 leading-relaxed">
                    To be the trusted partner that transforms organizations,
                    enabling them to achieve unprecedented success through
                    cutting-edge technology and strategic business acumen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-b-[1px] border-black" />
      <section className="py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 z-0" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-y-1/2" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header with Graphic Element */}
            <div className="text-center mb-20 relative" data-aos="fade-up">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-10 blur-2xl"></div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-black relative">
                Who We Are
              </h2>
              <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            </div>

            {/* Main Content with Graphics */}
            <div className="grid md:grid-cols-12 gap-8 items-center mb-20">
              {/* Left Column - Main Text */}
              <div className="md:col-span-7 space-y-8" data-aos="fade-right">
                <div className="relative">
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -left-6 w-20 h-20">
                    <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-pulse"></div>
                    <div className="absolute inset-2 bg-blue-500/20 rounded-full animate-pulse delay-100"></div>
                    <div className="absolute inset-4 bg-blue-500/30 rounded-full animate-pulse delay-200"></div>
                  </div>

                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-black">
                      Your Trusted Technology Partner
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      At Solo Source, we are more than just a consulting firm;
                      we are your trusted partner in IT recruitment, IT
                      outsourcing, and talent sourcing. What sets us apart is
                      not just what we do, but how we do it. We are not just
                      another firm in the crowd. We shine in our unwavering
                      commitment to our international clients, understanding
                      that each one has unique needs and challenges when it
                      comes to recruiting elite tech talent.
                    </p>
                    <div className="flex items-center gap-4 text-gray-800 font-bold">
                      <span className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-lg">
                        Excellence in Technology Solutions
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Graphic Element */}
              <div className="md:col-span-5" data-aos="fade-left">
                <div className="relative">
                  {/* Abstract Shapes */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-20 blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-20 blur-2xl"></div>

                  {/* Main Image/Graphic Container */}
                  <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-xl">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-xl shadow-lg">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                            <svg
                              className="w-6 h-6 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-800">
                            Fast Delivery
                          </h4>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-lg transform translate-x-4">
                          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                            <svg
                              className="w-6 h-6 text-indigo-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                              />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-800">
                            Secure
                          </h4>
                        </div>
                      </div>
                      <div className="space-y-4 pt-8">
                        <div className="bg-white p-4 rounded-xl shadow-lg">
                          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                            <svg
                              className="w-6 h-6 text-purple-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-800">
                            Expert Team
                          </h4>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-lg transform translate-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                            <svg
                              className="w-6 h-6 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                              />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-800">
                            Global Reach
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Content */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p className="text-gray-600 leading-relaxed text-lg">
                  With our deep understanding of the tech landscape and the
                  specific demands of companies worldwide, we tailor our
                  solutions to fit your exact needs, ensuring we are not just
                  meeting expectations but exceeding them.
                </p>
              </div>
              <div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our approach is all about being proactive, efficient, and
                  adaptable to your evolving requirements, and we do this all
                  without any initial fees or hidden risks.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p className="text-xl text-gray-700 font-medium mb-8">
                At Solo Source, we are dedicated to helping you succeed, making
                your goals our own.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300">
                Start Your Journey With Us
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-b-[1px] border-black" />
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-blue-100/40 rounded-full mix-blend-multiply filter blur-xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-indigo-100/40 rounded-full mix-blend-multiply filter blur-xl" />

        <div className="container mx-auto px-6 relative">
          {/* Section Header */}
          <div
            className="text-center max-w-4xl mx-auto mb-20"
            data-aos="fade-up"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-black">
              Why Choose Solo Source?
            </h2>
            <p className="text-gray-800 text-xl leading-relaxed">
              In a rapidly evolving business landscape, Solo Source stands out
              as your strategic advantage. We offer an approach based on:
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div
              className="relative group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-start gap-6">
                <span className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-black text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-black">
                    Expertise Without Compromise
                  </h3>
                  <p className="text-gray-800 text-lg leading-relaxed">
                    Deep domain knowledge across IT and business landscapes.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div
              className="relative group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-start gap-6">
                <span className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-black text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-black">
                    Holistic Solutions
                  </h3>
                  <p className="text-gray-800 text-lg leading-relaxed">
                    Bridging technology, strategy, and talent under one roof.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div
              className="relative group"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex items-start gap-6">
                <span className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-black text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-black">
                    Future-Ready Results
                  </h3>
                  <p className="text-gray-800 text-lg leading-relaxed">
                    We don't just solve problems—we future-proof your business.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div
              className="relative group"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex items-start gap-6">
                <span className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-black text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-black">
                    Client-Centric DNA
                  </h3>
                  <p className="text-gray-800 text-lg leading-relaxed">
                    Your goals drive every decision we make.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
