import { Component } from '@angular/core';

@Component({
  selector: 'table',
  templateUrl: './table.component.html'
  // styleUrls: ['./book-list.component.css'],
})
export class TableComponent {
  constructor() {}

  data = [
    { name: 'Dilli K', city: 'Bengaluru', id: 1 },
    { name: 'Chandan', city: 'Hyderabad', id: 2 },
    { name: 'Sahin BR', city: 'Chennai', id: 3 },
    { name: 'Ranjan Kumar A', city: 'Kokata', id: 4 }
  ];

  rowHeaders = Object.keys(this.data[0]);
}
