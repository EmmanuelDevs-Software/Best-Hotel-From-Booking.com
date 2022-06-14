import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
/**
 * Testing Import
 */

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

const mockCall = {
  link: "https://www.booking.com/hotel/es/room-mate-alba.de.html?aid=1938431",
  name: "Room Mate Alba",
  rating: 9.3
}


describe('ApiService', () => {
  let service: ApiService;
  let httpController: HttpTestingController;

  const url = 'https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call Api ang returns a Hotel', () => {
    service.getBestHotelFromBookingDotCom('Madrid', 'Spain').subscribe(res => {
      console.log(res);
      expect(res).toEqual(mockCall)
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}?cityName=Madrid&countryName=Spain`
    })

    req.flush(mockCall)
  })
});
