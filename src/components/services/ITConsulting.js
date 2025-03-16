import React, { useEffect } from "react";
import DT from "../../assets/Digital_Transformation.jpg";
import CS from "../../assets/Cloud-Solutions.webp";
import CYS from "../../assets/CyS.jpeg";
import SD from "../../assets/SD.avif";
import AI from "../../assets/AI.avif";
import EA from "../../assets/EA.webp";
export default function ITConsulting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const consultingServices = [
    {
      name: "Digital Transformation",
      description:
        "Unlock agility with end-to-end digital overhauls. We reimagine workflows, automate processes, and integrate scalable tech stacks to keep you ahead of disruption. Our approach involves a deep dive into your existing systems to identify bottlenecks and inefficiencies, followed by the strategic deployment of modern technologies such as cloud infrastructure, AI-driven automation, and real-time data analytics.",
      image: DT,
      id: "digitalTransformation",
    },
    {
      name: "Cloud Solutions",
      description:
        "Migrate, optimize, or scale securely. From hybrid clouds to AWS/Azure mastery, we turn cloud complexity into competitive advantage. Our cloud strategy covers end-to-end migration, performance tuning, cost optimization, and security enhancement. Whether you're adopting a multi-cloud approach or refining your existing infrastructure, we ensure seamless integration.",
      image: CS,
      id: "cloudSolutions",
    },
    {
      name: "Cyber Security",
      description:
        "Protect what matters. Our 360° security framework combines threat intelligence, compliance audits, and real-time monitoring to shield your data, reputation, and revenue. We provide advanced threat detection, incident response, and vulnerability management to keep your systems secure while aligning with industry standards.",
      image: CYS,
      id: "cyberSecurity",
    },
    {
      name: "Software Development",
      description:
        "Build smarter, faster. Whether custom apps, SaaS platforms, or legacy modernization, we code solutions that align with your business DNA. Our agile development process ensures rapid delivery and continuous improvement. From UI/UX design to backend integration, we create scalable and secure software tailored to your operational needs.",
      image: SD,
      id: "softwareDevelopment",
    },
    {
      name: "AI & Data Analytics",
      description:
        "Turn data into decisions. Leverage predictive analytics, machine learning models, and actionable insights to drive ROI and innovation. We transform raw data into strategic value by building AI-driven solutions that automate processes, forecast trends, and uncover hidden opportunities.",
      image: AI,
      id: "ai",
    },
    {
      name: "Enterprise Architecture",
      description:
        "Develop a comprehensive and scalable IT architecture that aligns with business objectives, ensuring long-term stability and adaptability. This includes defining the structure and integration of systems, applications, data, and infrastructure to support efficient operations, enhance security, and enable future growth.",
      image: EA,
      id: "enterpriseArchitecture",
    },
  ];

  return (
    <div className="bg-gray-900">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3"
            alt="Modern Business Team Collaboration"
            className="w-full h-full object-cover opacity-90"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800/80 to-gray-900/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white mb-6">
              IT Consulting & Solutions
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Solo Source provides comprehensive IT solutions, designed to
              propel your business forward. We leverage the latest technologies
              and industry best practices to deliver tailored strategies that
              drive efficiency, innovation, and growth.
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-24">
          {consultingServices.map((service, index) => (
            <div key={service.id} className="group">
              <div
                className={`flex flex-col lg:flex-row gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2" id={service.id}>
                  <div className="relative rounded-xl overflow-hidden">
                    {/* <div className="absolute -inset-4 bg-blue-600/20 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300"></div> */}
                    <img
                      src={service.image}
                      alt={service.name}
                      className="relative rounded-xl w-full aspect-[5/3] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  {/* <div className="text-6xl mb-6">{service.icon}</div> */}
                  <h3 className="text-3xl font-extrabold text-white mb-6">
                    {service.name}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8 whitespace-pre-line">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
