import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  imports: [CommonModule]
})
export class ScheduleComponent {
  matches = [
    { date: 'March 18, 2025', teams: 'SMS vs Die Hardware' },
    { date: 'March 20, 2025', teams: 'Real Manufacturing vs CS🌙🌙🌙' },
    // Add more matches...
  ];
}