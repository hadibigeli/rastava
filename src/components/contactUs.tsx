import React from 'react'
export default function ContactUs() {
    return (
      <div className="w-full  flex flex-col items-center justify-center min-h-screen 
         bg-slate-900">
        <h1 className="text-4xl font-bold text-blue-500 mb-6">Contact Us</h1>
        <p className="text-white text-center max-w-lg mb-8">
          We'd love to hear from you! Fill out the form below, or reach out via email or phone for inquiries.
        </p>
  
        <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Write your message here"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }
  
