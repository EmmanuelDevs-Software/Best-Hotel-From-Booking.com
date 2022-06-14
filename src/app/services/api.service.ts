import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private headers = {
    headers: {
      'X-RapidAPI-Key': '39fa704855mshcb22df4e01b22b4p12e53cjsn6db523613467',
      'X-RapidAPI-Host': 'best-booking-com-hotel.p.rapidapi.com'
    }
  }

  private Url = 'https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation';


  headersForCall() {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('X-RapidAPI-Key', '39fa704855mshcb22df4e01b22b4p12e53cjsn6db523613467',)
      .set('X-RapidAPI-Host', 'best-booking-com-hotel.p.rapidapi.com');

    return headers;
  }

  getBestHotelFromBookingDotCom(city: string, country: string) {

    const headers = this.headersForCall()

    return this.http.get(this.Url, {
      headers,
      params: { cityName: city, countryName: country },
    })

  }
}
