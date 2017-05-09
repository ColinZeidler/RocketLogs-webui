import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Rocket } from './rocket'

@Injectable()
export class RocketService {
    constructor(private http: Http) { }

    private rocketurl = 'http://localhost:8000/rockets/';
    
    getRockets(): Promise<Rocket[]> {
        return this.http.get(this.rocketurl)
            .toPromise()
            .then(this.handleGetRockets)
            .catch(this.handleError);
    }

    handleGetRockets(response: any): Promise<Rocket[]> {
        console.log(response.json());
        return Promise.resolve(response.json() as Rocket[]);
    }

    handleError(error: any): Promise<any> {
        console.error('Error occured while fetching rockets', error)
        return Promise.reject(error.message || error)
    }

}