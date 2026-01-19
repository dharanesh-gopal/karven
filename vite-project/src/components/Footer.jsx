import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook, Youtube } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/droneacharya', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/DroneAcharyaIN', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/droneacharya_official', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/droneacharyauav', label: 'Facebook' },
    { icon: Youtube, href: 'https://youtube.com/@droneacharyaaerialinnovati2705', label: 'YouTube' },
  ]

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-sm">
                DA
              </div>
              <span className="font-bold text-lg">DroneAcharya</span>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Full-stack defence and industrial drone tech solutions for modern enterprises.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 rounded-lg bg-gray-900 text-gray-400 hover:bg-accent hover:text-white transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-gray-400 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-accent transition-colors">Careers</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-accent transition-colors">Blog & News</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/services" className="text-gray-400 hover:text-accent transition-colors">Manufacturing</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-accent transition-colors">Drone Services</a></li>
              <li><a href="/training" className="text-gray-400 hover:text-accent transition-colors">Training</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-accent transition-colors">Data Intelligence</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <a href="tel:+919890003590" className="text-gray-400 hover:text-accent transition-colors">+91 9890003590</a>
              </div>
              <div className="flex gap-3 items-start">
                <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-500 text-xs">info@droneacharya.com</p>
                  <p className="text-gray-500 text-xs">training@droneacharya.com</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-gray-400">Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Stay updated with latest innovations.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-3 py-2 rounded-l-lg bg-gray-900 text-white text-sm placeholder-gray-500 focus:outline-none focus:bg-gray-800"
              />
              <button
                type="submit"
                className="px-3 py-2 rounded-r-lg bg-accent text-white text-sm font-medium hover:bg-accent-dark transition-colors"
              >
                →
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} DroneAcharya. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
