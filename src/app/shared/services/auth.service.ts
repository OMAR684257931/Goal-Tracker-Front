import axios from 'axios';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = 'http://localhost:3000/auth';

  async login(email: string, password: string): Promise<void> {
    const res = await axios.post(`${this.api}/login`, { email, password });
    localStorage.setItem('gt_token', res.data.access_token);
  }

  async register(data: { name: string; email: string; password: string }): Promise<void> {
    const res = await axios.post(`${this.api}/register`, data);
    localStorage.setItem('gt_token', res.data.access_token);
  }

  getToken(): string | null {
    return localStorage.getItem('gt_token');
  }

  logout() {
    localStorage.removeItem('gt_token');
  }
}
