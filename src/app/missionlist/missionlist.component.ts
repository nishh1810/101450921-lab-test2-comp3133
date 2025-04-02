import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../network/spacex.service';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';
import { CommonModule } from '@angular/common';
import { SpaceXLaunch } from '../models/spacex-launch.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
  standalone: true,
  imports: [CommonModule, MissionfilterComponent ,RouterLink], 
})
export class MissionlistComponent implements OnInit {
  missions: SpaceXLaunch[] = [];
  filteredMissions: SpaceXLaunch[] = [];
  selectedMission!: SpaceXLaunch; 

  constructor(private spacexService: SpaceXService) {}

  ngOnInit(): void {
    this.spacexService.getMissions().subscribe((data: any) => {
      this.missions = data;
      this.filteredMissions = data;
    });
  }

  onFilterChanged(year: number | undefined): void {
    if (year !== undefined) {
      this.filteredMissions = this.missions.filter(mission => mission.launch_year === year.toString());
    } else {
      this.filteredMissions = this.missions;
    }
  }
  openMissionDetailsInNewTab(flightNumber: number): void {
    // Open the mission details page in a new tab
    const url = `/mission/${flightNumber}`;  // Assuming the route to the mission details is /mission/:flight_number
    window.open(url, '_blank');
  }
}
