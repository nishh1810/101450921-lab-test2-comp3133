import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css'],
  standalone: true,
  imports: [FormsModule]  // No special imports needed here.
})
export class MissionfilterComponent {
  launchYear: number | undefined;  // Store the user-selected launch year

  @Output() filterChanged = new EventEmitter<number>();  // Emit filter changes to parent

  onFilterChange() {
    this.filterChanged.emit(this.launchYear);  // Emit the selected year
  }
}
