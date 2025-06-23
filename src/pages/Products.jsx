import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiFilter, FiGrid, FiList, FiSearch, FiArrowRight } = FiIcons;

const Products = () => {
  const { category } = useParams();
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  const [priceRange, setPriceRange] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'excavators', name: 'Excavators', count: 8 },
    { id: 'tractor-implements', name: 'Tractor Implements', count: 6 },
    { id: 'agricultural', name: 'Agricultural Equipment', count: 5 },
    { id: 'warehouse', name: 'Warehouse Equipment', count: 5 }
  ];

  const products = [
    {
      id: 1,
      name: 'Wimforce 3.5 Ton Mini Excavator',
      category: 'excavators',
      price: '€45,000',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      description: 'Perfect for urban construction and landscaping projects. High-performance hydraulic system.',
      specs: ['3.5 ton operating weight', '2.8m dig depth', 'Zero tail swing'],
      inStock: true
    },
    {
      id: 2,
      name: 'Wimforce 15 Ton Excavator',
      category: 'excavators',
      price: '€125,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      description: 'Mid-size powerhouse for construction and demolition. Exceptional reach and digging force.',
      specs: ['15 ton operating weight', '6.2m dig depth', '360° rotation'],
      inStock: true
    },
    {
      id: 3,
      name: 'Wimforce 30 Ton Heavy Excavator',
      category: 'excavators',
      price: '€280,000',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
      description: 'Heavy-duty excavator for large construction projects. Maximum power and reliability.',
      specs: ['30 ton operating weight', '8.5m dig depth', 'Advanced hydraulics'],
      inStock: false
    },
    {
      id: 4,
      name: 'Rotary Tiller 2.5m',
      category: 'tractor-implements',
      price: '€8,500',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80',
      description: 'Professional rotary tiller for soil preparation. Robust construction for long-lasting performance.',
      specs: ['2.5m working width', 'Adjustable depth', 'Category II/III hitch'],
      inStock: true
    },
    {
      id: 5,
      name: 'Heavy Duty Disc Harrow',
      category: 'tractor-implements',
      price: '€12,000',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80',
      description: 'Professional disc harrow for field preparation. Superior soil cutting and mixing.',
      specs: ['3.2m working width', '24 discs', 'Hydraulic adjustment'],
      inStock: true
    },
    {
      id: 6,
      name: 'Compact Tractor 45HP',
      category: 'agricultural',
      price: '€35,000',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
      description: 'Versatile compact tractor perfect for small to medium farms. Reliable and fuel-efficient.',
      specs: ['45 HP engine', '4WD', 'Front loader ready'],
      inStock: true
    },
    {
      id: 7,
      name: 'Electric Forklift 3T',
      category: 'warehouse',
      price: '€28,000',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      description: 'Eco-friendly electric forklift for indoor warehouse operations. Quiet and efficient.',
      specs: ['3 ton capacity', '4.5m lift height', '8-hour battery'],
      inStock: true
    },
    {
      id: 8,
      name: 'Heavy Duty Pallet Jack',
      category: 'warehouse',
      price: '€1,200',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
      description: 'Manual pallet jack for efficient material handling. Built for daily heavy use.',
      specs: ['2.5 ton capacity', 'Ergonomic handle', 'Durable construction'],
      inStock: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {selectedCategory === 'all' ? 'All Products' : 
             categories.find(cat => cat.id === selectedCategory)?.name || 'Products'}
          </h1>
          <p className="text-lg text-gray-600">
            Professional machinery for construction, agriculture, and warehouse operations
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <SafeIcon icon={FiFilter} className="w-5 h-5 mr-2" />
                Filters
              </h3>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                  <SafeIcon icon={FiSearch} className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Categories</label>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === cat.id
                          ? 'bg-primary-100 text-primary-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{cat.name}</span>
                        <span className="text-sm text-gray-500">({cat.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-600">
                  Showing {filteredProducts.length} products
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-600'}`}
                    >
                      <SafeIcon icon={FiGrid} className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-600'}`}
                    >
                      <SafeIcon icon={FiList} className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  <div className={`${viewMode === 'list' ? 'w-1/3' : 'w-full'}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full object-cover ${viewMode === 'list' ? 'h-full' : 'h-48'}`}
                    />
                  </div>
                  <div className={`p-6 ${viewMode === 'list' ? 'w-2/3 flex flex-col justify-between' : ''}`}>
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          product.inStock 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {product.inStock ? 'In Stock' : 'Pre-order'}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <ul className="space-y-1 mb-4">
                        {product.specs.map((spec, i) => (
                          <li key={i} className="text-sm text-gray-500 flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-2xl font-bold text-primary-600">{product.price}</div>
                      <div className="flex gap-2">
                        <Link
                          to={`/product/${product.id}`}
                          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          View Details
                        </Link>
                        <Link
                          to={`/quote?product=${product.id}`}
                          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center"
                        >
                          Get Quote
                          <SafeIcon icon={FiArrowRight} className="ml-1 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Products;