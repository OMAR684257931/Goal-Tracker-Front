import { Injectable } from '@angular/core';
import axios from 'axios';
import { Goal } from '../models/goal.model';

@Injectable({ providedIn: 'root' })
export class GoalService {
  private api = 'http://localhost:3000/goals';

  async getMyGoals(): Promise<Goal[]> {
    const res = await axios.get<Goal[]>(this.api);
    return res.data;
  }
  async createGoal(data: Partial<Goal>): Promise<Goal> {
    const res = await axios.post<Goal>(this.api, data);
    return res.data;
  }
  async updateGoal(id: string, data: Partial<Goal>): Promise<Goal> {
    const res = await axios.put<Goal>(`${this.api}/${id}`, data);
    return res.data;
  }

  async deleteGoal(id: string): Promise<void> {
    await axios.delete(`${this.api}/${id}`);
  }

}

