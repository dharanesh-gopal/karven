function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <span className="font-bold">Karvensen</span>
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              AI-Driven Innovation & Drone Solutions
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/services" className="text-gray-600 dark:text-gray-400 hover:text-indigo-500">AI Software</a></li>
              <li><a href="/services" className="text-gray-600 dark:text-gray-400 hover:text-indigo-500">Drone Tech</a></li>
              <li><a href="/services" className="text-gray-600 dark:text-gray-400 hover:text-indigo-500">LMS Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-indigo-500">About</a></li>
              <li><a href="/careers" className="text-gray-600 dark:text-gray-400 hover:text-indigo-500">Careers</a></li>
              <li><a href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-indigo-500">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-indigo-500">Get in Touch</a></li>
              <li><a href="/training" className="text-gray-600 dark:text-gray-400 hover:text-indigo-500">Training</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Karvensen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
