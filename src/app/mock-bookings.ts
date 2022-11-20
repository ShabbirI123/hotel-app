import { Booking } from "./booking";

export const Bookings: Booking[] = [
  {
    id: 1,
      name: "Shabbir Islam",
    roomNumber: 1,
    startDate: new Date(),
    endDate: new Date("2022-10-30"),
  },
  {
    id: 2,
    name: "John Doe",
    roomNumber: 2,
    startDate: new Date("2022-10-30"),
    endDate: new Date("2022-11-15"),
  },
  {
    id: 3,
    name: "Lisa Antonela",
    roomNumber: 3,
    startDate: new Date("2022-11-11"),
    endDate: new Date("2022-11-27"),
  },
  {
    id: 4,
    name: "Boris Gustav",
    roomNumber: 4,
    startDate: new Date("2022-11-16"),
    endDate: new Date("2022-11-30"),
  },
]
