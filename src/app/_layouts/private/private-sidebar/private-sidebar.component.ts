import {Component, Input, signal, WritableSignal} from '@angular/core';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatListItemIcon, MatListItemTitle, MatNavList} from "@angular/material/list";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {BooleanInput} from "@angular/cdk/coercion";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-private-sidebar',
  standalone: true,
  imports: [
    MatDrawer,
    MatDrawerContainer,
    MatDrawerContent,
    MatIcon,
    MatListItem,
    MatListItemIcon,
    MatListItemTitle,
    MatNavList,
    RouterLinkActive,
    RouterOutlet,
    RouterLink,
    MatButton
  ],
  templateUrl: './private-sidebar.component.html',
  styleUrl: './private-sidebar.component.scss'
})
export class PrivateSidebarComponent {
  @Input({ required: true }) sidebarCollapsed!: WritableSignal<BooleanInput>;
  sidebarItems = signal<ISidebarItem[]>([
    {
      title: "Dashboard",
      icon: "dashboard",
      route: "dashboard"
    },
    {
      title: "Settings",
      icon: "settings",
      route: "settings"
    },
  ])
}

interface ISidebarItem {
  title: string,
  icon: string,
  route: string
}
