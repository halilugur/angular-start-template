import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatAnchor, MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-private-footer',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    MatToolbar,
    MatAnchor
  ],
  templateUrl: './private-footer.component.html',
  styleUrl: './private-footer.component.scss'
})
export class PrivateFooterComponent {
  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}
