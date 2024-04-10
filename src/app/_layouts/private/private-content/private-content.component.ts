import {Component, signal} from '@angular/core';
import {PrivateHeaderComponent} from "../private-header/private-header.component";
import {PrivateSidebarComponent} from "../private-sidebar/private-sidebar.component";
import {PrivateFooterComponent} from "../private-footer/private-footer.component";
import {RouterOutlet} from "@angular/router";
import {BooleanInput} from "@angular/cdk/coercion";

@Component({
  selector: 'app-private-content',
  standalone: true,
  imports: [
    PrivateHeaderComponent,
    PrivateSidebarComponent,
    PrivateFooterComponent,
    RouterOutlet
  ],
  templateUrl: './private-content.component.html',
  styleUrl: './private-content.component.scss'
})
export class PrivateContentComponent {
  sidebarCollapsed = signal<BooleanInput>(true);
}
