import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UserService {
    private userurl = 'http://localhost:8000/users';
    constructor(private http: Http) {}

    getUsers(): Promise<User[]> {
        return this.http.get(this.userurl)
            .toPromise()
            .then(this.handleGetUsers)
            .catch(this.handleError);
    }

    handleGetUsers(response: any): Promise<User[]> {
        console.log(response.json());
        return Promise.resolve(response.json() as User[]);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occured when fetching users', error);
        return Promise.reject(error.message || error);
    }
}