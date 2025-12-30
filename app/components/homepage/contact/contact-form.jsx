"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [errors, setErrors] = useState({
    email: false,
    mobile: false,
    required: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    subject: "",
    mobile: "",
    message: "",
  });

  const isValidMobile = (mobile) => {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
  };

  const checkRequired = () => {
    const { name, email, subject, mobile, message } = userInput;
    if (name && email && subject && mobile && message) {
      setErrors(prev => ({ ...prev, required: false }));
    }
  };

  const handleInputChange = (field, value) => {
    setUserInput(prev => ({ ...prev, [field]: value }));
  };

  const validateEmail = () => {
    const isValid = isValidEmail(userInput.email);
    setErrors(prev => ({ ...prev, email: !isValid }));
  };

  const validateMobile = () => {
    const isValid = isValidMobile(userInput.mobile);
    setErrors(prev => ({ ...prev, mobile: !isValid }));
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    const { name, email, subject, mobile, message } = userInput;

    if (!name || !email || !subject || !mobile || !message) {
      setErrors(prev => ({ ...prev, required: true }));
      return;
    }

    if (errors.email || errors.mobile) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        'https://formspree.io/f/xbjpelga',
        {
          name,
          subject,
          replyto: email,
          mobile,
          message
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      toast.success("Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        subject: "",
        mobile: "",
        message: "",
      });
      setErrors({ email: false, mobile: false, required: false });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id='contact'>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Contact with me</p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          {"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="text"
              maxLength="100"
              required
              onChange={(e) => handleInputChange('name', e.target.value)}
              onBlur={checkRequired}
              value={userInput.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Email: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="email"
              maxLength="100"
              required
              value={userInput.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              onBlur={() => {
                checkRequired();
                validateEmail();
              }}
            />
            {errors.email && (
              <p className="text-sm text-red-400">Please provide a valid email!</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Subject: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="text"
              maxLength="150"
              required
              onChange={(e) => handleInputChange('subject', e.target.value)}
              onBlur={checkRequired}
              value={userInput.subject}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Mobile Number: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="tel"
              maxLength="10"
              required
              value={userInput.mobile}
              onChange={(e) => handleInputChange('mobile', e.target.value.replace(/\D/g, ''))}
              onBlur={() => {
                checkRequired();
                validateMobile();
              }}
            />
            {errors.mobile && (
              <p className="text-sm text-red-400">Please provide a valid 10-digit mobile number!</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message: </label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              maxLength="500"
              name="message"
              required
              onChange={(e) => handleInputChange('message', e.target.value)}
              onBlur={checkRequired}
              rows="4"
              value={userInput.message}
            />
          </div>

          <div className="flex flex-col items-center gap-3">
            {errors.required && (
              <p className="text-sm text-red-400">All fields are required!</p>
            )}
            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              role="button"
              onClick={handleSendMail}
              disabled={isLoading}
            >
              {isLoading ? (
                <span>Sending Message...</span>
              ) : (
                <span className="flex items-center gap-1">
                  Send Message
                  <TbMailForward size={20} />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;