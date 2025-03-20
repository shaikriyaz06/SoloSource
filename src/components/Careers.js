import Aos from "aos";
import React, { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
  FaDollarSign,
  FaTimes,
  FaCloudUploadAlt,
} from "react-icons/fa";

const ApplicationForm = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    experience: "",
    resume: null,
    coverLetter: "",
  });

  const [loading, setLoading] = useState(false);
  const [fileSelected, setFileSelected] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));
      setFileSelected(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted:", formData);
    setLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Apply for {job.title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FaTimes className="text-gray-500" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              LinkedIn Profile
            </label>
            <input
              type="url"
              name="linkedin"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Years of Experience *
            </label>
            <select
              name="experience"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.experience}
              onChange={handleChange}
            >
              <option value="">Select experience</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5-10">5-10 years</option>
              <option value="10+">10+ years</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Resume/CV *
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
              <div className="space-y-1 text-center">
                <FaCloudUploadAlt className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                    <span>Upload a file</span>
                    <input
                      type="file"
                      name="resume"
                      className="sr-only"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PDF, DOC, DOCX up to 10MB
                </p>
                {fileSelected && (
                  <p className="text-sm text-green-600">File selected ✓</p>
                )}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cover Letter
            </label>
            <textarea
              name="coverLetter"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Tell us why you're interested in this position..."
            ></textarea>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJobForApplication, setSelectedJobForApplication] =
    useState(null);

  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      location: "Riyadh, Saudi Arabia",
      type: "Full-time",
      salary: "Competitive",
      department: "Engineering",
      experience: "5+ years",
      description:
        "We're looking for an experienced Full Stack Developer to join our growing team.",
      responsibilities: [
        "Design and develop scalable web applications",
        "Write clean, maintainable, and efficient code",
        "Collaborate with cross-functional teams",
        "Mentor junior developers",
        "Participate in code reviews and technical discussions",
      ],
      requirements: [
        "5+ years of experience in full stack development",
        "Expertise in React, Node.js, and modern JavaScript",
        "Experience with cloud platforms (AWS/Azure)",
        "Strong problem-solving abilities",
        "Excellent communication skills",
      ],
    },
    {
      id: 2,
      title: "UX/UI Designer",
      location: "Remote",
      type: "Full-time",
      salary: "Competitive",
      department: "Design",
      experience: "3+ years",
      description:
        "Join our design team to create exceptional user experiences.",
      responsibilities: [
        "Create user-centered designs",
        "Develop UI mockups and prototypes",
        "Conduct user research and testing",
        "Collaborate with developers and stakeholders",
        "Maintain design system",
      ],
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma and design tools",
        "Portfolio demonstrating UI/UX projects",
        "Understanding of user-centered design principles",
        "Experience with design systems",
      ],
    },
    // Add more jobs as needed
  ];
  const handleApplyNow = (job) => {
    setSelectedJobForApplication(job);
    setShowApplicationForm(true);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-4xl md:text-5xl font-bold mb-6"
              data-aos="fade-up"
            >
              Join Our Team
            </h1>
            <p
              className="text-xl text-blue-100 mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Build the future with us. Discover exciting opportunities to grow
              your career.
            </p>
          </div>
        </div>
      </div>

      {/* Jobs Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Job Filters (can be expanded) */}
          <div className="mb-12 flex flex-wrap gap-4" data-aos="fade-up">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              All Positions
            </button>
            {/* <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors">
              Engineering
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors">
              Design
            </button> */}
            {/* Add more filter buttons as needed */}
          </div>

          {/* Job Listings */}
          <div className="grid gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
              >
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        {job.title}
                      </h2>
                      <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                        <div className="flex items-center">
                          <FaMapMarkerAlt className="mr-2 text-blue-600" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <FaClock className="mr-2 text-blue-600" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <FaBriefcase className="mr-2 text-blue-600" />
                          {job.experience}
                        </div>
                        <div className="flex items-center">
                          <FaDollarSign className="mr-2 text-blue-600" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        setSelectedJob(selectedJob === job.id ? null : job.id)
                      }
                      className="mt-4 md:mt-0 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                      {selectedJob === job.id ? "View Less" : "View More"}
                    </button>
                  </div>

                  {selectedJob === job.id && (
                    <div className="mt-6 border-t pt-6">
                      <p className="text-gray-700 mb-6">{job.description}</p>

                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                          Key Responsibilities
                        </h3>
                        <ul className="space-y-2">
                          {job.responsibilities.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                          Requirements
                        </h3>
                        <ul className="space-y-2">
                          {job.requirements.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={() => handleApplyNow(job)}
                        className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                      >
                        Apply Now
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              className="text-3xl font-bold text-gray-800 mb-4"
              data-aos="fade-up"
            >
              Life @ Solo Source
            </h2>
            <p
              className="text-gray-600"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              We offer more than just a job. Join us and enjoy these benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Competitive Salary",
                description: "We offer industry-leading compensation packages",
                icon: "💰",
              },
              {
                title: "Remote Work",
                description:
                  "Enjoy flexible work arrangements, including remote opportunities",
                icon: "🏠",
              },
              {
                title: "Growth Opportunities",
                description:
                  "We support continuous learning and career development",
                icon: "📈",
              },
              {
                title: "Health Benefits",
                description: "Comprehensive health and wellness coverage",
                icon: "🏥",
              },
              {
                title: "Work-Life Balance",
                description: "Flexible hours and generous paid time off",
                icon: "⚖️",
              },
              {
                title: "Team Events",
                description:
                  "Team-building and social activities to keep things fun",
                icon: "🎉",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showApplicationForm && (
        <ApplicationForm
          job={selectedJobForApplication}
          onClose={() => setShowApplicationForm(false)}
        />
      )}
    </div>
  );
}
