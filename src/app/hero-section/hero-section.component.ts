import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {
  banners: { imageUrl: string }[] = [
    { imageUrl: './assets/images/276-2000x1000.jpg' },
    { imageUrl: './assets/images/688-2000x1000.jpg' },
    { imageUrl: './assets/images/1038-2000x1000.jpg' }
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToShop(): void {
    this.router.navigate(['/products']);
  }

}