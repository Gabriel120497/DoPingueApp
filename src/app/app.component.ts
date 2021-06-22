import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    /*{ title: 'Kits', url: '/folder/Kits', icon: 'mail' },
    { title: 'Arma tu kit', url: '/folder/Armar-Kit', icon: 'paper-plane' },
    { title: 'Miscelaneos', url: '/folder/Miscelaneos', icon: 'heart' },*/
    { title: 'Contabilidad', url: '/folder/Contabilidad', icon: 'heart' },
    /*{ title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },*/
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
