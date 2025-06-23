import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiArrowRight, FiCheck, FiTruck, FiDollarSign, FiClock, FiTarget } = FiIcons;

const ProductRecommendations = ({ 
  currentProduct = null, 
  userPreferences = {}, 
  projectType = null,
  maxRecommendations = 4,
  showTitle = true,
  variant = 'default' // 'default', 'compact', 'detailed'
}) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock products database
  const allProducts = [
    {
      id: 1,
      name: 'Wimforce 3.5 Ton Mini Excavator',
      category: 'excavators',
      subcategory: 'mini-excavator',
      price: 45000,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviews: 24,
      inStock: true,
      specifications: {
        weight: 3.5,
        power: 33.3,
        digDepth: 2.8,
        reach: 4.9
      },
      suitableFor: ['urban-construction', 'landscaping', 'utilities', 'residential'],
      features: ['Zero tail swing', 'Compact design', 'Fuel efficient', 'Easy transport'],
      benefits: ['Maneuverability', 'Cost-effective', 'Versatile'],
      tags: ['compact', 'urban', 'versatile', 'efficient']
    },
    {
      id: 2,
      name: 'Wimforce 15 Ton Excavator',
      category: 'excavators',
      subcategory: 'mid-excavator',
      price: 125000,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviews: 18,
      inStock: true,
      specifications: {
        weight: 15,
        power: 85,
        digDepth: 6.2,
        reach: 8.5
      },
      suitableFor: ['construction', 'demolition', 'road-building', 'commercial'],
      features: ['High breakout force', 'Advanced hydraulics', 'Comfortable cab', 'GPS ready'],
      benefits: ['High productivity', 'Reliable', 'Operator comfort'],
      tags: ['powerful', 'construction', 'reliable', 'productive']
    },
    {
      id: 3,
      name: 'Wimforce 30 Ton Heavy Excavator',
      category: 'excavators',
      subcategory: 'large-excavator',
      price: 280000,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      reviews: 12,
      inStock: false,
      specifications: {
        weight: 30,
        power: 150,
        digDepth: 8.5,
        reach: 11.2
      },
      suitableFor: ['heavy-construction', 'mining', 'quarrying', 'infrastructure'],
      features: ['Maximum power', 'Heavy-duty build', 'Advanced systems', 'Long reach'],
      benefits: ['Extreme capability', 'Durability', 'Efficiency'],
      tags: ['heavy-duty', 'powerful', 'industrial', 'maximum-capacity']
    },
    {
      id: 4,
      name: 'Rotary Tiller 2.5m',
      category: 'tractor-implements',
      subcategory: 'tillage',
      price: 8500,
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      reviews: 31,
      inStock: true,
      specifications: {
        width: 2.5,
        power: 45,
        weight: 850
      },
      suitableFor: ['farming', 'agriculture', 'soil-preparation', 'small-farms'],
      features: ['Adjustable depth', 'Robust blades', 'Easy maintenance', 'Category II/III'],
      benefits: ['Soil preparation', 'Versatile', 'Durable'],
      tags: ['farming', 'soil', 'agriculture', 'preparation']
    },
    {
      id: 5,
      name: 'Electric Forklift 3T',
      category: 'warehouse',
      subcategory: 'forklift',
      price: 28000,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      rating: 4.5,
      reviews: 22,
      inStock: true,
      specifications: {
        capacity: 3,
        liftHeight: 4.5,
        batteryLife: 8
      },
      suitableFor: ['warehouse', 'logistics', 'indoor-operations', 'material-handling'],
      features: ['Zero emissions', 'Quiet operation', 'Long battery life', 'Ergonomic'],
      benefits: ['Eco-friendly', 'Low operating cost', 'Indoor suitable'],
      tags: ['electric', 'warehouse', 'eco-friendly', 'efficient']
    },
    {
      id: 6,
      name: 'Compact Tractor 45HP',
      category: 'agricultural',
      subcategory: 'tractor',
      price: 35000,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      reviews: 28,
      inStock: true,
      specifications: {
        power: 45,
        weight: 2200,
        fuel: 'diesel'
      },
      suitableFor: ['farming', 'agriculture', 'landscaping', 'small-medium-farms'],
      features: ['4WD', 'Front loader ready', 'Fuel efficient', 'Compact design'],
      benefits: ['Versatile', 'Reliable', 'Cost-effective'],
      tags: ['tractor', 'farming', 'versatile', 'compact']
    }
  ];

  // Recommendation algorithm
  const generateRecommendations = () => {
    setLoading(true);
    let scored = [];

    allProducts.forEach(product => {
      if (currentProduct && product.id === currentProduct.id) return;

      let score = 0;
      let reasons = [];

      // Category matching
      if (currentProduct) {
        if (product.category === currentProduct.category) {
          score += 30;
          if (product.subcategory === currentProduct.subcategory) {
            score += 20;
            reasons.push('Same category');
          } else {
            reasons.push('Related category');
          }
        }
      }

      // Project type matching
      if (projectType && product.suitableFor.includes(projectType)) {
        score += 25;
        reasons.push('Perfect for your project');
      }

      // User preferences matching
      if (userPreferences.budget) {
        const budget = parseInt(userPreferences.budget.replace(/[^\d]/g, ''));
        if (product.price <= budget * 1.1) { // 10% tolerance
          score += 15;
          if (product.price <= budget * 0.9) {
            score += 10;
            reasons.push('Within budget');
          }
        }
      }

      if (userPreferences.size) {
        if (product.specifications.weight && 
            Math.abs(product.specifications.weight - parseFloat(userPreferences.size)) < 2) {
          score += 20;
          reasons.push('Right size');
        }
      }

      if (userPreferences.features) {
        const matchingFeatures = product.features.filter(feature =>
          userPreferences.features.some(pref => 
            feature.toLowerCase().includes(pref.toLowerCase())
          )
        );
        score += matchingFeatures.length * 5;
        if (matchingFeatures.length > 0) {
          reasons.push('Has preferred features');
        }
      }

      // Popularity boost
      score += product.rating * 2;
      score += Math.min(product.reviews / 5, 10);

      // Availability boost
      if (product.inStock) {
        score += 10;
        reasons.push('In stock');
      }

      // Price competitiveness
      const categoryProducts = allProducts.filter(p => p.category === product.category);
      const avgPrice = categoryProducts.reduce((sum, p) => sum + p.price, 0) / categoryProducts.length;
      if (product.price < avgPrice) {
        score += 5;
        reasons.push('Competitive price');
      }

      scored.push({
        ...product,
        score,
        reasons: reasons.slice(0, 2) // Keep top 2 reasons
      });
    });

    // Sort by score and take top recommendations
    const topRecommendations = scored
      .sort((a, b) => b.score - a.score)
      .slice(0, maxRecommendations);

    setRecommendations(topRecommendations);
    setLoading(false);
  };

  useEffect(() => {
    generateRecommendations();
  }, [currentProduct, userPreferences, projectType, maxRecommendations]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-EU', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const renderCompactCard = (product) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="flex">
        <div className="w-24 h-24 flex-shrink-0">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 p-4">
          <h4 className="font-semibold text-gray-900 text-sm mb-1">
            {product.name}
          </h4>
          <p className="text-lg font-bold text-primary-600 mb-2">
            {formatPrice(product.price)}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <SafeIcon icon={FiStar} className="w-3 h-3 text-yellow-400 fill-current" />
              <span className="ml-1 text-xs text-gray-600">{product.rating}</span>
            </div>
            <Link 
              to={`/product/${product.id}`}
              className="text-xs text-primary-600 hover:text-primary-700 font-medium"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderDefaultCard = (product) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
    >
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            product.inStock 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {product.inStock ? 'In Stock' : 'Pre-order'}
          </span>
        </div>
        {product.reasons.length > 0 && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
              Recommended
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500 capitalize">
            {product.category.replace('-', ' ')}
          </span>
          <div className="flex items-center">
            <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        
        <div className="text-2xl font-bold text-primary-600 mb-3">
          {formatPrice(product.price)}
        </div>
        
        {product.reasons.length > 0 && (
          <div className="mb-4">
            {product.reasons.map((reason, index) => (
              <div key={index} className="flex items-center text-sm text-green-600 mb-1">
                <SafeIcon icon={FiCheck} className="w-3 h-3 mr-1" />
                {reason}
              </div>
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <Link 
            to={`/product/${product.id}`}
            className="text-primary-600 hover:text-primary-700 font-medium text-sm"
          >
            View Details
          </Link>
          <Link 
            to={`/quote?product=${product.id}`}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors flex items-center"
          >
            Get Quote
            <SafeIcon icon={FiArrowRight} className="ml-1 w-3 h-3" />
          </Link>
        </div>
      </div>
    </motion.div>
  );

  const renderDetailedCard = (product) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="md:flex">
        <div className="md:w-1/3">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 md:h-full object-cover"
          />
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-500 capitalize">
              {product.category.replace('-', ' ')}
            </span>
            <div className="flex items-center">
              <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {product.name}
          </h3>
          
          <div className="text-2xl font-bold text-primary-600 mb-4">
            {formatPrice(product.price)}
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <SafeIcon icon={FiTruck} className="w-4 h-4 mr-2" />
              {product.inStock ? 'In Stock' : 'Pre-order'}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <SafeIcon icon={FiClock} className="w-4 h-4 mr-2" />
              Fast Delivery
            </div>
          </div>
          
          {product.reasons.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Why recommended:</h4>
              {product.reasons.map((reason, index) => (
                <div key={index} className="flex items-center text-sm text-green-600 mb-1">
                  <SafeIcon icon={FiTarget} className="w-3 h-3 mr-2" />
                  {reason}
                </div>
              ))}
            </div>
          )}
          
          <div className="flex items-center gap-3">
            <Link 
              to={`/product/${product.id}`}
              className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-center hover:bg-gray-50 transition-colors"
            >
              View Details
            </Link>
            <Link 
              to={`/quote?product=${product.id}`}
              className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg text-center hover:bg-primary-700 transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-gray-200 rounded-lg h-64"></div>
          ))}
        </div>
      </div>
    );
  }

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {showTitle && (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Recommended for You
          </h2>
          <p className="text-gray-600">
            Based on your interests and project requirements
          </p>
        </div>
      )}
      
      <div className={`grid gap-6 ${
        variant === 'compact' 
          ? 'grid-cols-1 md:grid-cols-2' 
          : variant === 'detailed'
          ? 'grid-cols-1'
          : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
      }`}>
        {recommendations.map(product => {
          if (variant === 'compact') return renderCompactCard(product);
          if (variant === 'detailed') return renderDetailedCard(product);
          return renderDefaultCard(product);
        })}
      </div>
      
      {recommendations.length > 0 && (
        <div className="text-center">
          <Link 
            to="/products"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            View All Products
            <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductRecommendations;