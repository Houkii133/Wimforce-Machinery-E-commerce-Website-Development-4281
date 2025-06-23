import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSend, FiCheck, FiPhone, FiMail, FiClock, FiArrowLeft, FiArrowRight } = FiIcons;

const QuoteRequest = () => {
  const [searchParams] = useSearchParams();
  const preselectedProduct = searchParams.get('product');

  const [formData, setFormData] = useState({
    // Contact Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    
    // Project Information
    projectType: '',
    projectLocation: '',
    projectStartDate: '',
    projectDuration: '',
    
    // Equipment Requirements
    equipmentType: preselectedProduct || '',
    equipmentSize: '',
    quantity: '1',
    preferredBrand: 'wimforce',
    
    // Usage Information
    hoursPerDay: '',
    daysPerWeek: '',
    operatorExperience: '',
    
    // Additional Requirements
    attachments: [],
    transportRequired: false,
    maintenanceRequired: false,
    trainingRequired: false,
    
    // Budget and Preferences
    budgetRange: '',
    preferredOption: 'purchase', // purchase, lease, rent
    urgency: '',
    
    // Additional Information
    specialRequirements: '',
    previousExperience: '',
    additionalNotes: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = [
    { id: 1, title: 'Contact Info', description: 'Your details' },
    { id: 2, title: 'Project Details', description: 'About your project' },
    { id: 3, title: 'Equipment Needs', description: 'What you need' },
    { id: 4, title: 'Preferences', description: 'Budget & options' },
    { id: 5, title: 'Review', description: 'Confirm details' }
  ];

  const equipmentTypes = [
    { value: 'mini-excavator', label: 'Mini Excavator (0.6-6 tons)' },
    { value: 'mid-excavator', label: 'Mid-Size Excavator (7-15 tons)' },
    { value: 'large-excavator', label: 'Large Excavator (16+ tons)' },
    { value: 'tractor-implements', label: 'Tractor Implements' },
    { value: 'agricultural-equipment', label: 'Agricultural Equipment' },
    { value: 'forklift', label: 'Forklift' },
    { value: 'warehouse-equipment', label: 'Warehouse Equipment' },
    { value: 'other', label: 'Other (specify in notes)' }
  ];

  const attachmentOptions = [
    'Hydraulic Breaker',
    'Grapple',
    'Auger',
    'Quick Coupler',
    'Tiltrotator',
    'Bucket Variations',
    'Compactor',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAttachmentChange = (attachment) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.includes(attachment)
        ? prev.attachments.filter(a => a !== attachment)
        : [...prev.attachments, attachment]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Quote request submitted:', formData);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gray-50 flex items-center justify-center"
      >
        <div className="max-w-md mx-auto text-center p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <SafeIcon icon={FiCheck} className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Quote Request Submitted!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in Wimforce machinery. Our experts will review your requirements 
            and contact you within 24 hours with a personalized quote.
          </p>
          <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center">
                <SafeIcon icon={FiClock} className="w-4 h-4 mr-2 text-primary-600" />
                <span>Within 2 hours: Quote confirmation email</span>
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiPhone} className="w-4 h-4 mr-2 text-primary-600" />
                <span>Within 24 hours: Expert consultation call</span>
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiMail} className="w-4 h-4 mr-2 text-primary-600" />
                <span>Within 48 hours: Detailed quote proposal</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Reference ID: WMF-{Date.now().toString().slice(-6)}
          </p>
        </div>
      </motion.div>
    );
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your last name"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="+31 (0) 123 456 789"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name *
              </label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your company name"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Project Details</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Type *
              </label>
              <select
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select project type</option>
                <option value="construction">Construction</option>
                <option value="excavation">Excavation</option>
                <option value="landscaping">Landscaping</option>
                <option value="agriculture">Agriculture</option>
                <option value="warehouse">Warehouse/Logistics</option>
                <option value="demolition">Demolition</option>
                <option value="utilities">Utilities</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Location *
                </label>
                <input
                  type="text"
                  name="projectLocation"
                  required
                  value={formData.projectLocation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="City, Country"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Start Date
                </label>
                <input
                  type="date"
                  name="projectStartDate"
                  value={formData.projectStartDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Duration
              </label>
              <select
                name="projectDuration"
                value={formData.projectDuration}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select duration</option>
                <option value="1-week">1 Week</option>
                <option value="2-4-weeks">2-4 Weeks</option>
                <option value="1-3-months">1-3 Months</option>
                <option value="3-6-months">3-6 Months</option>
                <option value="6-12-months">6-12 Months</option>
                <option value="1-year-plus">1+ Years</option>
                <option value="ongoing">Ongoing</option>
              </select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Equipment Requirements</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Equipment Type *
              </label>
              <select
                name="equipmentType"
                required
                value={formData.equipmentType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select equipment type</option>
                {equipmentTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Equipment Size/Model
                </label>
                <input
                  type="text"
                  name="equipmentSize"
                  value={formData.equipmentSize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="e.g., 3.5 ton, 15 ton, etc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity *
                </label>
                <input
                  type="number"
                  name="quantity"
                  required
                  min="1"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Required Attachments
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {attachmentOptions.map(attachment => (
                  <label key={attachment} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.attachments.includes(attachment)}
                      onChange={() => handleAttachmentChange(attachment)}
                      className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{attachment}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Budget & Preferences</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Option *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { value: 'purchase', label: 'Purchase' },
                  { value: 'lease', label: 'Lease' },
                  { value: 'rent', label: 'Rent' }
                ].map(option => (
                  <label key={option.value} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="preferredOption"
                      value={option.value}
                      checked={formData.preferredOption === option.value}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500"
                    />
                    <span className="ml-2 font-medium">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range
              </label>
              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select budget range</option>
                <option value="under-25k">Under €25,000</option>
                <option value="25k-50k">€25,000 - €50,000</option>
                <option value="50k-100k">€50,000 - €100,000</option>
                <option value="100k-250k">€100,000 - €250,000</option>
                <option value="250k-500k">€250,000 - €500,000</option>
                <option value="over-500k">Over €500,000</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Timeline Urgency
              </label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select urgency</option>
                <option value="asap">ASAP (within 1 week)</option>
                <option value="2-weeks">Within 2 weeks</option>
                <option value="1-month">Within 1 month</option>
                <option value="flexible">Flexible timing</option>
              </select>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">Additional Services</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="transportRequired"
                    checked={formData.transportRequired}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Transportation/Delivery Required</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="maintenanceRequired"
                    checked={formData.maintenanceRequired}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Maintenance Package</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="trainingRequired"
                    checked={formData.trainingRequired}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Operator Training</span>
                </label>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Review Your Request</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
                  <p className="text-sm text-gray-600">
                    {formData.firstName} {formData.lastName}<br />
                    {formData.email}<br />
                    {formData.phone}<br />
                    {formData.company}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Equipment Request</h3>
                  <p className="text-sm text-gray-600">
                    Type: {equipmentTypes.find(t => t.value === formData.equipmentType)?.label || formData.equipmentType}<br />
                    Size: {formData.equipmentSize || 'Not specified'}<br />
                    Quantity: {formData.quantity}<br />
                    Option: {formData.preferredOption}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Any additional requirements, questions, or special considerations..."
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Request Equipment Quote</h1>
          <p className="text-gray-600">
            Get a personalized quote for your machinery needs. Our experts will contact you within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep >= step.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step.id}
                </div>
                <div className="ml-3 hidden sm:block">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.id ? 'text-primary-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-primary-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <SafeIcon icon={FiArrowLeft} className="w-4 h-4 mr-2" />
              Previous
            </button>

            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Next
                <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
              </button>
            ) : (
              <button
                type="submit"
                className="flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                <SafeIcon icon={FiSend} className="w-4 h-4 mr-2" />
                Submit Quote Request
              </button>
            )}
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default QuoteRequest;