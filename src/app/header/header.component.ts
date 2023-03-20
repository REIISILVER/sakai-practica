import { Component, Input } from '@angular/core';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public faPerson = faPerson;
  public faBars = faBars;
  public faCalendar = faCalendar;
  public faGear = faGear;
  @Input()
  public toggleActive: boolean = true;

  onToggle(): void {
    this.toggleActive = !this.toggleActive;
    console.log(this.toggleActive);
  }
}
