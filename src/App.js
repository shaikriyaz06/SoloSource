import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import axios from "axios";
import Home from "./components/Home";
import { toast, ToastContainer } from "react-toastify";
// import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Input, Button, Spin, Form } from "antd"; // Antd components
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import ContactUS from "./components/Contactus";

function App() {
  const [form] = Form.useForm();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false); // loading state
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post("/user/mail", values);
      console.log("Form submitted successfully", response.data);
      toast.success("Form submitted successfully!!", {
        autoClose: 3000,
      });
      // message.success("Thank you for your message. We will contact you soon!");
      form.resetFields();
    } catch (error) {
      toast.error("Error submitting form", {
        autoClose: 3000,
      });
      // console.error("Error submitting form", error);
      // message.error("Error submitting form");
    } finally {
      setLoading(false);
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/contact" element={<ContactUS />} />
      </Routes>
      <Footer />
      {/* <div
        className="fixed z-50 bottom-4 right-4 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 cursor-pointer"
        onClick={togglePopup}
      >
        {!isPopupOpen && (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24"
            height="24"
            data-ux="Icon"
            className="x-el x-el-svg c2-1 c2-2 c2-q c2-r c2-s c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"
          >
            <g fill="currentColor">
              <rect x="4" y="6" width="16" height="10.222" rx="1.129"></rect>
              <path d="M8.977 18.578l.2-2.722a.564.564 0 01.564-.523h3.61c.548 0 .774.705.327 1.024l-3.81 2.721a.564.564 0 01-.89-.5z"></path>
            </g>
          </svg>
        )}
        {isPopupOpen && (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24"
            height="24"
            data-ux="Icon"
            className="x-el x-el-svg c2-1 c2-2 c2-50 c2-r c2-s c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"
          >
            <path
              fill-rule="evenodd"
              d="M17.999 4l-6.293 6.293L5.413 4 4 5.414l6.292 6.293L4 18l1.413 1.414 6.293-6.292 6.293 6.292L19.414 18l-6.294-6.293 6.294-6.293z"
            ></path>
          </svg>
        )}
      </div>
      {isPopupOpen && (
        <div
          className="z-50 fixed bottom-20 right-4 mb-2 bg-white rounded-lg shadow-lg w-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
          style={{ maxHeight: "470px" }}
        >
          <div className="bg-blue-500 text-white px-4 py-6 w-full">
            SOLOSOURCE
          </div>
          <div className="px-4 -mt-4">
            <span className="bg-gray-200 py-2 px-2 rounded-lg inline-block w-full">
              Hi! Let us know how we can help and we'll respond shortly.
            </span>
            <span className="inline-block -mt-2 ml-2">
              <svg viewBox="0 0 24 24" fill="#E5E7EB" width="24" height="24">
                <path d="M0.342304 14.5C7.35025 6.3293 3.35025 0.829295 0 0.0.0 0.0 5.4 2.1 32.3502 0.329295C32.3503 3.8293 -3.13481 20.7261 0.342304 14.5Z"></path>
              </svg>
            </span>
          </div>
          <div className="px-4 pb-4">
            <Form
              form={form}
              onFinish={onFinish}
              layout="vertical"
              className="max-w-md mx-auto"
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your name",
                  },
                ]}
              >
                <Input placeholder="Enter your name" disabled={loading} />
              </Form.Item>

              <Form.Item
                label="Email Address"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email",
                  },
                  {
                    type: "email",
                    message: "Please enter a valid email",
                  },
                ]}
              >
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  disabled={loading}
                />
              </Form.Item>

              <Form.Item
                label="Mobile Number (Optional)"
                name="mobile"
                rules={[
                  {
                    pattern: /^[+]?[0-9\s-]+$/,
                    message: "Please enter a valid phone number",
                  },
                ]}
              >
                <Input
                  placeholder="Include country code e.g +91"
                  disabled={loading}
                />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[
                  {
                    required: true,
                    message: "Please enter your message",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="How can we help?"
                  disabled={loading}
                />
              </Form.Item>

              <Form.Item className="mb-0 text-center">
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100px" }}
                  disabled={loading}
                >
                  {loading ? <Spin size="small" /> : "Send"}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )} */}

      <ToastContainer />
    </div>
  );
}

export default App;
