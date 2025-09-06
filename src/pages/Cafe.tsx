import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import { Coffee, Wifi, Zap, Monitor, Users, Clock, Headphones, Plug } from 'lucide-react';

export default function Cafe() {
  const coffeeMenu = [
    {
      name: 'Americano',
      price: 4,
      description: 'Strong espresso with hot water - pure and simple',
      category: 'coffee'
    },
    {
      name: 'Latte',
      price: 5.5,
      description: 'Smooth espresso with steamed milk and light foam',
      category: 'coffee'
    },
    {
      name: 'Cappuccino',
      price: 5,
      description: 'Equal parts espresso, steamed milk, and foam',
      category: 'coffee'
    },
    {
      name: 'Cold Brew',
      price: 4.5,
      description: 'Smooth, less acidic coffee brewed cold for 12 hours',
      category: 'coffee'
    },
    {
      name: 'Nitro Coffee',
      price: 6,
      description: 'Cold brew infused with nitrogen for a creamy texture',
      category: 'coffee'
    },
    {
      name: 'Mocha',
      price: 6.5,
      description: 'Espresso with chocolate syrup and steamed milk',
      category: 'coffee'
    }
  ];

  const foodMenu = [
    {
      name: 'Avocado Toast',
      price: 12,
      description: 'Multigrain bread with smashed avocado, everything seasoning',
      category: 'food'
    },
    {
      name: 'Breakfast Burrito',
      price: 14,
      description: 'Scrambled eggs, cheese, potatoes, and salsa in a wrap',
      category: 'food'
    },
    {
      name: 'Acai Bowl',
      price: 13,
      description: 'Acai blend topped with granola, berries, and honey',
      category: 'food'
    },
    {
      name: 'Croissant Sandwich',
      price: 11,
      description: 'Buttery croissant with ham, cheese, and egg',
      category: 'food'
    },
    {
      name: 'Protein Bowl',
      price: 16,
      description: 'Quinoa, grilled chicken, vegetables, and tahini dressing',
      category: 'food'
    },
    {
      name: 'Veggie Wrap',
      price: 13,
      description: 'Hummus, vegetables, and greens in a spinach tortilla',
      category: 'food'
    }
  ];

  const workspaceFeatures = [
    {
      icon: <Wifi className="h-6 w-6" />,
      title: 'Ultra-Fast WiFi',
      description: 'Dedicated fiber connection with 1Gbps speed'
    },
    {
      icon: <Plug className="h-6 w-6" />,
      title: 'Power Outlets',
      description: 'Every table equipped with USB-C and standard outlets'
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: 'External Monitors',
      description: '4K monitors available for rent at workstations'
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: 'Quiet Zones',
      description: 'Dedicated areas for focused work and calls'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Collaboration Spaces',
      description: 'Areas designed for team meetings and networking'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: '24/7 Access',
      description: 'Round-the-clock access for hotel guests'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Peace Royal Cafe</h1>
          <p className="text-xl opacity-90">
            Premium coffee meets productive workspace - where great ideas are brewed
          </p>
          <div className="flex justify-center items-center space-x-6 mt-6">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>24/7 for Hotel Guests</span>
            </div>
            <div className="flex items-center space-x-2">
              <Coffee className="h-5 w-5" />
              <span>Specialty Coffee</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Workspace Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Coffee className="h-6 w-6 text-amber-600" />
                <span>Co-Working Cafe</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our cafe is designed specifically for tech professionals who need a productive environment. 
                With high-speed internet, comfortable seating, and premium coffee, it's the perfect place 
                to code, collaborate, or catch up on work.
              </p>
              <div className="space-y-2 text-sm">
                <div><strong>Seating:</strong> 80 workstations with various configurations</div>
                <div><strong>Meeting Rooms:</strong> 4 private rooms available for booking</div>
                <div><strong>Noise Level:</strong> Quiet zones and collaboration areas</div>
                <div><strong>Printing:</strong> High-speed printer and scanner available</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Daily Passes & Membership</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">Day Pass</h3>
                    <span className="text-2xl font-bold text-amber-600">$15</span>
                  </div>
                  <p className="text-sm text-gray-600">Full day access with one coffee included</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">Hotel Guests</h3>
                    <span className="text-2xl font-bold text-green-600">FREE</span>
                  </div>
                  <p className="text-sm text-gray-600">Complimentary access 24/7 during stay</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">Monthly Pass</h3>
                    <span className="text-2xl font-bold text-blue-600">$200</span>
                  </div>
                  <p className="text-sm text-gray-600">Unlimited access + 10 free coffees</p>
                </div>
              </div>
              
              <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700">
                Get Day Pass
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Workspace Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Workspace Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {workspaceFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-amber-100 p-2 rounded-lg flex-shrink-0">
                    <div className="text-amber-600">{feature.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Menu */}
        <Card>
          <CardHeader>
            <CardTitle>Cafe Menu</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="coffee" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="coffee">Coffee & Drinks</TabsTrigger>
                <TabsTrigger value="food">Food & Snacks</TabsTrigger>
              </TabsList>
              
              <TabsContent value="coffee">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {coffeeMenu.map((item, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold">{item.name}</h3>
                          <span className="font-bold text-amber-600">${item.price}</span>
                        </div>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="food">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {foodMenu.map((item, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold">{item.name}</h3>
                          <span className="font-bold text-amber-600">${item.price}</span>
                        </div>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to be Productive?</h2>
          <p className="text-lg opacity-90 mb-6">
            Join our community of tech professionals and entrepreneurs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Day Pass
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-amber-600">
              Book Meeting Room
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}