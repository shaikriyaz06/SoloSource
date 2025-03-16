import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BankingAndFintech() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const content = {
    heading: "Driving Innovation in Banking & Fintech",
    overview:
      "In the fast-paced world of finance, agility and security are paramount. Solo Source empowers banking and fintech institutions to navigate digital disruption, enhance customer experiences, and maintain regulatory compliance. We deliver tailored solutions that drive efficiency, security, and growth in this dynamic sector.",
    solutions: [
      {
        title: "Secure Cloud Migration",
        description:
          "Enterprise-grade security protocols ensuring safe transition of sensitive financial data to cloud infrastructure.",
      },
      {
        title: "AI-Powered Fraud Detection",
        description:
          "Advanced machine learning algorithms to detect and prevent fraudulent activities in real-time.",
      },
      {
        title: "Digital Transformation",
        description:
          "End-to-end strategies for seamless customer experiences across channels.",
      },
      {
        title: "Regulatory Compliance Tech",
        description:
          "Automated compliance solutions to keep your operations aligned with evolving regulations.",
      },
    ],
    services: [
      {
        title: "Digital Banking Platform",
        description:
          "Next-gen banking solutions leveraging cutting-edge technology for seamless experiences.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
        features: [
          "Mobile-First Design",
          "Real-time Transactions",
          "Secure Authentication",
        ],
      },
      {
        title: "Payment Solutions",
        description:
          "Comprehensive infrastructure enabling secure, fast, and seamless transactions.",
        image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d",
        features: [
          "Contactless Payments",
          "Cross-border Transfers",
          "Payment Analytics",
        ],
      },
    ],
    benefits: [
      {
        title: "Enhanced Security",
        description:
          "State-of-the-art security measures protecting sensitive financial data",
        icon: "shield-alt",
      },
      {
        title: "Improved Engagement",
        description:
          "Better customer experience leading to higher retention rates",
        icon: "users",
      },
      {
        title: "Operational Efficiency",
        description: "Streamlined processes reducing operational costs",
        icon: "chart-line",
      },
      {
        title: "Regulatory Compliance",
        description: "Automated compliance with evolving financial regulations",
        icon: "check-circle",
      },
    ],
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44"
          alt="Banking Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div
          className="relative text-center text-white max-w-4xl mx-auto px-4"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            {content.heading}
          </h1>
          <p className="text-lg md:text-xl mt-6 text-gray-300">
            {content.overview}
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
            data-aos="fade-up"
          >
            Our Solutions
          </h2>
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left side - Image */}
            <div className="md:w-1/2" data-aos="fade-right">
              <div className="h-[600px] rounded-lg overflow-hidden sticky top-24">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3"
                  alt="Banking Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right side - Solutions List */}
            <div className="md:w-1/2 space-y-12" data-aos="fade-left">
              {content.solutions.map((solution, index) => (
                <div
                  key={index}
                  className="transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <h3 className="text-2xl font-bold text-white border-b-2 border-gray-700 pb-2 inline-block">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mt-4">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
            data-aos="fade-up"
          >
            Key Benefits
          </h2>
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left side - Image */}
            <div className="md:w-1/2" data-aos="fade-right">
              <div className="h-[600px] rounded-lg overflow-hidden sticky top-24">
                <img
                  src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3"
                  alt="Banking Benefits"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>

            {/* Right side - Benefits List */}
            <div className="md:w-1/2 space-y-12" data-aos="fade-left">
              {content.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                      <i
                        className={`fas fa-${benefit.icon} text-xl text-white`}
                      ></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed pl-16">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
