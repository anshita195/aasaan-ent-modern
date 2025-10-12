'use client';

import { motion } from 'framer-motion';
import { Phone, Clock, Youtube } from 'lucide-react';
// import { Send, User, Mail, MessageSquare, Calendar } from 'lucide-react';
// import { useState } from 'react';

export default function Contact() {
  // Form state commented out since form is disabled
  // const [formData, setFormData] = useState({
  //   name: '',
  //   phone: '',
  //   email: '',
  //   service: '',
  //   message: ''
  // });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [notification, setNotification] = useState<{ message: string; type: string } | null>(null);

  const contactInfo = [
    {
      icon: (props: any) => <Phone {...props} />,
      title: 'WhatsApp',
      content: 'Chat on WhatsApp',
      link: 'https://wa.me/917240868002'
    },
    {
      icon: (props: any) => <Clock {...props} />,
      title: 'Clinic Hours',
      content: '5:10 PM - 9:00 PM',
      subtitle: 'Sunday: By Appointment Only'
    },
    {
      icon: (props: any) => <Youtube {...props} />,
      title: 'YouTube Channel',
      content: 'AasaanLife4U',
      subtitle: 'Health tips and educational content',
      link: 'https://youtube.com/@AasaanLife4U'
    }
  ];

  // Form-related functions commented out since form is disabled
  /*
  const services = [
    'Cochlear Implant',
    'Endoscopy',
    'Speech Therapy',
    'Sinusitis Treatment',
    'General ENT',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (!formData.name || !formData.phone || !formData.service) {
      showNotification('Please fill in all required fields.', 'error');
      return false;
    }

    const phoneRegex = /^[6-9]\\d{9}$/;
    if (!phoneRegex.test(formData.phone.replace(/\\D/g, '').slice(-10))) {
      showNotification('Please enter a valid 10-digit phone number.', 'error');
      return false;
    }

    if (formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return false;
      }
    }

    return true;
  };

  const createWhatsAppMessage = () => {
    let whatsappText = `*New Appointment Inquiry - AASAAN ENT Clinic*\\n\\n`;
    whatsappText += `*Name:* ${formData.name}\\n`;
    whatsappText += `*Phone:* ${formData.phone}\\n`;
    if (formData.email) whatsappText += `*Email:* ${formData.email}\\n`;
    whatsappText += `*Service:* ${formData.service}\\n`;
    if (formData.message) whatsappText += `*Message:* ${formData.message}\\n`;
    whatsappText += `\\n*Clinic Timings:* 5:10 PM - 9:00 PM\\n`;
    whatsappText += `*Sunday:* By Appointment Only\\n\\n`;
    whatsappText += `Please confirm my appointment. Thank you!`;
    return whatsappText;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call delay
    setTimeout(() => {
      const whatsappMessage = createWhatsAppMessage();
      window.open(`https://wa.me/917240868002?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
      
      setIsSubmitting(false);
      showNotification('Message prepared! WhatsApp will open to send your inquiry.', 'success');
    }, 1000);
  };

  const showNotification = (message: string, type: string) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };
  */

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-medical-red rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-medical-red rounded-full"></div>
      </div>

      {/* Notification - commented out since form is disabled */}
      {/*
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-24 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
            notification.type === 'success'
              ? 'bg-green-100 text-green-800 border-l-4 border-green-500'
              : 'bg-red-100 text-red-800 border-l-4 border-red-500'
          }`}
        >
          <p className="font-medium">{notification.message}</p>
          <button
            onClick={() => setNotification(null)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </motion.div>
      )}
      */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
            <span className="block text-lg font-normal text-medical-brown hindi-text mt-2">
              संपर्क करें
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch to schedule your appointment
          </p>
          <div className="w-24 h-1 bg-medical-red mx-auto mt-6"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 bg-medical-cream rounded-2xl border border-medical-red/10 hover:shadow-lg transition-all duration-300 sm:gap-4 sm:p-6"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-medical-red to-medical-darkred rounded-full flex items-center justify-center flex-shrink-0 sm:w-12 sm:h-12">
                  <info.icon className="w-5 h-5 text-white sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-1 sm:text-lg md:text-xl">{info.title}</h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-medical-red font-semibold hover:text-medical-darkred hover:underline transition-colors duration-200 block mb-1"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-700 font-medium mb-1">{info.content}</p>
                  )}
                  {info.subtitle && (
                    <p className="text-gray-600 text-sm">{info.subtitle}</p>
                  )}
                </div>
              </motion.div>
            ))}

          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-12"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-medical-red/10">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center sm:text-2xl md:mb-6">
                Find Us Here
                <span className="block text-lg font-normal text-medical-brown hindi-text mt-2">
                  हमारा स्थान
                </span>
              </h3>
              
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.5234567890123!2d75.8577258!3d22.7195687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c67b3e8bdeb39%3A0x2d3751fb39c39c0!2sDr.%20Anil%20Kumar%20Jain%20The%20Best%20ENT%20Specialist%20Bhopal!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dr. Anil Kumar Jain ENT Clinic Location"
                ></iframe>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-sm md:text-base text-gray-700 font-medium">
                   G-56, Krishna Plaza, Near Nerbada Sweet House, Bairagarh, Bhopal, MP 462030
                </p>
                <a
                  href="https://www.google.com/maps/dir//Dr.+Anil+Kumar+Jain+The+Best+ENT+Specialist+Bhopal,+Krishna+Plaza,+G-56,+near+Narmada+Sweet+House,+Bairagarh,+Bhopal,+Madhya+Pradesh+462030/@22.7195687,75.8577258,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-6 py-2 bg-medical-red text-white rounded-lg hover:bg-medical-darkred transition-colors duration-200"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - COMMENTED OUT FOR NOW */}
          {/*
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-medical-beige rounded-2xl p-8 shadow-lg border border-medical-red/10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-medical-red" />
                Send us a Message
                <span className="text-sm font-normal text-medical-brown hindi-text ml-2">
                  संदेश भेजें
                </span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-medical-red focus:outline-none transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        required
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-medical-red focus:outline-none transition-colors duration-200"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-medical-red focus:outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-medical-red focus:outline-none transition-colors duration-200 appearance-none bg-white"
                    >
                      <option value="">Select Service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-medical-red focus:outline-none transition-colors duration-200 resize-vertical"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-medical-red text-white py-4 px-6 rounded-lg font-semibold hover:bg-medical-darkred disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-3"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
          */}
        </div>
      </div>
    </section>
  );
}
