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

        {/* Contact Info from IncubationPage */}
        <div className="mt-12 text-left inline-block w-full max-w-xl mx-auto">
          <p className="font-serif text-xl md:text-2xl mb-2"><strong>Email:</strong> cittic@cusat.ac.in</p>
          <p className="font-serif text-xl md:text-2xl mb-2"><strong>Phone:</strong> +91 7907 600 633</p>
          <p className="font-serif text-xl md:text-2xl"><strong>Address:</strong> Near University Guest House, CUSAT</p>
          <p className="font-serif text-xl md:text-2xl mt-4">
            Visit us online at{' '}
            <a 
              href="https://cittic.cusat.ac.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 underline"
            >
              cittic.cusat.ac.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
