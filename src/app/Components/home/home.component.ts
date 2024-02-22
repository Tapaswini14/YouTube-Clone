import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
searchQuery: string = '';
  pageIndex = 0;
  pageSize = 6;
  totalItems = 0;
  cards: any[] = [
    {
      title: 'The best songs of KK(Playlist)',
      author: 'The Toxic Creation',
      views: '480 views',
      date: '15 hours ago',
      image: 'assets/thumbnail1.jpg',
    },
    {
      title: "Valentine's 2023 lovesongs",
      author: 'ZeeMusic Company',
      views: '1M views',
      date: '2 years ago',
      image: 'assets/thumbnail2.jpg',
    },
    {
      title: 'FrontEnd Products',
      author: 'ZeeMusic Company',
      views: '1M views',
      date: '2 years ago',
      image: 'assets/thumbnail3.jpg',
    },
    {
      title: "Valentine's 2023 lovesongs",
      author: 'ZeeMusic Company',
      views: '1M views',
      date: '2 years ago',
      image: 'assets/thumbnail4.jpg',
    },
    {
      title: "Valentine's 2023 lovesongs",
      author: 'ZeeMusic Company',
      views: '1M views',
      date: '2 years ago',
      image: 'assets/thumbnail5.jpg',
    },
    {
      title: "Valentine's 2023 lovesongs",
      author: 'ZeeMusic Company',
      views: '1M views',
      date: '2 years ago',
      image: 'assets/thumbnail6.jpg',
    },
    {
      title: "Valentine's 2023 lovesongs",
      author: 'ZeeMusic Company',
      views: '1M views',
      date: '2 years ago',
      image: 'assets/thumbnail12.jpg',
    },
    {
      title: "Valentine's 2023 lovesongs",
      author: 'ZeeMusic Company',
      views: '1M views',
      date: '2 years ago',
      image: 'assets/thumbnail6.jpg',
    },
    {
      title: "Valentine's 2023 lovesongs",
      author: 'ZeeMusic Company',
      views: '1M views',
      date: '2 years ago',
      image: 'assets/thumbnail9.jpg',
    },
    {
      title: "Valentine's 2023 lovesongs",
      author: 'ZeeMusic Company',
      views: '1M views',
      date: '2 years ago',
      image: 'assets/thumbnail10.jpg',
    },
    {
      title: "Valentine's 2023 lovesongs",
      author: 'ZeeMusic Company',
      views: '1M views',
      date: '2 years ago',
      image: 'assets/thumbnail3.jpg',
    },
    {
      title: "Valentine's 2023 lovesongs",
      author: 'ZeeMusic Company',
      views: '1M views',
      date: '2 years ago',
      image: 'assets/thumbnail3.jpg',
    },

    {
      title: "Valentine's 2023 lovesongs",
      author: 'ZeeMusic Company',
      views: '1M views',
      date: '2 years ago',
      image: 'assets/thumbnail3.jpg',
    },
    {
      title: "Valentine's 2023 lovesongs",
      author: 'ZeeMusic Company',
      views: '1M views',
      date: '2 years ago',
      image: 'assets/thumbnail3.jpg',
    },

    {
      title: "Valentine's 2023 lovesongs",
      author: 'ZeeMusic Company',
      views: '1M views',
      date: '2 years ago',
      image: 'assets/thumbnail3.jpg',
    },
    {
      title: "Valentine's 2023 lovesongs",
      author: 'ZeeMusic Company',
      views: '1M views',
      date: '2 years ago',
      image: 'assets/thumbnail3.jpg',
    },
    {
      title: "Valentine's 2023 lovesongs",
      author: 'ZeeMusic Company',
      views: '1M views',
      date: '2 years ago',
      image: 'assets/thumbnail3.jpg',
    },

    {
      title: "Valentine's 2023 lovesongs",
      author: 'ZeeMusic Company',
      views: '1M views',
      date: '2 years ago',
      image: 'assets/thumbnail3.jpg',
    },
    {
      title: "Valentine's 2023 lovesongs",
      author: 'ZeeMusic Company',
      views: '1M views',
      date: '2 years ago',
      image: 'assets/thumbnail3.jpg',
    },

    {
      title: "Valentine's 2023 lovesongs",
      author: 'ZeeMusic Company',
      views: '1M views',
      date: '2 years ago',
      image: 'assets/thumbnail3.jpg',
    },
    {
      title: "Valentine's 2023 lovesongs",
      author: 'ZeeMusic Company',
      views: '1M views',
      date: '2 years ago',
      image: 'assets/thumbnail3.jpg',
    },
  ];

  dataSource = new MatTableDataSource(this.cards);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor() {}

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<any>(this.cards);
    this.dataSource.paginator = this.paginator;
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  get card(): string[] {
    if (!this.searchQuery) {
      return this.cards;
    }

    const query = this.searchQuery.toLowerCase();
    return this.cards.filter((card) =>
      card.toLowerCase().includes(query)
    );
  }
}
