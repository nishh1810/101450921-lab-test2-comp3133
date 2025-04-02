import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MissionService } from '../network/detailedx.service'; // Assuming you have a service to fetch data
import { SpaceXLaunch } from '../models/spacex-launch.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
  imports: [CommonModule]
})
export class MissiondetailsComponent implements OnInit {
  mission!: SpaceXLaunch; // To store the mission data

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private missionService: MissionService  // Service to fetch mission details
  ) {}

  ngOnInit(): void {
    // Fetch the flight_number from the route parameters
    const flightNumber = this.route.snapshot.paramMap.get('flight_number');
    
    if (flightNumber) {
      // Fetch mission details from the service
      this.missionService.getMissionDetails(flightNumber).subscribe((data) => {
        console.log(this.mission); 
        this.mission = data;
      });
    }
  }

  onBack(): void {
    // Navigate back to the mission list
    this.router.navigate(['/']);
  }
}
