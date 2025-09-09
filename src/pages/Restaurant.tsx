import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/Navbar';
import { Clock, Star, Utensils, Users, Phone, Calendar } from 'lucide-react';

export default function Restaurant() {
  const [reservationOpen, setReservationOpen] = useState(false);

  const menuCategories = {
    breakfast: [
      {
        name: 'Tech Stack Pancakes',
        price: 500,
        description: 'Fluffy pancakes layered like code, served with maple syrup and berry compote',
        dietary: ['vegetarian'],
        image: 'https://www.tasteatlas.com/images/dishes/41ca6dfc48714647a813a6c1333a9e94.jpg'
      },
      {
        name: 'Full Stack Breakfast',
        price: 2500,
        description: 'Eggs, bacon, sausage, hash browns, toast - everything you need to fuel your coding session',
        dietary: [],
        image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=300&h=200&fit=crop'
      },
      {
        name: 'Debug Coffee & Croissant',
        price: 1000,
        description: 'Artisan coffee with freshly baked croissant to help you debug your morning',
        dietary: ['vegetarian'],
        image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=300&h=200&fit=crop'
      }
    ],
    lunch: [
      {
        name: 'API Burger',
        price: 2000,
        description: 'Premium beef patty with all the right endpoints - lettuce, tomato, cheese, and secret sauce',
        dietary: [],
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop'
      },
      {
        name: 'Cloud Storage Salad',
        price: 1000,
        description: 'Mixed greens with grilled chicken, stored in layers of flavor with vinaigrette',
        dietary: ['gluten-free'],
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop'
      },
      {
        name: 'Blockchain Bowl',
        price: 21,
        description: 'Quinoa bowl with linked vegetables, secured with tahini dressing',
        dietary: ['vegan', 'gluten-free'],
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop'
      }
    ],
    dinner: [
      {
        name: 'Server Steak',
        price: 45,
        description: 'Premium ribeye that never goes down, served with roasted vegetables and mashed potatoes',
        dietary: ['gluten-free'],
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop'
      },
      {
        name: 'Encrypted Salmon',
        price: 38,
        description: 'Pan-seared salmon with herb crust, served with quinoa and steamed broccoli',
        dietary: ['gluten-free'],
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=200&fit=crop'
      },
      {
        name: 'Neural Network Pasta',
        price: 28,
        description: 'Linguine with interconnected flavors - mushrooms, spinach, and truffle oil',
        dietary: ['vegetarian'],
        image: '/images/VegetarianPasta.jpg'
      }
    ]
  };

  const getDietaryBadgeColor = (dietary: string) => {
    switch (dietary) {
      case 'vegetarian': return 'bg-green-100 text-green-800';
      case 'vegan': return 'bg-green-200 text-green-900';
      case 'gluten-free': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">TechStay Restaurant</h1>
          <p className="text-xl opacity-90">
            Fine dining with a tech twist - where culinary code meets exceptional flavors
          </p>
          <div className="flex justify-center items-center space-x-6 mt-6">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>6:00 AM - 11:00 PM</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 fill-current" />
              <span>4.8/5 Rating</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Restaurant Info & Reservation */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Utensils className="h-6 w-6 text-red-600" />
                <span>About Our Restaurant</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our restaurant combines culinary excellence with tech-inspired creativity. Every dish is crafted 
                with precision and served in an environment designed for networking and collaboration.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Hours:</strong>
                  <div>Breakfast: 6:00 AM - 10:00 AM</div>
                  <div>Lunch: 11:00 AM - 3:00 PM</div>
                  <div>Dinner: 5:00 PM - 11:00 PM</div>
                </div>
                <div>
                  <strong>Capacity:</strong>
                  <div>120 seats</div>
                  <div>Private dining available</div>
                  <div>Tech meetup friendly</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Make a Reservation</CardTitle>
            </CardHeader>
            <CardContent>
              <Dialog open={reservationOpen} onOpenChange={setReservationOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full bg-red-600 hover:bg-red-700 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    Reserve Table
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Restaurant Reservation</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Name</Label>
                        <Input placeholder="Your name" />
                      </div>
                      <div>
                        <Label>Phone</Label>
                        <Input placeholder="Phone number" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Date</Label>
                        <Input type="date" />
                      </div>
                      <div>
                        <Label>Time</Label>
                        <Input type="time" />
                      </div>
                    </div>
                    <div>
                      <Label>Party Size</Label>
                      <Input type="number" min="1" max="12" placeholder="Number of guests" />
                    </div>
                    <div>
                      <Label>Special Requests</Label>
                      <Textarea placeholder="Any dietary restrictions or special occasions?" />
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Confirm Reservation
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Call: (555) 123-TECH</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Groups of 8+ call ahead</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Menu */}
        <Card>
          <CardHeader>
            <CardTitle>Our Menu</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="breakfast" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
                <TabsTrigger value="lunch">Lunch</TabsTrigger>
                <TabsTrigger value="dinner">Dinner</TabsTrigger>
              </TabsList>
              
              {Object.entries(menuCategories).map(([category, items]) => (
                <TabsContent key={category} value={category}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {items.map((item, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="aspect-video bg-gray-200">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-lg">{item.name}</h3>
                            <span className="text-lg font-bold text-red-600">₦{item.price}</span>
                          </div>
                          <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                          {item.dietary.length > 0 && (
                            <div className="flex space-x-2">
                              {item.dietary.map((diet) => (
                                <Badge
                                  key={diet}
                                  className={`text-xs ₦{getDietaryBadgeColor(diet)}`}
                                >
                                  {diet}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="mt-12 bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Restaurant Features</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Extended Hours</h3>
              <p className="text-gray-600 text-sm">Early breakfast to late dinner</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Group Dining</h3>
              <p className="text-gray-600 text-sm">Perfect for team meetings and events</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">Fresh ingredients and expert preparation</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Utensils className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Tech Themes</h3>
              <p className="text-gray-600 text-sm">Menu items inspired by technology</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}