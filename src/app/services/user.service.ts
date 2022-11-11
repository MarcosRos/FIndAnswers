import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  url1: string =
    'https://data.mongodb-api.com/app/data-jspse/endpoint/data/v1/action/findOne';

  constructor(private _http: HttpClient) {}

  public getUsuarios(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key':
          'qx351DrY0GwIJcIr4BVR5ZZ9urXLQHTiktIFtSgPDhUFZse8LEg1YhVTYKm61VTe',
      }),
    };

    //"collection": 'Usuarios',
    //"database": 'Db1',

    const body = {
      dataSource: 'FIndAnswers',
      database: 'sample_mflix',
      collection: 'comments',
    };

    console.log(body);
    console.log(this.url1);
    console.log(httpOptions);
    return this._http.post(this.url1, null, httpOptions);
  }
}
