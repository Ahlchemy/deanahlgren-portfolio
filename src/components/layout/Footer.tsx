import { Link } from 'react-router-dom'
import { Linkedin, Github, Mail, MapPin } from 'lucide-react'

const footerNavigation = {
  main: [
    { name: 'Work', href: '/work' },
    { name: 'Insights', href: '/insights' },
    { name: 'Consulting', href: '/consulting' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dean-ahlgren',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/deanahlgren',
      icon: Github,
    },
    {
      name: 'Email',
      href: 'mailto:dean@deanahlgren.com',
      icon: Mail,
    },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-50 dark:bg-neutral-700 border-t border-neutral-200 dark:border-neutral-600">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="font-display font-bold text-xl text-ocean-500 hover:text-ocean-600 transition-colors"
            >
              Dean Ahlgren
            </Link>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-md">
              Instructional Design Mastery Meets AI Innovation. 25 years building
              learning experiences that engage minds, drive results, and scale impact.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-neutral-500 dark:text-neutral-500">
              <MapPin className="w-4 h-4" />
              <span>Honolulu, Hawaii</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerNavigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-ocean-600 dark:hover:text-ocean-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {footerNavigation.social.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-ocean-600 dark:hover:text-ocean-400 transition-colors"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-600">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500 dark:text-neutral-500">
              &copy; {currentYear} Dean Ahlgren. All rights reserved.
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-500">
              Built with React, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
