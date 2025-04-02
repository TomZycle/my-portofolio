import { AppComponent } from './../../../app.component';
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [NgClass],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isDarkMode: boolean = localStorage.getItem('darkMode') === 'true';
  constructor(private appComponent: AppComponent) { }
  codeBg: string = '';
  ngOnInit() {
    this.appComponent.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
    });
    if (this.isDarkMode) {
      this.codeBg = 'assets/code-white.png';
    } else {
      this.codeBg = 'assets/code-dark.png';
    }
  }
}
