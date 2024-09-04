using { managed } from '@sap/cds/common';

namespace HotelBooking;

// User entity with role-based access
entity Users {
    key ID: Integer;
    Username: String(100);
    Password: String(100); // Should be hashed in practice
    FullName: String(255);
    Email: String(255);
}

// Hotel entity
entity Hotels {
    key ID: Integer;
    Name: String(255);
    Location: String(255);
    AvailableRooms: Integer;
    Description: String(1000);
}

// RoomCategory entity
entity RoomCategories {
    key ID: Integer;
    Name: String(50); // e.g., Single, Double, Suite
    Hotel: Association to Hotels;
}

// RoomPrice entity
entity RoomPrices {
    key ID: Integer;
    RoomCategory: Association to RoomCategories;
    Price: Decimal(10,2);
}

// Booking entity
entity Bookings {
    key ID: Integer;
    User: Association to Users;
    Hotel: Association to Hotels;
    RoomCategory: Association to RoomCategories;
    CheckInDate: Date;
    CheckOutDate: Date;
    NumberOfRooms: Integer;
    TotalPrice: Decimal(10,2);
}
