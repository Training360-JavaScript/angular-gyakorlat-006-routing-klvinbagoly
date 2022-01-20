import { Injectable } from '@angular/core';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getAll(): Event[] {
    return [
      {
        name: "Basketball match",
        date: "2022. 01. 15.",
        time: "10am",
        location: {
          address: "Nagy Lajos u. 3.",
          city: "Budapest",
          country: "Magyarország"
        }
      },
      {
        name: "Rehearsal",
        date: "2022. 01. 13.",
        time: "14:00",
        location: {
          address: "Rákóczi út 8.",
          city: "Pápa",
          country: "Magyarország"
        }
      },
      {
        name: "Conference",
        date: "2022. 09. 15.",
        time: "19:00",
        location: {
          address: "Barkely street",
          city: "Southend",
          country: "UK"
        }
      },
    ]
  }
}
