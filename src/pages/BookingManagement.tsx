import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import { Calendar, User, Mail, Phone, Bed, DollarSign } from 'lucide-react';

interface Booking {
  id: string;
  guestName: string;
  email: string;
  phone: string;
  roomType: string;
  checkInDate: string;
  checkOutDate: string;
  numberOfGuests: number;
  numberOfNights: number;
  pricePerNight: number;
  totalCost: number;
  specialRequests: string;
  bookingDate: string;
  status: string;
}

export default function BookingManagement() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = () => {
    try {
      const savedBookings = JSON.parse(localStorage.getItem('peaceRoyalBookings') || '[]');
      setBookings(savedBookings.sort((a: Booking, b: Booking) => 
        new Date(b.bookingDate).getTime() - new Date(a.bookingDate).getTime()
      ));
    } catch (error) {
      console.error('Error loading bookings:', error);
    }
  };

  const clearAllBookings = () => {
    if (confirm('Are you sure you want to clear all bookings? This action cannot be undone.')) {
      localStorage.removeItem('peaceRoyalBookings');
      setBookings([]);
      alert('All bookings have been cleared.');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Booking Management</h1>
            <p className="text-gray-600 mt-2">Manage all Peace Royal Resort bookings</p>
          </div>
          <div className="flex gap-4">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Total Bookings: {bookings.length}
            </Badge>
            <Button 
              variant="destructive" 
              onClick={clearAllBookings}
              disabled={bookings.length === 0}
            >
              Clear All Bookings
            </Button>
          </div>
        </div>

        {bookings.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <Bed className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Bookings Yet</h3>
              <p className="text-gray-500">Bookings will appear here once guests make reservations.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {bookings.map((booking) => (
              <Card key={booking.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-green-800">
                        Booking #{booking.id}
                      </CardTitle>
                      <p className="text-sm text-gray-500 mt-1">
                        Booked on {formatDate(booking.bookingDate)}
                      </p>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {booking.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Guest Information */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 flex items-center">
                        <User className="h-4 w-4 mr-2 text-green-600" />
                        Guest Information
                      </h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Name:</strong> {booking.guestName}</p>
                        <p className="flex items-center">
                          <Mail className="h-3 w-3 mr-2 text-gray-400" />
                          {booking.email}
                        </p>
                        {booking.phone && (
                          <p className="flex items-center">
                            <Phone className="h-3 w-3 mr-2 text-gray-400" />
                            {booking.phone}
                          </p>
                        )}
                        <p><strong>Guests:</strong> {booking.numberOfGuests}</p>
                      </div>
                    </div>

                    {/* Booking Details */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-green-600" />
                        Booking Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Room:</strong> {booking.roomType}</p>
                        <p><strong>Check-in:</strong> {formatDate(booking.checkInDate)}</p>
                        <p><strong>Check-out:</strong> {formatDate(booking.checkOutDate)}</p>
                        <p><strong>Nights:</strong> {booking.numberOfNights}</p>
                      </div>
                    </div>

                    {/* Payment Information */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 flex items-center">
                        <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                        Payment Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Rate:</strong> ${booking.pricePerNight}/night</p>
                        <p className="text-lg font-bold text-green-600">
                          <strong>Total: ${booking.totalCost}</strong>
                        </p>
                        <Badge variant="outline" className="text-xs">
                          Pay on Arrival
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {booking.specialRequests && (
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <h5 className="font-semibold text-sm text-gray-700 mb-1">Special Requests:</h5>
                      <p className="text-sm text-gray-600">{booking.specialRequests}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}