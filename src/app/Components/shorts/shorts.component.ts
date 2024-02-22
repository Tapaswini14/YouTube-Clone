import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shorts',
  templateUrl: './shorts.component.html',
  styleUrl: './shorts.component.css'
})
export class ShortsComponent implements OnInit {
  carouselItems = [
    { image: 'assets/thumbnail1.jpg' },
    { image: 'assets/thumbnail1.jpg' },
    { image: 'assets/thumbnail1.jpg' },
    { image: 'assets/thumbnail1.jpg' }
  ];
  constructor() {}
  ngOnInit(): void {}
  currentIndex = 0;

  slideUp(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  slideDown(): void {
    if (this.currentIndex < this.carouselItems.length - 1) {
      this.currentIndex++;
    }
  }
}
