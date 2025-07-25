import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  @Output() search = new EventEmitter<string>();
  searchCourse(e){
    this.search.emit(e);
  }
}
