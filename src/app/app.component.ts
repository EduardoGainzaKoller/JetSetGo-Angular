import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Flight } from './models/flight';
import {OfferCardComponent} from './components/offer-card/offer-card.component';
import {AsyncPipe, CommonModule, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OfferCardComponent, AsyncPipe, CurrencyPipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}



