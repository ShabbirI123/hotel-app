import {Component, OnInit} from '@angular/core';
import {Booking} from "../booking";
import {Bookings} from "../mock-bookings";
import {Router, ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  booking: Booking = {
    id: 100,
    name: "Your Name",
    roomNumber: 100,
    startDate: new Date(),
    endDate: new Date()
  }

  exist: boolean = (this.activatedRoute.snapshot.paramMap.get('id')) ? true : false;

  ngOnInit(): void {
    if (this.router.url != '/create'){
      let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      let bookingById = Bookings.find(booking => booking.id == id)!;
      this.booking = bookingById;
    }
  }

  save(): void {
    let bookingById = Bookings.find(booking => booking.id == this.booking.id);

    if (bookingById == null || bookingById == undefined){
      Bookings.push(this.booking);
    } else {
      bookingById = this.booking;
    }
    this.router.navigate(['bookings']);
  }

  delete(): void {
    let bookingById = Bookings.find(booking => booking.id == this.booking.id);
    if (bookingById){
      let index = Bookings.indexOf(this.booking);
      if (index !== -1){
        Bookings.splice(index, 1);
      }
    }
    this.router.navigate(['bookings']);
  }

  dateChanged(event: Event, isStart: boolean){
    let val = (event.target as HTMLInputElement).value;

    if (isStart){
      this.booking.startDate = new Date(val);
    } else {
      this.booking.endDate = new Date(val);
    }
  }
}
