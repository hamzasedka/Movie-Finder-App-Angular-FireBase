import { Component, Input } from '@angular/core';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {

  @Input()
  movie: Object;
  url:'http://via.placeholder.com/350x150';

}
