import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Mail } from './mail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  private baseUrl = '../assets/Data/mail.json';
  constructor(private http: HttpClient) {}

  getData(): Observable<Mail[]> {
    return this.http.get<Mail[]>(this.baseUrl);
  }
}
