import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiUsers, FiTruck, FiGlobe, FiTool, FiShield } = FiIcons;

const About = () => {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '2,500+', label: 'Machines Sold' },
    { number: '500+', label: 'Happy Customers' },
    { number: '24/7', label: 'Support Available' }
  ];

  const values = [
    {
      icon: FiAward,
      title: 'Quality First',
      description: 'Every machine meets the highest standards of quality and durability.'
    },
    {
      icon: FiUsers,
      title: 'Customer Focus',
      description: 'Your success is our priority. We provide personalized service and support.'
    },
    {
      icon: FiTruck,
      title: 'Reliable Delivery',
      description: 'Fast, dependable delivery across the Netherlands and Europe.'
    },
    {
      icon: FiShield,
      title: 'Trust & Integrity',
      description: 'Transparent pricing, honest advice, and reliable after-sales service.'
    }
  ];

  const team = [
    {
      name: 'Erik van der Berg',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      description: '20+ years in heavy machinery industry'
    },
    {
      name: 'Anna Janssen',
      role: 'Sales Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80',
      description: 'Expert in construction equipment solutions'
    },
    {
      name: 'Marco de Wit',
      role: 'Technical Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      description: 'Certified technician and service specialist'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-5xl font-bold mb-6"
            >
              About Wimforce Machinery LS
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Power You Can Trust. Machines Built to Perform. For over 15 years, we've been 
              providing premium construction, agricultural, and warehouse machinery across Europe.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2008, Wimforce Machinery LS began with a simple mission: to provide 
                high-quality, reliable machinery that professionals can depend on. What started 
                as a small family business has grown into one of Europe's trusted machinery suppliers.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We specialize in excavators ranging from 0.6 to 30 tons, along with comprehensive 
                agricultural and warehouse equipment solutions. Our commitment to quality, customer 
                service, and technical expertise has earned us the trust of contractors, farmers, 
                and logistics operators across the continent.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to expand our product range and service capabilities while 
                maintaining the personal touch and attention to detail that has defined us from the beginning.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
                alt="Wimforce facility"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={value.icon} className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Wimforce?
            </h2>
            <p className="text-xl text-gray-300">
              Experience the difference of working with machinery experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <SafeIcon icon={FiTool} className="w-8 h-8 text-primary-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Expert Knowledge</h3>
                <p className="text-gray-300">Our team has decades of experience in heavy machinery and can guide you to the right solution.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <SafeIcon icon={FiGlobe} className="w-8 h-8 text-primary-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">European Coverage</h3>
                <p className="text-gray-300">Fast delivery and service across the Netherlands and throughout Europe.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <SafeIcon icon={FiShield} className="w-8 h-8 text-primary-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Comprehensive Warranty</h3>
                <p className="text-gray-300">Industry-leading warranty coverage and 24/7 technical support for peace of mind.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;