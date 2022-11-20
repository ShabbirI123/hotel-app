import { Component, OnInit } from '@angular/core';
import { Booking } from "../booking";
import { Bookings } from "../mock-bookings";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor() { }

  bookings = Bookings;

  //Life cycle hook: like init function if the component load finished
  ngOnInit(): void {
  }

}
