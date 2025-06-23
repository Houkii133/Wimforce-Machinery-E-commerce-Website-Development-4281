import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiUser, FiArrowRight, FiSearch, FiTag } = FiIcons;

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', icon: FiTag },
    { id: 'excavator-advice', name: 'Excavator Advice', icon: FiTag },
    { id: 'farming-implements', name: 'Farming & Tractor Implements', icon: FiTag },
    { id: 'construction-tips', name: 'Construction Equipment Tips', icon: FiTag },
    { id: 'warehouse-logistics', name: 'Warehouse & Logistics', icon: FiTag },
    { id: 'maintenance', name: 'Maintenance & Ownership', icon: FiTag }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Mini Excavator vs. Mid-Size: Which One Suits Your Job?',
      slug: 'mini-excavator-vs-mid-size-guide',
      excerpt: 'Choosing the right excavator size is crucial for project success. Learn the key differences between mini and mid-size excavators to make an informed decision.',
      content: `When it comes to excavator selection, size matters more than you might think. The choice between a mini excavator and a mid-size machine can significantly impact your project's efficiency, cost, and overall success.

**Mini Excavators (0.6 - 6 tons)**

Mini excavators excel in confined spaces and urban environments. Their compact design allows them to access tight job sites where larger machines simply cannot operate. Key advantages include:

- **Maneuverability**: Zero tail swing models can operate in spaces as narrow as the machine itself
- **Transportation**: Can be transported on standard trailers without special permits
- **Versatility**: Perfect for landscaping, utility work, and residential construction
- **Operating costs**: Lower fuel consumption and reduced operator fatigue

**Mid-Size Excavators (7 - 15 tons)**

Mid-size excavators offer the perfect balance of power and versatility. They're ideal for:

- **General construction**: Road building, site preparation, and foundation work
- **Digging depth**: Typically offer 4-6 meters of dig depth
- **Lifting capacity**: Can handle heavier materials and larger attachments
- **Productivity**: Higher hourly production rates for medium to large projects

**Making the Right Choice**

Consider these factors when choosing:

1. **Job site constraints**: Available space and access limitations
2. **Material type**: Soil conditions and material density
3. **Project duration**: Long-term projects may benefit from higher productivity
4. **Transportation**: Consider delivery and mobilization costs
5. **Operator experience**: Smaller machines are generally easier to operate

**Cost Considerations**

While mini excavators have lower upfront costs, mid-size machines often provide better value for larger projects due to higher productivity. Calculate the total cost including:

- Purchase or rental price
- Transportation costs
- Fuel consumption
- Operator wages
- Project timeline impact

**Conclusion**

The right excavator choice depends on your specific project requirements. Mini excavators are perfect for precision work in tight spaces, while mid-size machines excel in general construction applications. Consider consulting with equipment experts to ensure you select the optimal machine for your needs.`,
      category: 'excavator-advice',
      author: 'Erik van der Berg',
      publishedAt: new Date('2024-01-15'),
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      tags: ['Excavators', 'Equipment Selection', 'Construction']
    },
    {
      id: 2,
      title: 'Top 5 Attachments to Boost Your Excavator Productivity',
      slug: 'top-excavator-attachments-productivity',
      excerpt: 'Maximize your excavator\'s versatility with these essential attachments. From hydraulic breakers to grapples, discover tools that can transform your machine.',
      content: `Excavator attachments can dramatically expand your machine's capabilities and increase jobsite productivity. Here are the top 5 attachments every contractor should consider:

**1. Hydraulic Breaker**

Perfect for demolition and breaking concrete or rock. Modern hydraulic breakers offer:
- Variable impact energy
- Auto-lubrication systems
- Noise reduction technology
- Multiple chisel options

**2. Grapple Attachment**

Essential for material handling and cleanup work:
- 360-degree rotation capability
- Various jaw configurations
- Ideal for scrap handling and demolition cleanup
- Reduces manual labor requirements

**3. Auger Drive**

For precision drilling applications:
- Foundation work and pole installation
- Various bit sizes available
- High torque output
- Precise depth control

**4. Tiltrotator**

The ultimate versatility attachment:
- 360-degree rotation plus tilt capability
- Reduces machine repositioning
- Increases precision in tight spaces
- Popular in European markets

**5. Quick Coupler**

Enables rapid attachment changes:
- Fully hydraulic operation
- Safety locking mechanisms
- Reduces downtime between tasks
- Essential for multi-task operations

**Selection Tips:**

- Match attachment weight to excavator capacity
- Consider hydraulic flow requirements
- Ensure proper mounting compatibility
- Factor in maintenance requirements

Investing in quality attachments can increase your excavator's utilization rate by up to 40% while opening new revenue opportunities.`,
      category: 'excavator-advice',
      author: 'Marco de Wit',
      publishedAt: new Date('2024-01-10'),
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      tags: ['Excavators', 'Attachments', 'Productivity']
    },
    {
      id: 3,
      title: 'Best Implements for Small-Scale Farming in Europe',
      slug: 'best-implements-small-scale-farming-europe',
      excerpt: 'Discover the essential tractor implements that can help small European farms maximize efficiency and profitability in today\'s competitive agricultural market.',
      content: `Small-scale farming in Europe faces unique challenges, from diverse crop requirements to varying soil conditions. The right implements can make the difference between a profitable operation and financial struggle.

**Essential Implements for European Small Farms:**

**Rotary Tiller**
- Perfect for seedbed preparation
- Works well in European clay soils
- Available in 1.5-3m working widths
- PTO-driven for efficient operation

**Disc Harrow**
- Excellent for primary tillage
- Breaks up compacted soil layers
- Handles crop residue effectively
- Adjustable working depth

**Mower/Conditioner**
- Essential for hay production
- Speeds up drying process
- Available in various cutting widths
- Reduces manual labor significantly

**Manure Spreader**
- Improves soil fertility
- Reduces fertilizer costs
- Even distribution patterns
- Various capacity options

**Seeder/Drill**
- Precision seed placement
- Reduces seed waste
- Consistent emergence
- Multiple crop compatibility

**European Considerations:**

1. **Soil Types**: Heavy clay soils require robust implements
2. **Field Size**: Compact implements suit smaller European fields
3. **Regulations**: EU emissions and safety standards
4. **Weather**: Implements must handle wet conditions
5. **Crop Diversity**: Multi-purpose tools provide better value

**ROI Analysis:**

Quality implements typically pay for themselves within 2-3 seasons through:
- Reduced labor costs
- Improved crop yields
- Lower fuel consumption
- Decreased soil compaction

**Maintenance Tips:**

- Regular lubrication schedules
- Proper storage practices
- Seasonal inspections
- Genuine parts usage

Investing in the right implements is crucial for small farm success. Consider your specific crops, soil conditions, and budget when making selections.`,
      category: 'farming-implements',
      author: 'Anna Janssen',
      publishedAt: new Date('2024-01-05'),
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80',
      tags: ['Agriculture', 'Tractor Implements', 'Small Farms', 'Europe']
    },
    {
      id: 4,
      title: 'Electric vs Diesel Forklifts: Pros and Cons',
      slug: 'electric-vs-diesel-forklifts-comparison',
      excerpt: 'Compare electric and diesel forklifts to determine which power source best suits your warehouse operations, considering cost, performance, and environmental factors.',
      content: `The choice between electric and diesel forklifts significantly impacts operational efficiency, costs, and environmental footprint. Here's a comprehensive comparison to help you decide.

**Electric Forklifts**

**Advantages:**
- Zero emissions - perfect for indoor use
- Lower operating costs - electricity cheaper than diesel
- Quieter operation - reduces workplace noise
- Less maintenance - fewer moving parts
- Instant torque - excellent acceleration
- Government incentives available in many regions

**Disadvantages:**
- Higher upfront cost
- Limited runtime - typically 6-8 hours
- Charging infrastructure required
- Weather sensitivity in outdoor applications
- Battery replacement costs

**Diesel Forklifts**

**Advantages:**
- Lower initial purchase price
- Unlimited runtime with quick refueling
- Superior performance in outdoor conditions
- Higher lifting capacity available
- Established service infrastructure
- Better resale value traditionally

**Disadvantages:**
- Emissions - not suitable for indoor use
- Higher fuel costs
- More maintenance required
- Noise levels
- Regulatory restrictions increasing

**Cost Analysis (5-Year TCO):**

**Electric Forklift:**
- Purchase: €28,000
- Energy: €3,500
- Maintenance: €2,000
- Battery replacement: €5,000
- Total: €38,500

**Diesel Forklift:**
- Purchase: €22,000
- Fuel: €12,000
- Maintenance: €6,000
- Total: €40,000

**Best Applications:**

**Choose Electric for:**
- Indoor warehouse operations
- Food and pharmaceutical industries
- Multi-shift operations
- Noise-sensitive environments
- Companies with sustainability goals

**Choose Diesel for:**
- Outdoor applications
- Heavy-duty lifting requirements
- Single-shift operations
- Remote locations without reliable power
- Budget-constrained purchases

**Future Trends:**

The industry is moving toward electric power due to:
- Improving battery technology
- Stricter emissions regulations
- Corporate sustainability initiatives
- Decreasing battery costs
- Government incentives

**Conclusion:**

While diesel forklifts still have advantages in specific applications, electric forklifts are becoming the preferred choice for most warehouse operations due to lower operating costs and environmental benefits.`,
      category: 'warehouse-logistics',
      author: 'Marco de Wit',
      publishedAt: new Date('2023-12-28'),
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      tags: ['Forklifts', 'Warehouse Equipment', 'Electric vs Diesel']
    },
    {
      id: 5,
      title: 'Winterizing Your Construction Equipment: A Step-by-Step Guide',
      slug: 'winterizing-construction-equipment-guide',
      excerpt: 'Protect your valuable construction equipment during winter months with this comprehensive maintenance guide. Prevent costly repairs and downtime.',
      content: `Winter weather can be brutal on construction equipment. Proper winterization protects your investment and ensures reliable spring startup. Follow this comprehensive guide to prepare your machines.

**Pre-Winter Inspection Checklist:**

**Engine and Cooling System:**
- Check coolant mixture (50/50 ratio minimum)
- Inspect hoses for cracks or leaks
- Test thermostat operation
- Clean radiator and oil cooler
- Replace air filter if dirty
- Check fan belt tension

**Hydraulic System:**
- Switch to winter-grade hydraulic fluid
- Check cylinder seals for leaks
- Inspect hydraulic hoses
- Clean hydraulic tank breather
- Test relief valve operation

**Fuel System:**
- Add fuel stabilizer
- Fill tank to prevent condensation
- Replace fuel filters
- Check fuel lines for leaks
- Consider winter fuel additives

**Battery and Electrical:**
- Test battery capacity
- Clean terminals and connections
- Check alternator output
- Inspect wiring for damage
- Test starting system

**Tracks and Undercarriage:**
- Clean mud and debris
- Check track tension
- Inspect sprockets and idlers
- Grease all fittings
- Check for worn components

**Storage Procedures:**

**Indoor Storage (Preferred):**
- Clean equipment thoroughly
- Apply rust preventive coating
- Disconnect battery or use maintainer
- Block up equipment to relieve tire/track pressure
- Cover with breathable tarp

**Outdoor Storage:**
- Choose well-drained location
- Position away from prevailing winds
- Use quality equipment covers
- Elevate on blocks or pallets
- Secure against theft

**Monthly Maintenance During Storage:**

1. Start engine and run to operating temperature
2. Exercise hydraulic functions
3. Move machine short distances
4. Check fluid levels
5. Inspect for rodent damage

**Pre-Spring Startup:**

- Check all fluid levels
- Inspect belts and hoses
- Test all functions
- Warm up gradually
- Perform full service

**Regional Considerations:**

**Northern Europe:**
- Use synthetic fluids
- Consider engine block heaters
- Plan for extended storage periods
- Monitor for freeze damage

**Coastal Areas:**
- Increase corrosion protection
- Check electrical connections frequently
- Use marine-grade lubricants
- Consider dehumidifiers in storage

**Cost of Winterization vs Repairs:**

Proper winterization costs approximately €500-1,000 per machine but can prevent:
- Engine damage: €5,000-15,000
- Hydraulic system failure: €3,000-8,000
- Cooling system damage: €1,000-3,000
- Electrical problems: €500-2,000

**Professional Services:**

Consider professional winterization for:
- Large fleets
- Critical equipment
- Warranty compliance
- Complex machines

Many dealers offer winterization packages that include pickup, service, and storage.

**Conclusion:**

Investing time and money in proper winterization pays dividends in equipment reliability and longevity. Start preparations early and follow manufacturer recommendations for best results.`,
      category: 'maintenance',
      author: 'Erik van der Berg',
      publishedAt: new Date('2023-12-20'),
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
      tags: ['Maintenance', 'Winter Preparation', 'Equipment Care']
    },
    {
      id: 6,
      title: 'How Much Does an Excavator Cost in 2025?',
      slug: 'excavator-cost-guide-2025',
      excerpt: 'Complete pricing guide for excavators in 2025. Compare new vs used prices, financing options, and total cost of ownership across different size categories.',
      content: `Excavator pricing varies significantly based on size, features, and market conditions. Here's your complete 2025 cost guide.

**New Excavator Prices by Category:**

**Mini Excavators (0.6 - 6 tons):**
- 1-2 ton: €15,000 - €35,000
- 3-4 ton: €35,000 - €55,000
- 5-6 ton: €50,000 - €75,000

**Mid-Size Excavators (7 - 15 tons):**
- 7-9 ton: €75,000 - €120,000
- 10-12 ton: €110,000 - €160,000
- 13-15 ton: €150,000 - €220,000

**Large Excavators (16 - 30+ tons):**
- 16-20 ton: €200,000 - €300,000
- 21-25 ton: €280,000 - €400,000
- 26-30+ ton: €380,000 - €600,000+

**Used Excavator Values:**

Generally 40-60% of new price depending on:
- Age and hours
- Maintenance history
- Market demand
- Condition and modifications

**Factors Affecting Price:**

**Standard Features:**
- Basic hydraulic system
- Standard cab
- Manual controls
- Basic attachments

**Premium Features (+10-30% cost):**
- Advanced hydraulic systems
- GPS/telematics
- Joystick controls
- Climate control
- LED lighting
- Quick couplers

**Financing Options:**

**Traditional Loans:**
- 5-7 year terms typical
- 4-8% interest rates
- 10-20% down payment
- Fixed monthly payments

**Leasing:**
- Lower monthly payments
- Tax advantages
- Upgrade flexibility
- Maintenance packages available

**Rent-to-Own:**
- No large down payment
- Apply payments to purchase
- Flexibility to return
- Higher total cost

**Total Cost of Ownership (5 years):**

**15-ton Excavator Example:**
- Purchase price: €180,000
- Financing cost: €25,000
- Insurance: €15,000
- Maintenance: €35,000
- Fuel: €45,000
- Depreciation: €90,000
- **Total: €390,000**

**Cost per Hour Calculations:**

Assuming 1,000 hours/year:
- €390,000 ÷ 5,000 hours = €78/hour

**Regional Price Variations:**

**Netherlands/Germany:** Highest prices due to regulations
**Eastern Europe:** 15-25% lower costs
**Scandinavia:** Premium for cold weather packages
**Southern Europe:** Standard pricing, higher demand

**Market Trends 2025:**

- Electric excavators entering market (20-30% premium)
- Autonomous features increasing costs
- Supply chain improvements stabilizing prices
- Used market remaining strong

**Buying Tips:**

1. **Compare total cost, not just purchase price**
2. **Consider warranty coverage**
3. **Evaluate dealer support**
4. **Check parts availability**
5. **Research resale values**

**When to Buy New vs Used:**

**Buy New When:**
- Heavy daily use planned
- Latest technology required
- Warranty important
- Tax incentives available

**Buy Used When:**
- Limited budget
- Occasional use
- Proven model preferred
- Quick delivery needed

**Conclusion:**

Excavator costs continue rising, but improved efficiency and capabilities provide better value. Consider total cost of ownership when making decisions, and work with reputable dealers for best results.`,
      category: 'excavator-advice',
      author: 'Anna Janssen',
      publishedAt: new Date('2023-12-15'),
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      tags: ['Excavators', 'Pricing', 'Cost Analysis', '2025']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
            Wimforce Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Expert insights, tips, and guides for construction, agricultural, and warehouse equipment. 
            Stay informed with the latest industry knowledge.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
              {/* Search */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Posts</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                  <SafeIcon icon={FiSearch} className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center ${
                        selectedCategory === category.id
                          ? 'bg-primary-100 text-primary-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <SafeIcon icon={category.icon} className="w-4 h-4 mr-2" />
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="lg:w-3/4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedCategory === 'all' ? 'All Posts' : 
                 categories.find(cat => cat.id === selectedCategory)?.name || 'Posts'}
              </h2>
              <p className="text-gray-600">
                Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="space-y-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <SafeIcon icon={FiUser} className="w-4 h-4 mr-1" />
                        <span className="mr-4">{post.author}</span>
                        <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
                        <span className="mr-4">{format(post.publishedAt, 'MMM dd, yyyy')}</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map(tag => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                        >
                          Read More
                          <SafeIcon icon={FiArrowRight} className="ml-1 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No posts found matching your criteria.</p>
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
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;