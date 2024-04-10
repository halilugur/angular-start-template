import {Component, Input, signal, WritableSignal} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatFabAnchor, MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {BooleanInput} from "@angular/cdk/coercion";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {RouterLink} from "@angular/router";
import {MatTooltip} from "@angular/material/tooltip";
import {MatDivider} from "@angular/material/divider";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {StyleManager} from "../../../_services/style-manager.service";
import {MatLabel} from "@angular/material/form-field";

@Component({
  selector: 'app-private-header',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    MatToolbar,
    MatMenu,
    MatMenuItem,
    RouterLink,
    MatTooltip,
    MatMenuTrigger,
    MatDivider,
    MatButton,
    MatSlideToggle,
    MatLabel,
    MatFabAnchor
  ],
  templateUrl: './private-header.component.html',
  styleUrl: './private-header.component.scss'
})
export class PrivateHeaderComponent {
  @Input({required: true}) sidebarCollapsed!: WritableSignal<BooleanInput>;
  theme: WritableSignal<BooleanInput> = signal<BooleanInput>(true);

  constructor(private styleManager: StyleManager) {
  }

  changeTheme() {
    this.theme.set(!this.theme());
    this.styleManager.toggleDarkTheme(this.theme());
  }
}
