import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowLeft, FiPhone, FiMail, FiDownload, FiStar, FiCheck, FiTruck, FiShield, FiTool } = FiIcons;

const ProductDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in real app, fetch by ID
  const product = {
    id: 1,
    name: 'Wimforce 3.5 Ton Mini Excavator',
    category: 'Excavators',
    price: '€45,000',
    inStock: true,
    rating: 4.8,
    reviews: 24,
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'The Wimforce 3.5 Ton Mini Excavator is designed for power and precision in confined job sites. Ideal for urban construction, landscaping, and trenching with exceptional maneuverability and operator comfort.',
    features: [
      'High-performance hydraulic system',
      'Operator-friendly controls',
      'Zero tail swing design',
      'Compact footprint',
      'Excellent fuel efficiency',
      'Advanced safety features'
    ],
    specifications: {
      'Operating Weight': '3,500 kg',
      'Engine Power': '24.8 kW (33.3 HP)',
      'Max Dig Depth': '2.8 m',
      'Max Reach': '4.9 m',
      'Bucket Capacity': '0.14 m³',
      'Ground Pressure': '0.033 MPa',
      'Travel Speed': '4.5 km/h',
      'Fuel Tank': '42 L'
    },
    benefits: [
      {
        icon: FiTool,
        title: 'Versatile Performance',
        description: 'Perfect for urban construction, landscaping, trenching, and utility work'
      },
      {
        icon: FiTruck,
        title: 'Easy Transport',
        description: 'Compact size allows transport on standard trailers without special permits'
      },
      {
        icon: FiShield,
        title: 'Reliable Operation',
        description: 'Built for daily operation with minimal downtime and low maintenance costs'
      }
    ],
    warranty: '2 years full warranty + 3 years powertrain',
    delivery: 'Fast delivery across Netherlands and Europe'
  };

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'specifications', name: 'Specifications' },
    { id: 'benefits', name: 'Benefits' },
    { id: 'warranty', name: 'Warranty & Support' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/products" className="text-gray-500 hover:text-gray-700">Products</Link>
            <span className="text-gray-400">/</span>
            <Link to="/products/excavators" className="text-gray-500 hover:text-gray-700">{product.category}</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/products"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
        >
          <SafeIcon icon={FiArrowLeft} className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Image Gallery */}
          <div>
            <div className="mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-primary-500' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                {product.category}
              </span>
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                product.inStock 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {product.inStock ? 'In Stock' : 'Pre-order'}
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            <div className="flex items-center mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <SafeIcon 
                    key={i} 
                    icon={FiStar} 
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="text-3xl font-bold text-primary-600 mb-6">
              {product.price}
            </div>

            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={`/quote?product=${product.id}`}
                className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-primary-700 transition-colors"
              >
                Request Quote
              </Link>
              <a
                href="tel:+31123456789"
                className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                Call Expert
              </a>
            </div>

            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <div className="flex items-center text-sm text-gray-600">
                <SafeIcon icon={FiTruck} className="w-5 h-5 mr-2" />
                <span>{product.delivery}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Overview</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The Wimforce 3.5 Ton Mini Excavator represents the perfect balance of power, precision, and maneuverability. 
                  Designed specifically for urban construction environments where space is limited but performance cannot be compromised.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This machine excels in trenching, landscaping, utility work, and small-scale construction projects. 
                  Its zero tail swing design allows operation in the tightest spaces while maintaining maximum digging performance.
                </p>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-900">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'benefits' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <SafeIcon icon={benefit.icon} className="w-8 h-8 text-primary-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'warranty' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Warranty & Support</h3>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Warranty</h4>
                  <p className="text-gray-600 mb-4">{product.warranty}</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mr-3" />
                      Full parts and labor coverage
                    </li>
                    <li className="flex items-center">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mr-3" />
                      24/7 technical support hotline
                    </li>
                    <li className="flex items-center">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mr-3" />
                      Nationwide service network
                    </li>
                    <li className="flex items-center">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mr-3" />
                      Genuine parts guarantee
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:support@wimforce.com"
                    className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <SafeIcon icon={FiMail} className="w-5 h-5 mr-2" />
                    Email Support
                  </a>
                  <button className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <SafeIcon icon={FiDownload} className="w-5 h-5 mr-2" />
                    Download Manual
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;