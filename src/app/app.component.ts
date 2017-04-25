import { Component } from '@angular/core';
import { User } from './user'


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>User List</h2>
    <ul class="users">
      <li *ngFor="let user of users" 
        (click)="onSelect(user)" 
        [class.selected]="user === selectedUser">
        <span class="badge">{{user.name}}</span> {{user.email}}
      </li>
    </ul>

    <user-detail [user]="selectedUser"></user-detail>
    `,
styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .users {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 30em;
  }
  .users li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .users li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .users li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .users .text {
    position: relative;
    top: -3px;
  }
  .users .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})
export class AppComponent  { 
  title = 'Rocket Logs';
  users = USERS;
  selectedUser: User;

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}

//Temporary mock user list, until services implemented
const USERS: User[] = [
  {
    id: 1,
    name: 'Colin',
    email: 'c.zeidler.wc@gmail.com'
  },
  {
    id: 2,
    name: 'Randall',
    email: 'czeidler@solananetworks.com'
  },
  {
    id: 3,
    name: 'zeidler',
    email: 'colinzeidler@yahoo.com'
  }
]
