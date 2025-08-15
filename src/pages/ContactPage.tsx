import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-headline text-3xl md:text-5xl font-bold mb-8">Contact Us</h1>
        <p className="font-serif text-xl md:text-2xl leading-relaxed mb-8">
          Feel free to send us a message! We'll get back to you as soon as possible.
        </p>
        <div className="w-full max-w-md mx-auto mt-4">
          <input 
            type="email" 
            placeholder="Your Email Address" 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-serif text-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
