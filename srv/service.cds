using {HotelBooking} from '../db/schema';

service hotelbookingsrv{
    entity Users as projection on HotelBooking.Users;
    entity Hotels as projection on HotelBooking.Hotels;
    entity RoomCategories as projection on HotelBooking.RoomCategories;
    entity RoomPrices as projection on HotelBooking.RoomPrices;
    entity Bookings as projection on HotelBooking.Bookings;
}
