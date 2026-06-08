import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface ApiResponse<T = void> {
  success: boolean;
  data?: T;
  error?: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  submitContact(data: ContactFormData): Observable<ApiResponse<{ id: number; message: string }>> {
    return this.http.post<ApiResponse<{ id: number; message: string }>>(
      `${this.baseUrl}/api/contact`, data
    );
  }

  subscribeNewsletter(email: string): Observable<ApiResponse<{ message: string }>> {
    return this.http.post<ApiResponse<{ message: string }>>(
      `${this.baseUrl}/api/newsletter/subscribe`, { email }
    );
  }

  getServices(): Observable<ApiResponse<any[]>> {
    return this.http.get<ApiResponse<any[]>>(`${this.baseUrl}/api/services`);
  }
}
