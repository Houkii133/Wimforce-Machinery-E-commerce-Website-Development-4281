import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSearch, FiBook, FiTool, FiBarChart3, FiSettings, FiShield, FiArrowRight } = FiIcons;

const KnowledgeHub = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Guides', icon: FiBook, color: 'bg-blue-100 text-blue-600' },
    { id: 'buying-guides', name: 'Buying Guides', icon: FiBarChart3, color: 'bg-green-100 text-green-600' },
    { id: 'how-to', name: 'How-To Guides', icon: FiTool, color: 'bg-purple-100 text-purple-600' },
    { id: 'comparisons', name: 'Comparisons', icon: FiBarChart3, color: 'bg-orange-100 text-orange-600' },
    { id: 'technical', name: 'Technical Specs', icon: FiSettings, color: 'bg-red-100 text-red-600' },
    { id: 'maintenance', name: 'Maintenance', icon: FiShield, color: 'bg-yellow-100 text-yellow-600' }
  ];

  const articles = [
    {
      id: 1,
      title: 'How to Choose the Right Excavator by Tonnage',
      slug: 'choose-excavator-by-tonnage',
      category: 'buying-guides',
      description: 'Complete guide to selecting excavator size based on your project requirements and job site conditions.',
      readTime: '8 min read',
      difficulty: 'Beginner',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      tags: ['Excavators', 'Buying Guide', 'Tonnage'],
      featured: true
    },
    {
      id: 2,
      title: 'Tractor Implements 101: What You Need for Your Farm',
      slug: 'tractor-implements-farm-guide',
      category: 'buying-guides',
      description: 'Essential tractor implements every farmer should consider, from basic tillage to specialized attachments.',
      readTime: '6 min read',
      difficulty: 'Beginner',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80',
      tags: ['Tractor Implements', 'Agriculture', 'Farming'],
      featured: true
    },
    {
      id: 3,
      title: 'How to Attach and Remove a Quick Coupler on Your Digger',
      slug: 'quick-coupler-attachment-guide',
      category: 'how-to',
      description: 'Step-by-step instructions for safely operating quick couplers on excavators and mini diggers.',
      readTime: '4 min read',
      difficulty: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      tags: ['Excavators', 'Quick Coupler', 'Safety'],
      featured: false
    },
    {
      id: 4,
      title: 'Using a Forklift on Uneven Ground: Safety Protocols',
      slug: 'forklift-uneven-ground-safety',
      category: 'how-to',
      description: 'Essential safety procedures for operating forklifts on slopes and uneven surfaces.',
      readTime: '5 min read',
      difficulty: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      tags: ['Forklifts', 'Safety', 'Operations'],
      featured: false
    },
    {
      id: 5,
      title: 'Mini Excavator vs Skid Steer: Which Works Best in Tight Spaces?',
      slug: 'mini-excavator-vs-skid-steer-comparison',
      category: 'comparisons',
      description: 'Detailed comparison of mini excavators and skid steers for confined job sites and urban construction.',
      readTime: '7 min read',
      difficulty: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      tags: ['Mini Excavators', 'Skid Steer', 'Comparison'],
      featured: true
    },
    {
      id: 6,
      title: 'Understanding Breakout Force: What It Means and Why It Matters',
      slug: 'excavator-breakout-force-explained',
      category: 'technical',
      description: 'Technical explanation of excavator breakout force and how it affects digging performance.',
      readTime: '6 min read',
      difficulty: 'Advanced',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
      tags: ['Technical Specs', 'Excavators', 'Performance'],
      featured: false
    },
    {
      id: 7,
      title: 'What is a Zero-Tail Swing Excavator?',
      slug: 'zero-tail-swing-excavator-explained',
      category: 'technical',
      description: 'Complete guide to zero-tail swing excavators and their advantages in confined spaces.',
      readTime: '5 min read',
      difficulty: 'Beginner',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      tags: ['Excavators', 'Zero-Tail Swing', 'Urban Construction'],
      featured: false
    },
    {
      id: 8,
      title: 'Excavator Track Maintenance: Prevent Downtime',
      slug: 'excavator-track-maintenance-guide',
      category: 'maintenance',
      description: 'Essential maintenance procedures to extend excavator track life and prevent costly repairs.',
      readTime: '8 min read',
      difficulty: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      tags: ['Maintenance', 'Excavator Tracks', 'Prevention'],
      featured: false
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = articles.filter(article => article.featured);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Knowledge Hub
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Technical guides, buyer's guides, and how-to support for construction, agricultural, 
            and warehouse equipment. Your complete resource for machinery knowledge.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto relative"
          >
            <input
              type="text"
              placeholder="Search guides and articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-gray-900 bg-white rounded-lg shadow-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
            />
            <SafeIcon icon={FiSearch} className="absolute left-4 top-4 w-6 h-6 text-gray-400" />
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-lg text-center transition-all hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-primary-100 text-primary-700 ring-2 ring-primary-500'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2 ${
                  selectedCategory === category.id ? 'bg-primary-500 text-white' : category.color
                }`}>
                  <SafeIcon icon={category.icon} className="w-6 h-6" />
                </div>
                <div className="text-sm font-medium">{category.name}</div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Featured Articles */}
        {selectedCategory === 'all' && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        categories.find(cat => cat.id === article.category)?.color || 'bg-gray-100 text-gray-600'
                      }`}>
                        {categories.find(cat => cat.id === article.category)?.name}
                      </span>
                      <span className="text-xs text-gray-500">{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                      <Link to={`/knowledge/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        article.difficulty === 'Beginner' ? 'bg-green-100 text-green-600' :
                        article.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-red-100 text-red-600'
                      }`}>
                        {article.difficulty}
                      </span>
                      <Link
                        to={`/knowledge/${article.slug}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                      >
                        Read Guide
                        <SafeIcon icon={FiArrowRight} className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* All Articles */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All Guides' : 
               categories.find(cat => cat.id === selectedCategory)?.name || 'Guides'}
            </h2>
            <div className="text-sm text-gray-600">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        categories.find(cat => cat.id === article.category)?.color || 'bg-gray-100 text-gray-600'
                      }`}>
                        {categories.find(cat => cat.id === article.category)?.name}
                      </span>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span>{article.readTime}</span>
                        <span>•</span>
                        <span className={`px-2 py-1 rounded-full ${
                          article.difficulty === 'Beginner' ? 'bg-green-100 text-green-600' :
                          article.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-red-100 text-red-600'
                        }`}>
                          {article.difficulty}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                      <Link to={`/knowledge/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/knowledge/${article.slug}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                      >
                        Read Guide
                        <SafeIcon icon={FiArrowRight} className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No guides found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>
      </div>
    </motion.div>
  );
};

export default KnowledgeHub;