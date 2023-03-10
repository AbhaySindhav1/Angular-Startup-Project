import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css'],
})
export class ReceipeListComponent implements OnInit {
  receipes: Receipe[] = [
    new Receipe(
      'Dosa',
      'Maysoor masala it is very testy and healthy',
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvc2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    ),
    new Receipe(
      'Munchuriyan',
      'Munchuriyan masala it is very testy and spicy',
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvc2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
