import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private afs: AngularFirestore) { }


  getFlights(): Observable<Flight[]> {
    return this.afs.collection<Flight>('flights').valueChanges();
  }


  getFlightById(id: string): Observable<Flight | undefined> {
    return this.afs.collection('flights').doc<Flight>(id).valueChanges();
  }


  addFlight(flight: Flight): Promise<void> {
    const flightId = this.afs.createId();
    return this.afs.collection('flights').doc(flightId).set(flight);
  }


  updateFlight(id: string, flight: Flight): Promise<void> {
    return this.afs.collection('flights').doc(id).update(flight);
  }


  deleteFlight(id: string): Promise<void> {
    return this.afs.collection('flights').doc(id).delete();
  }


  searchFlights(destination: string, departureDate: string, arrivalDate: string): Observable<Flight[]> {
    return this.afs.collection<Flight>('flights', ref =>
      ref
        .where('destination', '==', destination)
        .where('departure_date', '>=', departureDate)
        .where('arrival_date', '<=', arrivalDate)
    ).valueChanges();
  }
}
