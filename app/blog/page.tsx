import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';

export const metadata = {
  title: 'Blog - Digital Insights & Resources',
  description: 'Read our latest articles on digital trends, best practices, and industry insights.',
};

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2025',
    excerpt: 'Explore the latest trends shaping the world of web development and what they mean for your business.',
    date: 'March 15, 2025',
    author: 'Sarah Johnson',
    category: 'Technology',
    image: '/portfolio-image.jpg',
  },
  {
    id: 2,
    title: 'Why Your Business Needs a Mobile App Strategy',
    excerpt: 'Discover why a mobile-first approach is crucial for your digital success in today\'s market.',
    date: 'March 10, 2025',
    author: 'Michael Chen',
    category: 'Mobile',
    image: '/portfolio-image.jpg',
  },
  {
    id: 3,
    title: 'The Impact of UX Design on Conversion Rates',
    excerpt: 'Learn how thoughtful UX design can significantly improve your website\'s conversion rates.',
    date: 'March 5, 2025',
    author: 'Emma Rodriguez',
    category: 'Design',
    image: '/portfolio-image.jpg',
  },
  {
    id: 4,
    title: 'Digital Security: Protecting Your Business Online',
    excerpt: 'Essential security measures every business should implement to protect their digital assets.',
    date: 'February 28, 2025',
    author: 'David Kumar',
    category: 'Security',
    image: '/portfolio-image.jpg',
  },
  {
    id: 5,
    title: 'SEO Best Practices for 2025',
    excerpt: 'Stay ahead of search engine updates with these essential SEO strategies for the current year.',
    date: 'February 20, 2025',
    author: 'Sarah Johnson',
    category: 'SEO',
    image: '/portfolio-image.jpg',
  },
  {
    id: 6,
    title: 'Scaling Your Startup: Technology Considerations',
    excerpt: 'Strategic technology choices that support rapid growth without breaking the bank.',
    date: 'February 15, 2025',
    author: 'Michael Chen',
    category: 'Startup',
    image: '/portfolio-image.jpg',
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-br from-white via-[hsl(var(--muted))] to-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-lg mb-6">Blog & Resources</h1>
              <p className="subheading mx-auto">
                Insights, tips, and trends to help you make informed decisions about your digital future.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white border-2 border-[hsl(var(--border))] rounded-xl overflow-hidden hover:border-[hsl(var(--primary))] hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[hsl(var(--primary))] text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="heading-sm mb-3 group-hover:text-[hsl(var(--primary))] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-col gap-3 pb-4 border-b border-[hsl(var(--border))]">
                      <div className="flex items-center gap-4 text-xs text-[hsl(var(--muted-foreground))]">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          {post.author}
                        </div>
                      </div>
                    </div>

                    {/* Read More Link */}
                    <div className="pt-4">
                      <a
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 text-[hsl(var(--primary))] font-semibold hover:text-[hsl(var(--secondary))] transition-colors"
                      >
                        Read Article
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-spacing bg-[hsl(var(--muted))]">
          <div className="container-custom max-w-2xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg text-center">
              <h2 className="heading-md mb-4">Stay Updated</h2>
              <p className="text-[hsl(var(--muted-foreground))] mb-6">
                Get the latest insights and resources delivered to your inbox every week.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border-2 border-[hsl(var(--border))] rounded-lg focus:border-[hsl(var(--primary))] focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[hsl(var(--primary))] text-white rounded-lg hover:bg-[hsl(var(--primary))]/90 transition-colors font-semibold whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-[hsl(var(--muted-foreground))] mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
