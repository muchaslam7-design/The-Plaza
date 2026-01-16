import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactPage = () => {
  // State to control Modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize React Hook Form with 'onChange' mode
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange" 
  });

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log("Form Submitted Successfully:", data);
    // Show the custom modal instead of a browser alert
    setIsModalOpen(true);
    // Reset the form fields after submission
    reset();
  };

  return (
    <div className="bg-white min-h-screen relative">
      {/* --- Header Section with Decorative Squares --- */}
      <div className="bg-gray-100 py-20 px-10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-5xl font-black text-black uppercase tracking-tighter italic">Get in Touch</h1>
          <p className="text-gray-500 mt-4 text-lg">Have a question? We'd love to hear from you.</p>
        </div>
        
        {/* The Plaza Signature Decorative Shapes */}
        <div className="absolute right-20 top-10 w-20 h-20 border-[15px] border-purple-500 rotate-12 opacity-20"></div>
        <div className="absolute right-40 bottom-5 w-16 h-16 border-[12px] border-pink-500 -rotate-12 opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-10 py-20 flex flex-col md:flex-row gap-16">
        {/* --- Left Side: Contact Information --- */}
        <div className="md:w-1/3 space-y-10">
          <div>
            <h3 className="text-xl font-bold uppercase border-b-2 border-purple-600 w-fit mb-4 italic">Visit Us</h3>
            <p className="text-gray-600">123 Fashion Street, Design District<br/>New York, NY 10001</p>
          </div>
          <div>
            <h3 className="text-xl font-bold uppercase border-b-2 border-purple-600 w-fit mb-4 italic">Call Us</h3>
            <p className="text-gray-600">+1 (234) 567-890</p>
          </div>
          <div>
            <h3 className="text-xl font-bold uppercase border-b-2 border-purple-600 w-fit mb-4 italic">Email Us</h3>
            <p className="text-gray-600">support@theplaza.com</p>
          </div>
        </div>

        {/* --- Right Side: Contact Form Section --- */}
        <div className="md:w-2/3 bg-white p-10 shadow-2xl rounded-sm border-t-8 border-purple-600">
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Full Name Field with alphabet validation */}
            <div className="flex flex-col">
              <label className="text-xs font-bold uppercase mb-2">Full Name</label>
              <input 
                type="text" 
                {...register("fullName", { 
                  required: "Full name is required",
                  minLength: { value: 3, message: "Name must be at least 3 characters" },
                  pattern: {
                    value: /^[A-Za-z\s]+$/i,
                    message: "Only alphabets are allowed"
                  }
                })}
                className={`border-b-2 outline-none py-2 transition-all ${errors.fullName ? 'border-red-500' : 'border-gray-200 focus:border-purple-600'}`} 
                placeholder="John Doe" 
              />
              {errors.fullName && <span className="text-red-500 text-[10px] mt-1 font-bold italic uppercase">{errors.fullName.message}</span>}
            </div>

            {/* Email Address Field */}
            <div className="flex flex-col">
              <label className="text-xs font-bold uppercase mb-2">Email Address</label>
              <input 
                type="email" 
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address format"
                  }
                })}
                className={`border-b-2 outline-none py-2 transition-all ${errors.email ? 'border-red-500' : 'border-gray-200 focus:border-purple-600'}`} 
                placeholder="john@example.com" 
              />
              {errors.email && <span className="text-red-500 text-[10px] mt-1 font-bold italic uppercase">{errors.email.message}</span>}
            </div>

            {/* Message Field */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-xs font-bold uppercase mb-2">Message</label>
              <textarea 
                rows="4" 
                {...register("message", { 
                  required: "Please write your message",
                  minLength: { value: 10, message: "Message must be at least 10 characters long" }
                })}
                className={`border-b-2 outline-none py-2 transition-all resize-none ${errors.message ? 'border-red-500' : 'border-gray-200 focus:border-purple-600'}`} 
                placeholder="How can we help?"
              ></textarea>
              {errors.message && <span className="text-red-500 text-[10px] mt-1 font-bold italic uppercase">{errors.message.message}</span>}
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="md:col-span-2 bg-black text-white font-bold py-4 uppercase tracking-widest hover:bg-purple-700 transition-all active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* --- Success Modal Overlay --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] px-4">
          <div className="bg-white p-8 md:p-12 max-w-sm w-full text-center relative shadow-2xl border-t-8 border-purple-600">
            {/* Modal Icon/Decoration */}
            <div className="w-20 h-20 border-[10px] border-purple-500 rotate-12 absolute -top-10 -right-5 opacity-30"></div>
            
            <div className="text-5xl mb-4">✨</div>
            <h2 className="text-3xl font-black uppercase italic  mb-2">Success!</h2>
            <p className="text-gray-500 mb-8 font-medium">Your message has been received. Our team will contact you shortly.</p>
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-black text-white font-bold py-3 uppercase tracking-widest hover:bg-purple-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;