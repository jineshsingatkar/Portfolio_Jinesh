import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Languages, Loader2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
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
                <p className="text-gray-400">contact@example.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-400" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-400">+1234567890</p>
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
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
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