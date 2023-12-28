import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import bmiData from './bmi.json'; 
import { FormsModule } from '@angular/forms';

interface BMI{
  id:Number;
  category:String;
  bmi:String;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-app';
  bmiData:BMI[] = bmiData;

  weight: number = 0;
  height: number = 0;
  bmiResult: string = '';

  calculateBMI() {
    const heightInMeters = this.height/100;
    const bmi = this.weight/(heightInMeters * heightInMeters);

    if(!isNaN(bmi)) {
      this.bmiResult = `Your BMI is ${bmi.toFixed(2)}.`;
    }
    else {
      this.bmiResult = 'Invalid input. Please check your weight and height.';
    }
  }
}
