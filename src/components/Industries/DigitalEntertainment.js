import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DigitalEntertainment() {

  const content = {
    heading: "Transforming Entertainment & Media Experiences",
    overview:
      "In the dynamic world of entertainment and media, delivering personalized and engaging experiences is crucial. Solo Source helps media companies leverage digital technologies to enhance content delivery, optimize audience engagement, and drive revenue growth. We provide solutions that transform the way content is created, distributed, and consumed.",
    solutions: [
      {
        title: "Cloud-Based Content Management and Distribution",
        description:
          "Scalable cloud solutions for efficient content storage, management, and seamless distribution across platforms.",
        icon: "fas fa-cloud-upload-alt"
      },
      {
        title: "Data Analytics for Audience Insights",
        description:
          "Advanced analytics tools to understand audience behavior and deliver personalized content experiences.",
        icon: "fas fa-chart-bar"
      },
      {
        title: "Digital Transformation for Multi-Channel Delivery",
        description:
          "End-to-end digital solutions for consistent content delivery across multiple channels and platforms.",
        icon: "fas fa-tv"
      },
      {
        title: "Cybersecurity for Content Protection",
        description:
          "Robust security measures to protect valuable content assets and intellectual property.",
        icon: "fas fa-shield-alt"
      }
    ],
    benefits: [
      {
        title: "Enhanced Content Delivery",
        description:
          "Improved accessibility and seamless content delivery across all platforms and devices.",
        icon: "fas fa-rocket"
      },
      {
        title: "Increased Audience Engagement",
        description:
          "Better audience retention through personalized experiences and targeted content.",
        icon: "fas fa-users"
      },
      {
        title: "Data-Driven Insights",
        description:
          "Actionable insights for content optimization and audience growth strategies.",
        icon: "fas fa-chart-line"
      },
      {
        title: "Secured Distribution",
        description:
          "Protected content delivery ensuring rights management and preventing unauthorized access.",
        icon: "fas fa-lock"
      }
    ],
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-black">
        <img
          src="https://images.unsplash.com/photo-1578022761797-b8636ac1773c?ixlib=rb-4.0.3"
          alt="Entertainment Hero"
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
              <div className="h-[600px] rounded-xl overflow-hidden sticky top-24">
                <img 
                  src="https://images.unsplash.com/photo-1567443024551-f3e3cc2be754?ixlib=rb-4.0.3"
                  alt="Entertainment Solutions"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>

            {/* Right side - Solutions List */}
            <div className="md:w-1/2 space-y-12" data-aos="fade-left">
              {content.solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="group p-6 rounded-xl hover:bg-gray-800/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-700">
                      <i className={`${solution.icon} text-xl text-gray-300`}></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
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
              <div className="h-[600px] rounded-xl overflow-hidden sticky top-24">
                <img 
                  src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3"
                  alt="Entertainment Benefits"
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
                  className="group p-6 rounded-xl hover:bg-gray-800/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-700">
                      <i className={`${benefit.icon} text-xl text-gray-300`}></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
