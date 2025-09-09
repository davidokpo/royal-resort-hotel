import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/Navbar';
import { TreePine, Calendar, Users, Clock, Palette, Wine, Music, Camera, Video, Coffee } from 'lucide-react';

export default function Garden() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const events = [
    {
      id: 1,
      name: 'Sip & Paint',
      price: 400,
      duration: '2 hours',
      capacity: 25,
      description: 'Unwind with colors, laughter, and creativity while sipping healthy drinks in our garden atmosphere.',
      includes: ['Canvas & paints', 'Fruit juice or local drinks', 'Light snacks', 'Facilitator guidance'],
      schedule: ['Fridays 6:00 PM - 8:00 PM', 'Sundays 4:00 PM - 6:00 PM'],
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
      icon: <Palette className="h-6 w-6" />
    },
    {
      id: 2,
      name: 'Evening Out with Friends',
      price: 300,
      duration: '3 hours',
      capacity: 40,
      description: 'Chill in a serene garden with music, grilled fish, and pepper soup. Perfect for catching up with friends.',
      includes: ['Live music vibe', 'Healthy drink options', 'Grilled fish or pepper soup', 'Garden seating'],
      schedule: ['Every Saturday 7:00 PM - 10:00 PM'],
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
      icon: <Users className="h-6 w-6" />
    },
    {
      id: 3,
      name: 'Outdoor Cinema Night',
      price: 350,
      duration: '2.5 hours',
      capacity: 50,
      description: 'Watch your favorite movies under the stars with our outdoor projector, health drinks, and tasty bites.',
      includes: ['Big screen projector', 'Local drinks (zobo, kunu, fura da nunu)', 'Light snacks', 'Garden seating'],
      schedule: ['Last Friday of the month 7:00 PM - 9:30 PM'],
      image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c2?w=400&h=300&fit=crop',
      icon: <Video className="h-6 w-6" />
    }
  ];

  const gardenFeatures = [
    {
      icon: <Coffee className="h-8 w-8 text-brown-600" />,
      title: 'Healthy Drinks Bar',
      description: 'Refreshing options like fruit juices, zobo, kunu, and fura da nunu.'
    },
    {
      icon: <Music className="h-8 w-8 text-purple-600" />,
      title: 'Chilled Vibes',
      description: 'Live music and relaxed garden ambiance for social evenings.'
    },
    {
      icon: <TreePine className="h-8 w-8 text-green-600" />,
      title: 'Serene Environment',
      description: 'A natural garden atmosphere perfect for relaxing and bonding.'
    },
    {
      icon: <Wine className="h-8 w-8 text-red-600" />,
      title: 'Local Cuisine',
      description: 'Enjoy grilled fish, pepper soup, nkwobi, and more.'
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
          <h1 className="text-4xl font-bold mb-4">Garden Experience</h1>
          <p className="text-xl opacity-90">
            A serene escape with events, outdoor cinema, sip & paint, and local delicacies.
          </p>
          <div className="flex justify-center items-center space-x-6 mt-6">
            <div className="flex items-center space-x-2">
              <TreePine className="h-5 w-5" />
              <span>Relaxing Garden</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Community & Friends</span>
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
                Our garden is a warm and inviting space where you can relax, sip healthy drinks, 
                and enjoy cultural delicacies. From sip & paint nights to outdoor cinema experiences, 
                every moment here is designed for relaxation, fun, and connection.
              </p>
              <div className="space-y-2 text-sm">
                <div><strong>Capacity:</strong> Up to 100 guests</div>
                <div><strong>Menu:</strong> Fruit juices, zobo, kunu, fura da nunu, grilled fish, pepper soup, nkwobi</div>
                <div><strong>Private Events:</strong> Bookable for birthdays, sip & paint, and celebrations</div>
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

        {/* Events */}
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
                    <span className="text-xl font-bold text-green-600">₦{event.price}00</span>
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
                    Book Event - ₦{event.price}00
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
                <h3 className="font-semibold mb-3">Host Your Special Day</h3>
                <p className="text-gray-600 mb-4">
                  Book the garden for birthdays, sip & paint parties, or private outdoor movie nights. 
                  With delicious local drinks and meals, your celebration will be unforgettable.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Birthday parties</li>
                  <li>• Sip & Paint sessions</li>
                  <li>• Outdoor cinema for private groups</li>
                  <li>• Family & friends hangouts</li>
                  <li>• Cultural and social events</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Packages</h3>
                <div className="space-y-3">
                  <div className="border rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Small Party (up to 30 people)</span>
                      <span className="font-bold text-green-600">₦150,000</span>
                    </div>
                  </div>
                  <div className="border rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Medium Event (up to 50 people)</span>
                      <span className="font-bold text-green-600">₦250,000</span>
                    </div>
                  </div>
                  <div className="border rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Full Garden (up to 100 people)</span>
                      <span className="font-bold text-green-600">₦400,000</span>
                    </div>
                    <p className="text-sm text-gray-600">Includes catering & drinks</p>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                  Request Private Booking
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
                <Textarea placeholder="Any special requirements or meal preferences?" />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Confirm Booking - ₦{selectedEvent?.price}00
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
