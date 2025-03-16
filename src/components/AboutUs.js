import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
    AOS.refresh();
  }, []);

  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
      description: "With over 15 years of experience in technology solutions.",
    },
    {
      name: "Jane Smith",
      position: "CTO",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
      description: "Expert in cloud architecture and digital transformation.",
    },
    {
      name: "Mike Johnson",
      position: "COO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      description: "Specializes in operational excellence and team leadership.",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[80vh] bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
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

      {/* Company Overview with Stats */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Our Journey
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Founded in 2010, we've been at the forefront of digital
              transformation, helping businesses navigate the ever-evolving
              technology landscape. Our journey began with a simple mission: to
              make cutting-edge technology accessible to businesses of all
              sizes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div
                className="text-center p-6 bg-white rounded-xl shadow-md"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="text-4xl font-bold text-blue-600 mb-2">500+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div
                className="text-center p-6 bg-white rounded-xl shadow-md"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="text-4xl font-bold text-blue-600 mb-2">200+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div
                className="text-center p-6 bg-white rounded-xl shadow-md"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3 className="text-4xl font-bold text-blue-600 mb-2">50+</h3>
                <p className="text-gray-600">Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision with Icons */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg"
              data-aos="fade-right"
            >
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative technology solutions that
                drive growth, efficiency, and competitive advantage in the
                digital age.
              </p>
            </div>
            <div
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg"
              data-aos="fade-left"
            >
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the global leader in delivering transformative digital
                solutions that shape the future of business and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values with Modern Cards */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-gray-800 mb-16 text-center"
            data-aos="fade-up"
          >
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Pushing boundaries with cutting-edge solutions",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                ),
              },
              {
                title: "Excellence",
                description:
                  "Delivering outstanding quality in everything we do",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                ),
              },
              {
                title: "Collaboration",
                description: "Working together to achieve remarkable results",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                ),
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {value.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Hover Effects */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-gray-800 mb-16 text-center"
            data-aos="fade-up"
          >
            Meet Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-400 mb-4">{member.position}</p>
                    <p className="text-gray-300">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
