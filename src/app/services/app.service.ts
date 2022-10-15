import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, of } from 'rxjs';
import { first, tap, catchError, finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  readonly isDark = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  isProduction() {
    return environment.production;
  }
}
