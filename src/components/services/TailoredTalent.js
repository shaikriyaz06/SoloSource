import React from "react";
import staffing from "../../assets/staffing.avif";
import hiring from "../../assets/Hiring.avif";
import workforce from "../../assets/workforce.avif";

export default function TailoredTalent() {
  const talentServices = [
    {
      name: "IT & Business Staffing",
      description: `We connect you with highly skilled professionals, from niche IT developers to executive strategists. Our rigorous vetting process ensures that each candidate meets your technical and cultural requirements, helping you build a reliable and effective team. We take the time to understand your business goals, providing talent that drives long-term success. Whether you need short-term support or permanent placements, we deliver the right expertise to keep your business moving forward.`,

      image: staffing,
      id: "itStaffing",
      icon: "👥",
    },
    {
      name: "Contract & Permanent Hiring",
      description: `Scale your workforce efficiently with tailored hiring solutions, including contract, direct placement, and project-based staffing. We manage the entire process—from sourcing to onboarding—ensuring a seamless experience. Our expert recruiters carefully match candidates to your business needs, helping you secure the right talent quickly and effectively. Whether you need temporary support or long-term leadership, we provide flexible hiring models that adapt to your growth plans.`,

      image: hiring,
      id: "contractHiring",
      icon: "📋",
    },
    {
      name: "Remote & On-Site Workforce",
      description: `Build and manage high-performing teams with our remote and on-site workforce solutions. We provide talent sourcing, hybrid workforce planning, and performance monitoring to ensure smooth operations. Whether you need a fully remote team or on-site support, we handle the logistics and integration, allowing you to focus on your core business. Our approach helps you create a balanced and productive team environment that drives innovation and results.`,

      image: workforce,
      id: "remoteWorkforce",
      icon: "🌐",
    },
  ];

  return (
    // <div className="bg-gray-900">
    //   {/* Hero Section with Parallax */}
    //   {/* <div className="relative h-[80vh] flex items-center overflow-hidden">
    //     <div className="absolute inset-0">
    //       <img
    //         src={strategyImage}
    //         alt="Business Consulting"
    //         className="w-full h-full object-cover"
    //       />
    //       <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
    //     </div>
    //     <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="max-w-3xl">
    //         <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
    //           Transform Your Business Vision Into Reality
    //         </h1>
    //         <p className="text-lg text-gray-300 mb-8 leading-relaxed">
    //           Partner with Solo Source to unlock your organization's full
    //           potential through strategic consulting and innovative solutions.
    //         </p>
    //         <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
    //           Schedule a Free Consultation
    //         </button>
    //       </div>
    //     </div>
    //   </div> */}

    //   {/* Services Section */}
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    //     <div className="text-center mb-12">
    //       <h2 className="text-5xl font-bold text-white mb-6">
    //         Tailored Talent Solutions
    //       </h2>
    //       <p className="text-lg text-gray-400 max-w-2xl mx-auto">
    //         Solo Source provides tailored talent solutions, connecting you with
    //         the top IT and business professionals. We understand the importance
    //         of finding the right talent to drive your business success.
    //       </p>
    //       <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
    //     </div>

    //     <div className="space-y-24">
    //       {talentServices.map((service, index) => (
    //         <div key={service.id} className="group">
    //           <div
    //             className={`flex flex-col lg:flex-row gap-16 items-center ${
    //               index % 2 === 1 ? "lg:flex-row-reverse" : ""
    //             }`}
    //           >
    //             {/* Image Side */}
    //             <div className="w-full lg:w-1/2" id={service.id}>
    //               <div className="relative rounded-xl overflow-hidden">
    //                 {/* <div className="absolute -inset-4 bg-blue-600/20 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300"></div> */}
    //                 <img
    //                   src={service.image}
    //                   alt={service.name}
    //                   className="relative rounded-xl w-full aspect-[5/3] object-cover"
    //                 />
    //                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
    //               </div>
    //             </div>

    //             {/* Content Side */}
    //             <div className="w-full lg:w-1/2">
    //               {/* <div className="text-6xl mb-6">{service.icon}</div> */}
    //               <h3 className="text-3xl font-extrabold text-white mb-6">
    //                 {service.name}
    //               </h3>
    //               <p className="text-lg text-gray-300 leading-relaxed mb-8 whitespace-pre-line">
    //                 {service.description}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="bg-gray-900">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3"
            alt="Corporate Consulting Environment"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800/80 to-gray-900/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white mb-6">
              Tailored Talent Solutions
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Solo Source provides tailored talent solutions, connecting you
              with the top IT and business professionals. We understand the
              importance of finding the right talent to drive your business
              success.
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-24">
          {talentServices.map((service, index) => (
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
