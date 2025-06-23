import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowLeft, FiUser, FiCalendar, FiClock, FiShare2, FiBookmark, FiTag } = FiIcons;

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - in real app, fetch by slug
  const post = {
    id: 1,
    title: 'Mini Excavator vs. Mid-Size: Which One Suits Your Job?',
    slug: 'mini-excavator-vs-mid-size-guide',
    excerpt: 'Choosing the right excavator size is crucial for project success. Learn the key differences between mini and mid-size excavators to make an informed decision.',
    content: `When it comes to excavator selection, size matters more than you might think. The choice between a mini excavator and a mid-size machine can significantly impact your project's efficiency, cost, and overall success.

## Mini Excavators (0.6 - 6 tons)

Mini excavators excel in confined spaces and urban environments. Their compact design allows them to access tight job sites where larger machines simply cannot operate. Key advantages include:

### Maneuverability
Zero tail swing models can operate in spaces as narrow as the machine itself, making them perfect for urban construction projects where space is at a premium.

### Transportation
Can be transported on standard trailers without special permits, reducing logistics costs and complexity.

### Versatility
Perfect for landscaping, utility work, and residential construction. Their precision makes them ideal for delicate operations.

### Operating Costs
Lower fuel consumption and reduced operator fatigue contribute to better overall economics.

## Mid-Size Excavators (7 - 15 tons)

Mid-size excavators offer the perfect balance of power and versatility. They're the workhorses of the construction industry, ideal for:

### General Construction
Road building, site preparation, and foundation work benefit from the increased power and reach.

### Digging Depth
Typically offer 4-6 meters of dig depth, suitable for most construction applications.

### Lifting Capacity
Can handle heavier materials and larger attachments, increasing productivity.

### Productivity
Higher hourly production rates for medium to large projects make them cost-effective for substantial work.

## Making the Right Choice

Consider these critical factors when choosing between mini and mid-size excavators:

### 1. Job Site Constraints
Evaluate available space and access limitations. Urban environments often favor mini excavators, while open construction sites can accommodate mid-size machines.

### 2. Material Type
Consider soil conditions and material density. Rocky or compacted materials may require the additional power of mid-size excavators.

### 3. Project Duration
Long-term projects may benefit from higher productivity of mid-size machines, while short-term jobs might favor the flexibility of mini excavators.

### 4. Transportation
Factor in delivery and mobilization costs. Mini excavators offer advantages in transportation flexibility.

### 5. Operator Experience
Smaller machines are generally easier to operate and require less specialized training.

## Cost Considerations

While mini excavators have lower upfront costs, mid-size machines often provide better value for larger projects due to higher productivity. Calculate the total cost including:

- Purchase or rental price
- Transportation costs
- Fuel consumption
- Operator wages
- Project timeline impact

### Example Cost Analysis

**Mini Excavator (3.5 ton):**
- Daily rental: €200-300
- Fuel consumption: 15-20L/day
- Productivity: 30-50 m³/day

**Mid-Size Excavator (12 ton):**
- Daily rental: €400-600
- Fuel consumption: 40-60L/day
- Productivity: 80-120 m³/day

## Conclusion

The right excavator choice depends on your specific project requirements. Mini excavators are perfect for precision work in tight spaces, while mid-size machines excel in general construction applications.

Consider consulting with equipment experts to ensure you select the optimal machine for your needs. The right choice can significantly impact project success and profitability.

Remember: it's not just about the machine specifications – consider the total project context, including site conditions, timeline, and budget constraints.`,
    category: 'excavator-advice',
    author: 'Erik van der Berg',
    publishedAt: new Date('2024-01-15'),
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
    tags: ['Excavators', 'Equipment Selection', 'Construction'],
    relatedPosts: [
      {
        id: 2,
        title: 'Top 5 Attachments to Boost Your Excavator Productivity',
        slug: 'top-excavator-attachments-productivity',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 6,
        title: 'How Much Does an Excavator Cost in 2025?',
        slug: 'excavator-cost-guide-2025',
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
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <h4 key={index} className="text-lg font-semibold text-gray-900 mt-4 mb-2">
            {paragraph.replace(/\*\*/g, '')}
          </h4>
        );
      }
      if (paragraph.startsWith('- ')) {
        const listItems = paragraph.split('\n').filter(item => item.startsWith('- '));
        return (
          <ul key={index} className="list-disc list-inside space-y-2 mb-4 text-gray-700">
            {listItems.map((item, i) => (
              <li key={i}>{item.replace('- ', '')}</li>
            ))}
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
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="pt-8 mb-6">
          <Link
            to="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700"
          >
            <SafeIcon icon={FiArrowLeft} className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-lg border border-gray-200 -mt-32 relative z-10 mb-12">
          <div className="p-8 lg:p-12">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6">
              <div className="flex items-center mr-6 mb-2">
                <SafeIcon icon={FiUser} className="w-4 h-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
                <span>{format(post.publishedAt, 'MMMM dd, yyyy')}</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full"
                >
                  <SafeIcon icon={FiTag} className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 pb-8 mb-8 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-700">Share:</span>
              <button className="p-2 text-gray-500 hover:text-primary-600 transition-colors">
                <SafeIcon icon={FiShare2} className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-primary-600 transition-colors">
                <SafeIcon icon={FiBookmark} className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {formatContent(post.content)}
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.relatedPosts.map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors">
                      {relatedPost.title}
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
              Need Equipment Advice?
            </h2>
            <p className="text-primary-100 mb-6">
              Our experts are ready to help you choose the right machinery for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Expert
              </Link>
              <Link
                to="/quote"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default BlogPost;