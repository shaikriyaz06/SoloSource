import React from "react";
import { Card, Button } from "antd";
import banking from "../assets/bankingfintech.png";
import government from "../assets/government.webp";
import elearning from "../assets/e-learning.png";
import logistics from "../assets/logistics.jpg";
import IT from "../assets/IT&TMT.avif";
import ET from "../assets/Entertainment.avif";
import Health from "../assets/Health.avif";

export default function Industries() {
  const industries = [
    {
      title: "Banking & Fintech",
      image: banking,
      description:
        "In the fast-paced world of finance, agility and security are paramount. Solo Source empowers banking and fintech institutions to navigate digital disruption, enhance customer experiences, and maintain regulatory compliance.",
      features: [
        "Secure Cloud Migration for Financial Data",
        "AI-Powered Fraud Detection and Risk Management",
        "Digital Transformation for Seamless Customer Journeys",
        "Compliance and Regulatory Technology Solutions",
      ],
      benefits: [
        "Enhanced Security and Compliance",
        "Improved Customer Experience",
        "Operational Efficiency and Cost Savings",
        "Real-Time Data Insights",
      ],
    },
    {
      title: "Information Technology & TMT",
      image: IT,
      description:
        "Cutting-edge technology solutions for telecommunications, media, and tech companies. Enabling digital transformation through innovative IT solutions and services.",
      features: [
        "Cloud Computing Solutions",
        "Digital Transformation",
        "IT Infrastructure Management",
        "Software Development",
      ],
      benefits: [
        "Enhanced Security and Fraud Prevention",
        "Improved Customer Engagement and Retention",
        "Streamlined Operations and Reduced Costs",
        "Adaptability to ever changing regulations",
      ],
    },
    {
      title: "Entertainment & Media",
      image: ET,
      description:
        "Delivering personalized and engaging experiences is crucial. Solo Source helps media companies leverage digital technologies to enhance content delivery, optimize audience engagement, and drive revenue growth.",
      features: [
        "Cloud-Based Content Management and Distribution",
        "Data Analytics for Audience Insights and Personalization",
        "Digital Transformation for Multi-Channel Delivery",
        "Cybersecurity for Content Protection",
      ],
      benefits: [
        "Enhanced Content Delivery and Accessibility",
        "Increased Audience Engagement and Retention",
        "Data-Driven Insights for Content Optimization",
        "Secured Content Distribution",
      ],
    },
    {
      title: "Government & Public Sector",
      image: government,
      description:
        "Solo Source partners with government and public sector organizations to improve service delivery, enhance transparency, and optimize operations.",
      features: [
        "Digital Transformation for Citizen Engagement",
        "Cybersecurity for Government Data Protection",
        "Cloud Solutions for Government Infrastructure",
        "Data Analytics for Improved Public Service Delivery",
      ],
      benefits: [
        "Improved Citizen Engagement and Satisfaction",
        "Enhanced Data Security and Privacy",
        "Increased Operational Efficiency and Cost Savings",
        "Data-Driven Decision Making",
      ],
    },
    {
      title: "Healthcare & Life Sciences",
      image: Health,
      description:
        "We provide solutions that enable healthcare organizations to enhance patient care, accelerate research, and improve operational efficiency.",
      features: [
        "Cloud-Based EHR (Electronic Health Record) Solutions",
        "Data Analytics for Clinical Research and Patient Outcomes",
        "Cybersecurity for HIPAA Compliance",
        "Digital Transformation for Telemedicine",
      ],
      benefits: [
        "Improved Patient Outcomes and Care Delivery",
        "Enhanced Data Security and Compliance",
        "Accelerated Research and Development",
        "Increased Accessibility to Patient Care",
      ],
    },
    {
      title: "Logistics & Supply Chain",
      image: logistics,
      description:
        "Solo Source helps organizations optimize their supply chain operations through technology and strategic consulting.",
      features: [
        "Cloud-Based Supply Chain Management Systems",
        "Data Analytics for Inventory Optimization and Demand Forecasting",
        "Digital Transformation for Real-Time Tracking and Visibility",
        "Cybersecurity for Supply Chain Data Protection",
      ],
      benefits: [
        "Improved Supply Chain Visibility and Control",
        "Reduced Inventory Costs and Lead Times",
        "Enhanced Operational Efficiency and Responsiveness",
        "Increased Supply Chain Security",
      ],
    },
    {
      title: "Education & E-Learning",
      image: elearning,
      description:
        "Solo Source helps educational institutions and e-learning providers leverage technology to enhance the learning experience.",
      features: [
        "Cloud-Based Learning Management Systems (LMS)",
        "Data Analytics for Student Performance and Engagement",
        "Digital Transformation for Online and Hybrid Learning",
        "Cybersecurity for Student Data Protection",
      ],
      benefits: [
        "Enhanced Student Engagement and Learning Outcomes",
        "Improved Operational Efficiency and Cost Savings",
        "Increased Accessibility to Education and Training",
        "Secured Student Data",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent text-white">
            Industries We Serve
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Delivering innovative solutions across diverse sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="h-full"
            >
              <Card
                hoverable
                cover={
                  <div className="relative overflow-hidden">
                    <img
                      alt={industry.title}
                      src={industry.image}
                      className="h-64 object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-60"></div>
                  </div>
                }
                className="h-full rounded-xl overflow-hidden shadow-lg border-none bg-gray-800 hover:shadow-2xl transition-all duration-300"
              >
                <div data-aos="fade-up" data-aos-delay={index * 150}>
                  <h2 className="text-2xl font-semibold mb-4 text-white">
                    {industry.title}
                  </h2>
                  <p className="text-gray-400 mb-6">{industry.description}</p>

                  <div data-aos="fade-up" data-aos-delay={index * 200}>
                    <h3 className="text-lg font-medium text-blue-400 mb-2">
                      Our Solutions:
                    </h3>
                    <ul className="list-none space-y-2 mb-4">
                      {industry.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-gray-300 flex items-center"
                          data-aos="fade-left"
                          data-aos-delay={idx * 50}
                        >
                          <span className="w-2 h-2 bg-blue-500 rounded-full inline-block mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div data-aos="fade-up" data-aos-delay={index * 250}>
                    <h3 className="text-lg font-medium text-blue-400 mb-2">
                      Benefits:
                    </h3>
                    <ul className="list-none space-y-2 mb-6">
                      {industry.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="text-gray-300 flex items-center"
                          data-aos="fade-left"
                          data-aos-delay={idx * 50}
                        >
                          <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
