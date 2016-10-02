import { Injectable } from '@angular/core';
import { Http, Jsonp, Response, Headers, RequestOptions } from '@angular/http';
import { Player } from './player';
import { Match } from './match';
import { Observable } from 'rxjs/Observable';
import './rxjs-operators';

@Injectable()
export class PlayerService {
  private rpsEndpointUrl = "/match"; // URL to rps API // http://0.0.0.0:8081/match
  
  constructor (private http: Http) { }
  
  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || { };
  }
  
  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); 
    return Observable.throw(error.message || error);
  }

  public playerMoves (move: string): Observable<Match> {
    let body = JSON.stringify({ choice: move });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http
      .post(this.rpsEndpointUrl, body , options)
      .map(this.extractData)
      .catch(this.handleError);
  }
}