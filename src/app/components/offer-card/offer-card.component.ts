import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import { Flight } from '../../models/flight';

@Component({
  selector: 'app-offer-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css']
})
export class OfferCardComponent {

  @Input() destination: string;
  @Input() departure_date: string;
  @Input() departure_time: string;
  @Input() price: number;
  @Input() image: string;

  constructor() {
    this.destination = 'Paris';
    this.departure_time = '1h 40m, directo';
    this.departure_date = '2025-04-15';
    this.price = 230;
    this.image = '';
  }

}
