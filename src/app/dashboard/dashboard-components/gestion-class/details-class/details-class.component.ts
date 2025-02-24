import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-details-class',
  templateUrl: './details-class.component.html',
  styleUrls: ['./details-class.component.scss']
})
export class DetailsClassComponent {
  classDetails = {
    name: '7ème B1',
    capacity: 30,
    schoolYear: '2023-2024', 
    students: ['Mohamed Amine Ayari', 'Karim Teib', 'Salah Arfaoui'],
    teachers: ['Ahmed Salah', 'Farah Saad']
  };

  constructor(
    public dialogRef: MatDialogRef<DetailsClassComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  // Supprimer un élève
  removeStudent(student: string) {
    this.classDetails.students = this.classDetails.students.filter((s) => s !== student);
  }

  // Supprimer un enseignant
  removeTeacher(teacher: string) {
    this.classDetails.teachers = this.classDetails.teachers.filter((t) => t !== teacher);
  }

  // Ajouter un élève
  addStudent(student: string) {
    if (student && !this.classDetails.students.includes(student)) {
      this.classDetails.students.push(student);
    }
  }

  // Ajouter un enseignant
  addTeacher(teacher: string) {
    if (teacher && !this.classDetails.teachers.includes(teacher)) {
      this.classDetails.teachers.push(teacher);
    }
  }

  updateCapacity(value: string): void {
    const newCapacity = Number(value);
    if (!isNaN(newCapacity) && newCapacity > 0) {
      this.classDetails.capacity = newCapacity;
    } else {
      console.error('Invalid capacity value');
    }
  }
  updateSchoolYear(newYear: string): void {
    this.classDetails.schoolYear = newYear;
    console.log('Année scolaire mise à jour :', this.classDetails.schoolYear);
  }
  
  
  closeDialog() {
    this.dialogRef.close();
  }

}
