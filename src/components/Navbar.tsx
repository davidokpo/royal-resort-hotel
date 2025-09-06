import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Wifi, Zap, Coffee, TreePine } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/rooms', label: 'Rooms' },
    { path: '/restaurant', label: 'Restaurant' },
    { path: '/cafe', label: 'Cafe' },
    { path: '/garden', label: 'Garden' },
    { path: '/bookings', label: 'lstte' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/assets/logo.png" 
              alt="TechStay Hotel Logo" 
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold text-gray-900">Peace Royal Resort</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#001916] ${
                  location.pathname === link.path
                    ? 'text-[#001916] border-b-2 border-[#001916] pb-1'
                    : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-xs text-gray-600">
              <Wifi className="h-4 w-4" />
              <span>Fiber</span>
              <Zap className="h-4 w-4" />
              <span>24/7</span>
            </div>
            <Button size="sm" style={{backgroundColor: '#001916'}} className="hover:opacity-90">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}