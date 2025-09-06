import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/Navbar';
import { TreePine, Calendar, Users, Clock, Palette, Wine, Music, Camera, Gamepad2, Coffee } from 'lucide-react';

export default function Garden() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const events = [
    {
      id: 1,
      name: 'Sip & Paint Night',
      price: 45,
      duration: '2.5 hours',
      capacity: 20,
      description: 'Unwind with painting while enjoying wine and light snacks. Perfect for creative networking.',
      includes: ['Canvas & paints', 'Wine or cocktails', 'Light appetizers', 'Professional instruction'],
      schedule: ['Every Friday 6:00 PM - 8:30 PM', 'Saturday 2:00 PM - 4:30 PM'],
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
      icon: <Palette className="h-6 w-6" />
    },
    {
      id: 2,
      name: 'Tech Talk & Network',
      price: 25,
      duration: '2 hours',
      capacity: 50,
      description: 'Monthly networking event featuring guest speakers from the tech industry.',
      includes: ['Guest speaker', 'Networking session', 'Refreshments', 'Business card exchange'],
      schedule: ['First Thursday of every month 7:00 PM - 9:00 PM'],
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop',
      icon: <Users className="h-6 w-6" />
    },
    {
      id: 3,
      name: 'Garden Yoga & Code',
      price: 30,
      duration: '1.5 hours',
      capacity: 15,
      description: 'Start your day with yoga followed by collaborative coding session in the garden.',
      includes: ['Yoga session', 'Coding collaboration', 'Healthy breakfast', 'WiFi & power'],
      schedule: ['Every Sunday 8:00 AM - 9:30 AM'],
      image: '/images/coding.jpg',
      icon: <TreePine className="h-6 w-6" />
    },
    {
      id: 4,
      name: 'Game Dev Jam',
      price: 35,
      duration: '4 hours',
      capacity: 30,
      description: 'Build games together in our monthly game development jam session.',
      includes: ['Team formation', 'Mentorship', 'Lunch & drinks', 'Prize for best game'],
      schedule: ['Second Saturday of every month 10:00 AM - 2:00 PM'],
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
      icon: <Gamepad2 className="h-6 w-6" />
    },
    {
      id: 5,
      name: 'Photography Walk',
      price: 20,
      duration: '2 hours',
      capacity: 12,
      description: 'Explore the hotel grounds and surroundings with fellow photography enthusiasts.',
      includes: ['Professional guide', 'Photography tips', 'Equipment loan', 'Light refreshments'],
      schedule: ['Every Saturday 6:00 AM - 8:00 AM'],
      image: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=400&h=300&fit=crop',
      icon: <Camera className="h-6 w-6" />
    },
    {
      id: 6,
      name: 'Wine & Debug',
      price: 40,
      duration: '3 hours',
      capacity: 25,
      description: 'Collaborative debugging session with wine tasting and tech discussions.',
      includes: ['Wine selection', 'Debugging challenges', 'Cheese & charcuterie', 'Prizes for solutions'],
      schedule: ['Last Friday of every month 5:00 PM - 8:00 PM'],
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop',
      icon: <Wine className="h-6 w-6" />
    }
  ];

  const gardenFeatures = [
    {
      icon: <TreePine className="h-8 w-8 text-green-600" />,
      title: 'Serene Environment',
      description: 'Lush garden setting perfect for relaxation and creativity'
    },
    {
      icon: <Coffee className="h-8 w-8 text-brown-600" />,
      title: 'Outdoor Bar',
      description: 'Full service bar with craft cocktails and local wines'
    },
    {
      icon: <Music className="h-8 w-8 text-purple-600" />,
      title: 'Sound System',
      description: 'Professional audio setup for presentations and music'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Networking Space',
      description: 'Designed to encourage connections and collaboration'
    }
  ];

  const openBookingDialog = (event: any) => {
    setSelectedEvent(event);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">TechStay Garden</h1>
          <p className="text-xl opacity-90">
            Where nature meets networking - events designed for the tech community
          </p>
          <div className="flex justify-center items-center space-x-6 mt-6">
            <div className="flex items-center space-x-2">
              <TreePine className="h-5 w-5" />
              <span>Outdoor Setting</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Community Events</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Garden Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TreePine className="h-6 w-6 text-green-600" />
                <span>About Our Garden</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our garden space is a tranquil oasis designed for tech professionals to unwind, 
                network, and engage in creative activities. With regular events like sip & paint 
                nights and tech talks, it's the perfect place to connect with like-minded individuals.
              </p>
              <div className="space-y-2 text-sm">
                <div><strong>Capacity:</strong> Up to 100 people for large events</div>
                <div><strong>Features:</strong> Full bar, sound system, WiFi coverage</div>
                <div><strong>Weather:</strong> Covered areas and indoor backup available</div>
                <div><strong>Private Events:</strong> Available for booking</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Garden Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {gardenFeatures.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-sm mb-2">{feature.title}</h3>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Events Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Regular Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="text-green-600">{event.icon}</div>
                      <h3 className="text-xl font-semibold">{event.name}</h3>
                    </div>
                    <span className="text-xl font-bold text-green-600">${event.price}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {event.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      Max {event.capacity}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Includes:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {event.includes.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Schedule:</h4>
                    {event.schedule.map((time, index) => (
                      <Badge key={index} variant="outline" className="mr-2 mb-1 text-xs">
                        {time}
                      </Badge>
                    ))}
                  </div>

                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => openBookingDialog(event)}
                  >
                    Book Event - ${event.price}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Private Events */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Private Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Host Your Own Event</h3>
                <p className="text-gray-600 mb-4">
                  Our garden space is perfect for private corporate events, team building, 
                  product launches, and tech meetups. We can accommodate up to 100 guests 
                  with full catering and AV support.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Corporate team building events</li>
                  <li>• Product launch parties</li>
                  <li>• Tech meetups and conferences</li>
                  <li>• Birthday and celebration parties</li>
                  <li>• Workshop and training sessions</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Pricing & Packages</h3>
                <div className="space-y-3">
                  <div className="border rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Half Day (4 hours)</span>
                      <span className="font-bold text-green-600">$500</span>
                    </div>
                    <p className="text-sm text-gray-600">Up to 30 people</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Full Day (8 hours)</span>
                      <span className="font-bold text-green-600">$800</span>
                    </div>
                    <p className="text-sm text-gray-600">Up to 50 people</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Premium Package</span>
                      <span className="font-bold text-green-600">$1200</span>
                    </div>
                    <p className="text-sm text-gray-600">Up to 100 people + catering</p>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                  Request Private Event Quote
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Booking Dialog */}
        <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>
                Book {selectedEvent?.name}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label>Full Name</Label>
                <Input placeholder="Enter your full name" />
              </div>
              <div>
                <Label>Email</Label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              <div>
                <Label>Phone</Label>
                <Input type="tel" placeholder="Enter your phone number" />
              </div>
              <div>
                <Label>Preferred Date</Label>
                <Input type="date" />
              </div>
              <div>
                <Label>Number of Attendees</Label>
                <Input 
                  type="number" 
                  min="1" 
                  max={selectedEvent?.capacity} 
                  placeholder="How many people?" 
                />
              </div>
              <div>
                <Label>Special Requests</Label>
                <Textarea placeholder="Any special requirements or dietary restrictions?" />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Confirm Booking - ${selectedEvent?.price}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}