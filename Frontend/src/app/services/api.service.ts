import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DbConfig } from '../config/dbConfig'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {
  private _db = DbConfig.path;

  constructor(private http: Http) { }

  getAll() {
    let path = `${this._db}/data`
    console.log('path ' + path)
    return this.http.get(path)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError)
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body)
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
