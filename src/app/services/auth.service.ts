// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environment";

interface AuthRequest {
  username: string;
  password: string;
}

interface AuthResponse {
  username: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl; // Replace with your API URL

  constructor(private http: HttpClient) {}

  login(authRequest: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, authRequest);
  }
}