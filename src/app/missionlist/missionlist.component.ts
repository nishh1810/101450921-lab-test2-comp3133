import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../services/spacex.service';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';
import { MissiondetailsComponent } from '../missiondetails/missiondetails.component'; 
import { CommonModule } from '@angular/common';
import { SpaceXLaunch } from '../models/spacex-launch.model';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
  standalone: true,
  imports: [CommonModule, MissionfilterComponent, MissiondetailsComponent], // Add MissionDetailsComponent here
})
export class MissionlistComponent implements OnInit {
  missions: SpaceXLaunch[] = [];
  filteredMissions: SpaceXLaunch[] = [];
  selectedMission: SpaceXLaunch | null = null; 

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

  onMissionSelect(mission: any): void {
    console.log("Selected Mission:", mission); 
    this.selectedMission = mission;  
  }
}
