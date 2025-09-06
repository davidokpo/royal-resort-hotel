import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import { Wifi, Zap, Coffee, Monitor, TreePine, Utensils, Bed, Calendar } from 'lucide-react';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent">
            Peace Royal Resort
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Where technology meets tranquility. The perfect workspace for digital nomads and tech professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild style={{backgroundColor: '#001916'}} className="hover:opacity-90">
              <Link to="/rooms">Book Your Stay</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/cafe">Visit Our Cafe</Link>
            </Button>
          </div>
          
          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-green-100 p-3 rounded-full">
                <Wifi className="h-6 w-6 text-green-800" />
              </div>
              <span className="text-sm font-medium">Fiber Internet</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-green-100 p-3 rounded-full">
                <Zap className="h-6 w-6 text-green-800" />
              </div>
              <span className="text-sm font-medium">24/7 Power</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-green-100 p-3 rounded-full">
                <Monitor className="h-6 w-6 text-green-800" />
              </div>
              <span className="text-sm font-medium">Work Spaces</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-green-100 p-3 rounded-full">
                <Coffee className="h-6 w-6 text-green-800" />
              </div>
              <span className="text-sm font-medium">Premium Coffee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <Link to="/rooms">
                <CardContent className="p-6 text-center">
                  <Bed className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Rooms</h3>
                  <p className="text-gray-600">Deluxe & Executive rooms with premium amenities</p>
                </CardContent>
              </Link>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <Link to="/restaurant">
                <CardContent className="p-6 text-center">
                  <Utensils className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Restaurant</h3>
                  <p className="text-gray-600">Fine dining with international cuisine</p>
                </CardContent>
              </Link>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <Link to="/cafe">
                <CardContent className="p-6 text-center">
                  <Coffee className="h-12 w-12 text-brown-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Cafe</h3>
                  <p className="text-gray-600">Co-working space with premium coffee</p>
                </CardContent>
              </Link>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <Link to="/garden">
                <CardContent className="p-6 text-center">
                  <TreePine className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Garden</h3>
                  <p className="text-gray-600">Event space for sip & paint, networking</p>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Tech Professionals Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Uninterrupted Connectivity</h3>
              <p>Fiber optic internet with 99.9% uptime guarantee and backup power systems</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Productivity-Focused</h3>
              <p>Ergonomic workspaces, noise-free environment, and 24/7 lighting</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Community & Events</h3>
              <p>Network with fellow tech professionals in our garden events and co-working spaces</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 TechStay Hotel. Where innovation meets relaxation.</p>
        </div>
      </footer>
    </div>
  );
}
