import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FloatingAppbarComponent } from "./components/appbar/floating-appbar/floating-appbar.component";
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, FloatingAppbarComponent]
})
export class AppComponent {
  backgroundImage = 'assets/background.jpg';
  title = 'my-portofolio';

  darkMode$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    localStorage.getItem('darkMode') === 'true'
  );

  ngAfterViewInit() {
    // Check the localStorage for the darkMode value
    const darkMode = localStorage.getItem('darkMode');
    
    // Apply dark mode class if darkMode is true or 'true' in localStorage
    if (darkMode === 'false') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  toggleDarkMode(isDark: boolean) {
    document.documentElement.classList.toggle('dark')
    this.darkMode$.next(isDark)
  }
}
