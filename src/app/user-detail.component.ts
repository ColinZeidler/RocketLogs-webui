import { Component, Input } from '@angular/core';
import { User } from './user'

@Component({
    selector: 'user-detail',
    template: `
    <div *ngIf="user">
      <h2>Welcome {{user.name}}</h2>
      <div>
        <label>name: </label>
        <input [(ngModel)]="user.username" placeholder="name">
      </div>
      <div>
        <label>email: </label>
        <input [(ngModel)]="user.email" placeholder="email">
      </div>
    </div>
    `
})

export class UserDetailComponent {
    @Input() user: User;
}