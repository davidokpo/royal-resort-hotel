import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/Navbar';
import { Wifi, Zap, Monitor, Coffee, Bed, Bath, Car, CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

export default function Rooms() {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(1);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
    selectedRoom: '',
    price: '',
  });

  const handleBooking = (roomName: string, price: number) => {
    setBookingData(prev => ({ ...prev, selectedRoom: roomName, price: price.toString() }));
  };

  const saveBookingToDatabase = (booking: any) => {
    try {
      // Get existing bookings from localStorage
      const existingBookings = JSON.parse(localStorage.getItem('peaceRoyalBookings') || '[]');
      
      // Add new booking with unique ID and timestamp
      const newBooking = {
        ...booking,
        id: Date.now().toString(),
        bookingDate: new Date().toISOString(),
        status: 'confirmed'
      };
      
      existingBookings.push(newBooking);
      
      // Save back to localStorage
      localStorage.setItem('peaceRoyalBookings', JSON.stringify(existingBookings));
      
      return newBooking;
    } catch (error) {
      console.error('Error saving booking:', error);
      return null;
    }
  };

  const handleSubmitBooking = () => {
    if (!bookingData.name || !bookingData.email || !checkIn || !checkOut) {
      alert('Please fill in all required fields');
      return;
    }
    
    const nights = Math.ceil((checkOut!.getTime() - checkIn!.getTime()) / (1000 * 60 * 60 * 24));
    const totalCost = nights * (Number(bookingData.price) || 0);
    
    // Create booking object for database
    const bookingDetails = {
      guestName: bookingData.name,
      email: bookingData.email,
      phone: bookingData.phone,
      roomType: bookingData.selectedRoom,
      checkInDate: checkIn!.toISOString(),
      checkOutDate: checkOut!.toISOString(),
      numberOfGuests: guests,
      numberOfNights: nights,
      pricePerNight: bookingData.price,
      totalCost: totalCost,
      specialRequests: bookingData.specialRequests
    };
    
    // Save to database
    const savedBooking = saveBookingToDatabase(bookingDetails);
    
    if (savedBooking) {
      alert(`✅ Booking Confirmed & Saved!\n\nBooking ID: ₦{savedBooking.id}\nGuest: ₦{bookingData.name}\nRoom: ₦{bookingData.selectedRoom}\nCheck-in: ₦{format(checkIn!, 'PPP')}\nCheck-out: ₦{format(checkOut!, 'PPP')}\nGuests: ₦{guests}\nNights: ₦{nights}\nTotal Cost: ₦₦{totalCost}\n\nYour booking has been saved to our database.\nWe'll contact you at ₦{bookingData.email} to confirm your reservation.\nPayment can be made upon arrival at Peace Royal Resort.`);
      
      console.log('Booking saved successfully:', savedBooking);
    } else {
      alert('Booking confirmed but there was an error saving to database. Please contact support.');
    }
    
    // Reset form
    setBookingData({
      name: '',
      email: '',
      phone: '',
      specialRequests: '',
      selectedRoom: '',
      price: '',
    });
    setCheckIn(undefined);
    setCheckOut(undefined);
    setGuests(1);
  };

  const rooms = [
    {
      id: 1,
      name: 'Deluxe Tech Suite',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&h=400&fit=crop',
      features: [
        'Ultra-fast fiber internet',
        '24/7 power backup',
        'Ergonomic workspace',
        'Premium coffee machine',
        'Smart TV & casting',
        'Blackout curtains'
      ],
      amenities: ['wifi', 'power', 'workspace', 'coffee'],
      description: 'Perfect for digital nomads and remote workers who need a productive environment.'
    },
    {
      id: 2,
      name: 'Executive Work Haven',
      price: 3000,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop',
      features: [
        'Dedicated fiber line',
        'UPS power system',
        'Standing desk option',
        'Espresso machine',
        '4K monitor included',
        'Meeting room access',
        'Balcony workspace'
      ],
      amenities: ['wifi', 'power', 'workspace', 'coffee', 'monitor'],
      description: 'Premium suite for executives and serious developers who demand the best setup.'
    }
  ];

  const amenityIcons = {
    wifi: <Wifi className="h-4 w-4" />,
    power: <Zap className="h-4 w-4" />,
    workspace: <Monitor className="h-4 w-4" />,
    coffee: <Coffee className="h-4 w-4" />,
    monitor: <Monitor className="h-4 w-4" />
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Tech-Optimized Rooms</h1>
          <p className="text-xl opacity-90">
            Stay productive with our specially designed workspaces and premium amenities
          </p>
        </div>
      </div>

      {/* Booking Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Booking</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <Label>Check-in</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkIn ? format(checkIn, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label>Check-out</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkOut ? format(checkOut, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label>Guests</Label>
                <Input
                  type="number"
                  min="1"
                  max="4"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                />
              </div>
              <div className="flex items-end">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Search Rooms
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                    <div className="flex space-x-2 mb-3">
                      {room.amenities.map((amenity) => (
                        <Badge key={amenity} variant="secondary" className="flex items-center space-x-1">
                          {amenityIcons[amenity as keyof typeof amenityIcons]}
                          <span className="capitalize">{amenity}</span>
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">₦{room.price}</div>
                    <div className="text-sm text-gray-500">per night</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{room.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {room.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full hover:opacity-90" 
                      style={{backgroundColor: '#001916'}}
                      onClick={() => handleBooking(room.name, room.price)}
                    >
                      Book Now - ₦{room.price}/night
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Book {room.name} - ₦{room.price}/night</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label>Full Name *</Label>
                        <Input 
                          placeholder="Enter your full name" 
                          value={bookingData.name}
                          onChange={(e) => setBookingData(prev => ({...prev, name: e.target.value}))}
                        />
                      </div>
                      <div>
                        <Label>Email *</Label>
                        <Input 
                          type="email" 
                          placeholder="Enter your email" 
                          value={bookingData.email}
                          onChange={(e) => setBookingData(prev => ({...prev, email: e.target.value}))}
                        />
                      </div>
                      <div>
                        <Label>Phone</Label>
                        <Input 
                          type="tel" 
                          placeholder="Enter your phone number" 
                          value={bookingData.phone}
                          onChange={(e) => setBookingData(prev => ({...prev, phone: e.target.value}))}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Check-in *</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className="w-full justify-start text-left font-normal">
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {checkIn ? format(checkIn, "MMM dd") : "Select date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={checkIn}
                                onSelect={setCheckIn}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div>
                          <Label>Check-out *</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className="w-full justify-start text-left font-normal">
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {checkOut ? format(checkOut, "MMM dd") : "Select date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={checkOut}
                                onSelect={setCheckOut}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                      <div>
                        <Label>Special Requests</Label>
                        <Textarea 
                          placeholder="Any special requirements?" 
                          value={bookingData.specialRequests}
                          onChange={(e) => setBookingData(prev => ({...prev, specialRequests: e.target.value}))}
                        />
                      </div>
                      <Button 
                        className="w-full hover:opacity-90" 
                        style={{backgroundColor: '#001916'}}
                        onClick={handleSubmitBooking}
                        disabled={!bookingData.name || !bookingData.email || !checkIn || !checkOut}
                      >
                        Confirm Booking
                      </Button>
                      <p className="text-sm text-gray-600 text-center">
                        Payment can be made upon arrival at the resort
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Stay With Us */}
        <div className="mt-16 bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Why Our Rooms Are Perfect for Tech Professionals</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Wifi className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Guaranteed Connectivity</h3>
              <p className="text-gray-600">Dedicated fiber lines with 99.9% uptime and backup connections</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Power Backup</h3>
              <p className="text-gray-600">UPS systems and generators ensure your work is never interrupted</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Monitor className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Ergonomic Workspaces</h3>
              <p className="text-gray-600">Standing desks, ergonomic chairs, and proper lighting for productivity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}