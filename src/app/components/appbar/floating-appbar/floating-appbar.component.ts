import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-floating-appbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './floating-appbar.component.html',
  styleUrl: './floating-appbar.component.css'
})
export class FloatingAppbarComponent {
  isDarkMode: boolean = localStorage.getItem('darkMode') === 'true';
  @Output() toggleDarkMode = new EventEmitter<boolean>();
  onToggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', String(this.isDarkMode));
    this.toggleDarkMode.emit(this.isDarkMode);
  }
}
