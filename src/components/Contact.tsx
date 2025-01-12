import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Languages, Loader2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', '2f2d4c7f-0f3c-4b78-9c0e-0a9b9f9b9b9b'); // Replace with your Web3Forms access key

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Thank you for your message! I will get back to you soon.');
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 bg-gray-800 text-white">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400">Let's connect and discuss opportunities</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-400" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-400">jineshsingatkar@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-400" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-400">+91 9322791111</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-blue-400" />
              <div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-gray-400">Maharashtra, India</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Languages className="w-6 h-6 text-blue-400" />
              <div>
                <h3 className="text-xl font-semibold">Languages</h3>
                <p className="text-gray-400">English, Hindi, Marathi</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input 
              type="hidden" 
              name="access_key" 
              value="2f2d4c7f-0f3c-4b78-9c0e-0a9b9f9b9b9b" // Replace with your Web3Forms access key
            />
            <input 
              type="hidden" 
              name="subject" 
              value="New Contact Form Submission - Portfolio"
            />
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
            />

            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;