import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowLeft, FiClock, FiBarChart, FiDownload, FiShare2, FiCheckCircle } = FiIcons;

const KnowledgeArticle = () => {
  const { slug } = useParams();

  // Mock article data - in real app, fetch by slug
  const article = {
    id: 1,
    title: 'How to Choose the Right Excavator by Tonnage',
    slug: 'choose-excavator-by-tonnage',
    category: 'buying-guides',
    description: 'Complete guide to selecting excavator size based on your project requirements and job site conditions.',
    readTime: '8 min read',
    difficulty: 'Beginner',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
    tags: ['Excavators', 'Buying Guide', 'Tonnage'],
    content: `Choosing the right excavator tonnage is one of the most critical decisions in equipment selection. The wrong choice can lead to inefficient operations, increased costs, and project delays. This comprehensive guide will help you make an informed decision.

## Understanding Excavator Weight Classes

Excavators are categorized by their operating weight, which includes the machine, full fuel tank, operator, and standard equipment. Here's how the industry typically classifies them:

### Mini Excavators (0.6 - 6 tons)
Perfect for confined spaces and precision work:
- **0.6 - 1.5 tons**: Ultra-compact for indoor work and tight access
- **1.6 - 3.5 tons**: Most popular mini size for landscaping and utilities  
- **3.6 - 6 tons**: Larger mini excavators for small construction projects

### Compact Excavators (6 - 10 tons)
The sweet spot for many contractors:
- Excellent balance of power and maneuverability
- Can handle most residential and light commercial work
- Transport easily on standard trailers

### Mid-Size Excavators (10 - 20 tons)
Workhorses of the construction industry:
- Ideal for general construction and road building
- Good reach and digging depth
- Higher productivity for medium to large projects

### Large Excavators (20+ tons)
For heavy-duty applications:
- Major construction projects
- Mining and quarrying operations
- Maximum digging force and reach

## Key Factors in Tonnage Selection

### 1. Job Site Constraints

**Space Limitations:**
- Measure available working space
- Consider access routes and overhead clearances
- Account for swing radius requirements
- Evaluate ground conditions and bearing capacity

**Transportation Requirements:**
- Standard trailers handle up to 8-10 tons without permits
- Larger machines require special transport arrangements
- Consider mobilization costs in your budget

### 2. Material Characteristics

**Soil Type:**
- Soft soils: Smaller machines may suffice
- Hard clay or rocky conditions: Require more power
- Mixed conditions: Consider versatility needs

**Material Density:**
- Lighter materials allow smaller machines
- Heavy materials (concrete, rock) need more lifting capacity
- Consider bucket size and cycle times

### 3. Project Scope and Duration

**Dig Depth Requirements:**
- Mini excavators: 2-4 meters typical
- Mid-size machines: 4-7 meters
- Large excavators: 7+ meters

**Production Requirements:**
- Calculate required cubic meters per day
- Factor in cycle times and efficiency
- Consider operator skill levels

### 4. Attachment Compatibility

**Weight Considerations:**
- Hydraulic breakers require adequate machine weight
- Large buckets need sufficient lifting capacity
- Specialized attachments may dictate minimum size

**Hydraulic Requirements:**
- Check flow and pressure specifications
- Ensure compatibility with planned attachments
- Consider future attachment needs

## Sizing Guidelines by Application

### Urban Construction
- **Recommended**: 3-8 ton machines
- **Reasons**: Confined spaces, noise restrictions, transport ease
- **Typical work**: Utility installation, foundation work, site prep

### Road Construction  
- **Recommended**: 12-20 ton machines
- **Reasons**: Good reach, high productivity, material handling
- **Typical work**: Excavation, grading, culvert installation

### Residential Development
- **Recommended**: 5-12 ton machines  
- **Reasons**: Versatility, reasonable transport costs, adequate power
- **Typical work**: Basement excavation, utilities, landscaping

### Commercial Construction
- **Recommended**: 15-25 ton machines
- **Reasons**: Deep excavations, heavy materials, high productivity
- **Typical work**: Foundation work, site development, material handling

## Cost Considerations

### Purchase/Rental Costs
- Mini excavators: €200-400/day rental
- Mid-size machines: €400-800/day rental  
- Large excavators: €800-1,500/day rental

### Operating Costs
- Fuel consumption increases with size
- Maintenance costs scale with machine complexity
- Operator wages may vary by machine type

### Productivity Analysis
Calculate cost per cubic meter moved:
- Factor in machine hourly rate
- Include fuel and operator costs
- Account for cycle times and efficiency

## Common Sizing Mistakes

### Undersizing Problems
- Insufficient digging force for soil conditions
- Poor productivity leading to project delays
- Inability to handle required attachments
- Operator fatigue from overworking machine

### Oversizing Issues  
- Unnecessary high operating costs
- Transport and access difficulties
- Overkill for project requirements
- Reduced profitability

## Making the Final Decision

### Step-by-Step Process

1. **Analyze Project Requirements**
   - List all tasks the machine must perform
   - Identify the most demanding application
   - Consider attachment requirements

2. **Evaluate Site Conditions**
   - Measure access points and working space
   - Assess ground conditions
   - Check for overhead restrictions

3. **Calculate Economics**
   - Compare total costs for different size options
   - Factor in productivity differences
   - Consider rental vs. purchase implications

4. **Plan for Flexibility**
   - Choose size that handles 80% of your work efficiently
   - Consider renting specialized machines for unique tasks
   - Think about future project requirements

## Expert Recommendations

### For New Contractors
Start with a versatile mid-size machine (8-12 tons) that can handle a wide range of work while remaining economical to operate.

### For Established Operations  
Analyze your historical project data to identify the optimal size based on actual usage patterns.

### For Specialized Applications
Don't compromise on the requirements of your primary work, even if it means higher operating costs.

## Conclusion

Selecting the right excavator tonnage requires careful analysis of your specific needs, site conditions, and economic factors. While it's tempting to choose based on purchase price alone, the total cost of ownership and productivity impact should drive your decision.

Take time to thoroughly evaluate your requirements, consult with equipment dealers, and consider renting different sizes to gain experience before making a purchase decision. The right choice will serve your business well for years to come.

Remember: it's better to have slightly more capacity than you need rather than being underpowered for critical applications.`,
    relatedArticles: [
      {
        id: 2,
        title: 'Understanding Breakout Force: What It Means and Why It Matters',
        slug: 'excavator-breakout-force-explained',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 3,
        title: 'Mini Excavator vs Skid Steer: Which Works Best in Tight Spaces?',
        slug: 'mini-excavator-vs-skid-steer-comparison',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400&q=80'
      }
    ]
  };

  const formatContent = (content) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            {paragraph.replace('### ', '')}
          </h3>
        );
      }
      if (paragraph.startsWith('**') && paragraph.endsWith(':**')) {
        return (
          <h4 key={index} className="text-lg font-semibold text-gray-900 mt-4 mb-2">
            {paragraph.replace(/\*\*/g, '').replace(':', '')}
          </h4>
        );
      }
      if (paragraph.includes('- **') || paragraph.startsWith('- ')) {
        const listItems = paragraph.split('\n').filter(item => item.startsWith('- '));
        return (
          <ul key={index} className="list-disc list-inside space-y-2 mb-4 text-gray-700">
            {listItems.map((item, i) => {
              const cleanItem = item.replace('- ', '');
              if (cleanItem.includes('**')) {
                const parts = cleanItem.split('**');
                return (
                  <li key={i}>
                    <strong>{parts[1]}</strong>{parts[2] || ''}
                  </li>
                );
              }
              return <li key={i}>{cleanItem}</li>;
            })}
          </ul>
        );
      }
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-4">
          {paragraph}
        </p>
      );
    });
  };

  const difficultyColor = {
    'Beginner': 'bg-green-100 text-green-600',
    'Intermediate': 'bg-yellow-100 text-yellow-600',
    'Advanced': 'bg-red-100 text-red-600'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Image */}
      <div className="relative h-96 bg-gray-900">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="pt-8 mb-6">
          <Link
            to="/knowledge"
            className="inline-flex items-center text-primary-600 hover:text-primary-700"
          >
            <SafeIcon icon={FiArrowLeft} className="w-4 h-4 mr-2" />
            Back to Knowledge Hub
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-lg border border-gray-200 -mt-32 relative z-10 mb-12">
          <div className="p-8 lg:p-12">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                Buying Guide
              </span>
              <div className="flex items-center text-sm text-gray-500">
                <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" />
                <span>{article.readTime}</span>
              </div>
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${difficultyColor[article.difficulty]}`}>
                <SafeIcon icon={FiBarChart} className="w-4 h-4 mr-1 inline" />
                {article.difficulty}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              {article.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pb-8 mb-8 border-b border-gray-200">
              <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                <SafeIcon icon={FiDownload} className="w-4 h-4 mr-2" />
                Download PDF
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                <SafeIcon icon={FiShare2} className="w-4 h-4 mr-2" />
                Share Guide
              </button>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <SafeIcon icon={FiCheckCircle} className="w-5 h-5 mr-2 text-primary-600" />
                What You'll Learn
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Understanding excavator weight classifications</li>
                <li>• Key factors in tonnage selection process</li>
                <li>• Application-specific sizing guidelines</li>
                <li>• Cost analysis and productivity calculations</li>
                <li>• Common mistakes and how to avoid them</li>
                <li>• Expert recommendations for different scenarios</li>
              </ul>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {formatContent(article.content)}
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {article.relatedArticles && article.relatedArticles.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {article.relatedArticles.map(relatedArticle => (
                <Link
                  key={relatedArticle.id}
                  to={`/knowledge/${relatedArticle.slug}`}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors">
                      {relatedArticle.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-primary-600 text-white rounded-lg p-8 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Need Help Choosing Equipment?
            </h2>
            <p className="text-primary-100 mb-6">
              Our equipment experts can help you select the perfect excavator for your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Speak with Expert
              </Link>
              <Link
                to="/quote"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Get Equipment Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default KnowledgeArticle;