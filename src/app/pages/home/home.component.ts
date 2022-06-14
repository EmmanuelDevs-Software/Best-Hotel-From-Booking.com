import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Browser } from '@capacitor/browser';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {

  myForm!: FormGroup;
  hotelInfo: any;


  constructor(private apiSvr: ApiService) {

  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      city: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
    });
  }


  onSubmit(form: FormGroup) {
    this.apiSvr.getBestHotelFromBookingDotCom(form.value.city, form.value.country).subscribe((res: any) => {
      this.hotelInfo = res
    })

    this.hotelInfo = {
      link: "https://www.booking.com/hotel/es/room-mate-alba.de.html?aid=1938431",
      name: "Room Mate Alba",
      rating: 9.3
    }
  }


  async openHotel(link: string) {
    await Browser.open({ url: link });
  }

}
