import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class MissiondetailsComponent {
  @Input() mission: any;  // Accept the mission data as input from the parent component
}
