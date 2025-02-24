import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentDate: Date = new Date();
  currentTime: string = '';

  ngOnInit(): void {
    this.updateTime();
  }

  updateTime(): void {
    setInterval(() => {
      const now = new Date();
      this.currentDate = now;
      this.currentTime = now.toLocaleTimeString(); // Format: HH:MM:SS
    }, 1000); // Mise à jour chaque seconde
  }

}
