import { Component, OnInit } from '@angular/core';
import { ClasseService } from 'src/app/services/classe.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  classes: number = 0;
  elves: number = 0;
  enseignant: number = 0;

  constructor(
    private userService: UserService,
    private classService: ClasseService
  ) {}

  ngOnInit(): void {
    this.countEleves();
    this.countEnseignant();
    this.countClasses();
  }

  countEleves(): void {
    this.userService.countEleve().subscribe((response) => {
      this.elves = response;
    });
  }

  countEnseignant(): void {
    this.userService.countEnseignant().subscribe((response) => {
      this.enseignant = response;
    });
  }

  countClasses(): void {
    this.classService.countClasses().subscribe((response) => {
      this.classes = response;
    });
  }
}
