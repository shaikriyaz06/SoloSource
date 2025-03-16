import React from "react";

// Importing images (use different, high-quality public domain images)
import strategyImage from "../../assets/business-strategy.jpeg";
import optimizationImage from "../../assets/process-optimization.jpg";
import riskManagementImage from "../../assets/risk-management.jpg";

export default function BusinessConsulting() {
  const businessConsultingServices = [
    {
      name: "Strategy And Operations",
      description: `From market entry to operational excellence, we craft strategies that balance ambition with execution. We help businesses identify growth opportunities, improve operational efficiency, and build sustainable competitive advantages. Our team collaborates closely with stakeholders to understand business challenges and tailor solutions that drive measurable results. We focus on optimizing resource allocation, improving decision-making processes, and fostering a culture of continuous improvement. Through data-driven insights and strategic planning, we empower businesses to adapt to market changes and maintain long-term success.`,
      image: strategyImage,
      id: "strategyandoperations",
      icon: "📈",
    },
    {
      name: "Process Optimization",
      description: `Eliminate bottlenecks, reduce costs. Our Lean and Six Sigma frameworks streamline workflows for peak efficiency. We analyze existing processes to identify inefficiencies and implement targeted improvements that enhance productivity and reduce waste. By leveraging automation and advanced analytics, we ensure consistent quality and faster turnaround times. Our tailored approach helps organizations adapt to evolving business demands, reduce operational risks, and improve overall performance. From manufacturing floors to service delivery, we enable businesses to operate smarter, faster, and more cost-effectively.`,
      image: optimizationImage,
      id: "processoptimization",
      icon: "⚡",
    },
    {
      name: "Risk Management",
      description: `Navigate regulations confidently. We design robust governance frameworks to mitigate risks and ensure compliance without stifling growth. Our team identifies potential threats and develops proactive strategies to minimize their impact. From financial risks to operational vulnerabilities, we implement control measures that enhance business resilience. We also provide ongoing monitoring and adaptive solutions to keep your organization aligned with evolving industry standards and regulations. Our goal is to create a secure and agile environment where your business can thrive, even amidst uncertainty.`,
      image: riskManagementImage,
      id: "riskManagement",
      icon: "🛡️",
    },
  ];

  return (
    <div className="bg-gray-900">
      {/* Hero Section with Parallax */}
      {/* <div className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={strategyImage}
            alt="Business Consulting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Transform Your Business Vision Into Reality
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Partner with Solo Source to unlock your organization's full
              potential through strategic consulting and innovative solutions.
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule a Free Consultation
            </button>
          </div>
        </div>
      </div> */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3"
            alt="Business Team Meeting"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800/80 to-gray-900/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* <div className="max-w-3xl" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transforming Ideas Into Digital Reality
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're more than just a technology company. We're your partner in
              digital transformation, helping businesses thrive in the digital
              age.
            </p>
          </div> */}
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white mb-6">
              Business Consulting
            </h2>
        <p className="text-lg text-white max-w-2xl mx-auto">
              Solo Source provides strategic business consulting services,
              empowering organizations to achieve sustainable growth and
              operational excellence. We partner with you to develop and
              implement strategies that drive results.
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-6">
            Business Consulting
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Solo Source provides strategic business consulting services,
            empowering organizations to achieve sustainable growth and
            operational excellence. We partner with you to develop and implement
            strategies that drive results.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div> */}

        <div className="space-y-24">
          {businessConsultingServices.map((service, index) => (
            <div key={service.id} className="group">
              <div
                className={`flex flex-col lg:flex-row gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2" id={service.id}>
                  <div className="relative rounded-xl overflow-hidden">
                    <div className="absolute -inset-4 bg-blue-600/20 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300"></div>
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
