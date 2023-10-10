import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  timelineEvents = [
    { date: '2023-01-01', description: 'Event 1 Description' },
    { date: '2023-02-15', description: 'Event 2 Description' },
    { date: '2023-04-10', description: 'Event 3 Description' },
    // Add more events as needed
  ];
}
