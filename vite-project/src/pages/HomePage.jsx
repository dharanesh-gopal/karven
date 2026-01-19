import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Users, TrendingUp, MessageSquare, Mail } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import SectionHeader from '../components/ui/SectionHeader';
import ParticlesBackground from '../components/ParticlesBackground';

function HomePage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Drone Manufacturing',
      description: 'Precision-Crafted Drones Redefining Aerial Innovation',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Drone Services',
      description: 'Data capturing, logistics, survey and mapping, inspection, and beyond.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Drone Training',
      description: 'DGCA certified Drone Pilot Training and diverse Drone Courses.',
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Data Intelligence',
      description: 'GIS Data Solutions for upgrading your current workflows.',
    },
  ];

  const products = [
    {
      id: 1,
      title: 'AgriVeer',
      subtitle: 'Multi-Functional Agricultural Drone',
      description: 'Type Certified - Precision-crafted for agricultural innovation and sustainable farming solutions.',
      features: ['Type Certified', 'Weather-Resistant', 'Extended Flight Time', 'Precision Spraying'],
      link: '/services',
    },
    {
      id: 2,
      title: 'FPV Drone',
      subtitle: 'Surveillance & Reconnaissance',
      description: 'Advanced surveillance capabilities with real-time intelligence and high-definition streaming.',
      features: ['Real-time Streaming', 'Night Vision', 'Advanced AI Detection', 'Extended Range'],
      link: '/services',
    },
    {
      id: 3,
      title: 'Crowd Monitoring',
      subtitle: 'Real-time Aerial Intelligence',
      description: 'Event and crowd safety monitoring solutions with AI-powered analytics and reporting.',
      features: ['AI Analytics', 'Crowd Counting', 'Heat Mapping', 'Incident Alerts'],
      link: '/services',
    },
    {
      id: 4,
      title: 'Tethered Drone',
      subtitle: 'Persistent Aerial Surveillance',
      description: 'Uninterrupted power and continuous monitoring for critical infrastructure protection.',
      features: ['24/7 Operation', 'Autonomous Station', 'Zero Downtime', 'Secure Data'],
      link: '/services',
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder, AgroTech Solutions',
      content: 'DroneAcharya\'s AgriVeer has transformed our farming efficiency by 40%. The training and support are exceptional.',
      avatar: '👨‍💼',
    },
    {
      name: 'Priya Sharma',
      role: 'Operations Manager, Infrastructure Corp',
      content: 'The surveillance solutions have enhanced our security infrastructure. Highly recommended for enterprises.',
      avatar: '👩‍💼',
    },
    {
      name: 'Amit Patel',
      role: 'CEO, Smart Cities Initiative',
      content: 'Their data intelligence platform provides insights we never thought possible. Industry-leading solution.',
      avatar: '👨‍💼',
    },
  ];

  const stats = [
    { label: 'Projects Delivered', value: '500+' },
    { label: 'Trained Pilots', value: '2000+' },
    { label: 'Active Users', value: '10000+' },
    { label: 'Industries Served', value: '15+' },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[95vh] flex items-center justify-center">
        <ParticlesBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-blue-500/5" />

        <div className="relative z-10 container mx-auto px-4 py-12 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-up">
              <Badge variant="primary" className="mb-6">Innovation Meets Excellence</Badge>
            </div>

            <h1 className="heading-lg text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-up animation-delay-100">
              Command the Skies.<br />
              <span className="text-accent">Control the Future.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted mb-6 max-w-3xl mx-auto animate-fade-up animation-delay-200">
              Drones. Data. Defence. All-in-One India's Drone Ecosystem delivering precision solutions across agriculture, infrastructure, and defence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300">
              <Link to="/services">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-container bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-container">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="What We Offer"
            title="Comprehensive Solutions"
            description="Full-stack drone technology, training, and data intelligence for modern enterprises"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-accent mb-4 text-5xl">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-container bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Products"
            title="Enterprise-Grade Drone Solutions"
            description="Power your operations with our precision-crafted drone products engineered for excellence"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-accent/10 to-blue-500/10 flex items-center justify-center text-6xl">
                  {String(product.id)}️⃣
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                  <p className="text-accent font-semibold text-sm mb-3">{product.subtitle}</p>
                  <p className="text-muted mb-5 leading-relaxed">{product.description}</p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={product.link}>
                    <Button variant="outline" className="w-full">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-container">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="primary" className="mb-6">About DroneAcharya</Badge>
              <h2 className="heading-lg mb-6">Visionaries in Deep Tech & Data Science</h2>
              <p className="text-muted text-lg mb-4 leading-relaxed">
                Emerging as a comprehensive data solution provider, we pioneer end-to-end Aerial and Geospatial solutions in the Indian UAV industry.
              </p>
              <p className="text-muted text-lg mb-4 leading-relaxed">
                Our commitment spans multiple domains such as Agriculture, Energy, Mining, Infrastructure, Oil and Gas, Smart Cities, Urban Planning, and Water Resources.
              </p>
              <p className="text-muted text-lg mb-8 leading-relaxed">
                Headquartered in Pune, we take pride in our dedicated team of Surveyors, UAV pilots, GIS analysts, and LiDAR experts.
              </p>
              <Link to="/about">
                <Button variant="primary" className="inline-flex">
                  Discover More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-blue-500/10 h-96 rounded-lg flex items-center justify-center border border-accent/20">
              <div className="text-center">
                <div className="text-7xl mb-4">🏢</div>
                <p className="text-accent font-semibold">Enterprise Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-container bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Success Stories"
            title="What Our Clients Say"
            description="Trusted by industry leaders and innovators across India"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-accent">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted italic">"{testimonial.content}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-accent/5 to-blue-500/5 border-accent/30">
              <h3 className="text-2xl font-bold mb-4">Become a Distributor</h3>
              <p className="text-muted mb-6">
                Join our distribution network and bring cutting-edge drone solutions to your region. Partner with India's leading drone innovation company.
              </p>
              <Link to="/contact">
                <Button variant="primary">Get Started</Button>
              </Link>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-accent/5 to-blue-500/5 border-accent/30">
              <h3 className="text-2xl font-bold mb-4">Become a Trainer</h3>
              <p className="text-muted mb-6">
                Share your expertise and train the next generation of drone professionals. Become a certified DGCA trainer with our academy.
              </p>
              <Link to="/training">
                <Button variant="primary">Learn More</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-container bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="heading-lg mb-4">Stay Updated</h2>
              <p className="text-gray-300 text-lg">
                Get the latest innovations in drone technology, industry news, and exclusive insights delivered to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition"
                  required
                />
              </div>
              <Button variant="primary" type="submit" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </form>

            {subscribed && (
              <p className="text-green-400 text-center mt-4 font-semibold animate-fade-in">
                ✓ Thank you for subscribing! Check your email for confirmation.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-container">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-lg mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-muted text-xl max-w-2xl mx-auto mb-10">
            Get in touch with our experts and discover how drone technology can revolutionize your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Contact Us <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/careers">
              <Button variant="secondary" size="lg">
                Life at DroneAcharya
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
