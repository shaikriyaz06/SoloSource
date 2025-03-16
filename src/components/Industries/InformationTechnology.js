import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function InformationTechnology() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const content = {
    heading: "Driving Digital Innovation Across IT & TMT Sectors",
    overview:
      "In the dynamic and ever-evolving landscape of IT & TMT, staying ahead requires more than just keeping pace—it demands innovation. Solo Source empowers technology, media, and telecommunications companies to navigate disruption, optimize operations, and achieve sustainable growth. We deliver strategic solutions that transform ideas into reality.",
    solutions: [
      {
        title: "Agile Software Development and DevOps",
        description:
          "Implement cutting-edge agile methodologies and DevOps practices for faster, more reliable software delivery.",
        icon: "fas fa-code-branch",
      },
      {
        title: "Cloud-Native Application Development",
        description:
          "Build and migrate applications optimized for cloud infrastructure with scalability and reliability.",
        icon: "fas fa-cloud",
      },
      {
        title: "Comprehensive Cybersecurity",
        description:
          "Protect your data and infrastructure with advanced security solutions and continuous monitoring.",
        icon: "fas fa-shield-alt",
      },
      {
        title: "AI and Machine Learning Integration",
        description:
          "Leverage AI and ML technologies to enhance services and drive intelligent automation.",
        icon: "fas fa-brain",
      },
    ],
    benefits: [
      {
        title: "Accelerated Time-to-Market",
        description:
          "Speed up product development and deployment cycles for faster market entry.",
        icon: "fas fa-rocket",
      },
      {
        title: "Enhanced Operational Efficiency",
        description:
          "Streamline processes and reduce operational costs through automation and optimization.",
        icon: "fas fa-chart-line",
      },
      {
        title: "Robust Data Security",
        description:
          "Ensure comprehensive protection of sensitive data and maintain compliance standards.",
        icon: "fas fa-lock",
      },
      {
        title: "Improved Customer Experience",
        description:
          "Deliver exceptional digital experiences that drive customer satisfaction and loyalty.",
        icon: "fas fa-users",
      },
    ],
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3"
          alt="IT Hero"
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
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3"
                  alt="IT Solutions"
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
                      <i
                        className={`${solution.icon} text-xl text-gray-300`}
                      ></i>
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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3"
                  alt="IT Benefits"
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
                      <i
                        className={`${benefit.icon} text-xl text-gray-300`}
                      ></i>
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
