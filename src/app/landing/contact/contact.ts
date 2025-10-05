import { Component } from '@angular/core';
import { Hero } from '../../features/articlelist/hero/hero';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';
import * as L from 'leaflet';
import { Form } from '../form/form';

@Component({
  selector: 'app-contact',
  imports: [Hero, Nav, Footer, Form],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  constructor() {}

  private map!: L.Map;
  ngOnInit() {
    // fix leaflet marker icons
    const iconRetinaUrl = 'svg/Exit.svg';
    const iconUrl = 'svg/Exit.svg';
    const shadowUrl = 'svg/Exit.svg';

    L.Marker.prototype.options.icon = L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41],
    });

    // نقشه روی دانشگاه صنعتی اصفهان
    this.map = L.map('map').setView([32.718648, 51.531527], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
    }).addTo(this.map);

    // مارکر روی دانشگاه
    L.marker([32.718648, 51.531527])
      .addTo(this.map)
      .bindPopup('دانشگاه صنعتی اصفهان 🎓')
      .openPopup();
  }
}
