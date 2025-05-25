import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { GoalService } from '../../shared/services/goal.service';
import { Goal } from '../../shared/models/goal.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit {
  goals: Goal[] = [];
  loading = true;

  constructor(
    private auth: AuthService,
    private router: Router,
    private goalService: GoalService
  ) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  async ngOnInit() {
    try {
      this.goals = await this.goalService.getMyGoals();
    } catch (err) {
      this.auth.logout();
      this.router.navigate(['/login']);
    } finally {
      this.loading = false;
    }
  }
  newGoal: Partial<Goal> = {
    title: '',
    description: '',
    deadline: '',
    isPublic: false,
    order: 1,
    parentId: undefined
  };

  async createGoal() {
    const parent = this.goals.find(g => g.id === this.newGoal.parentId);
    if (parent?.parentId) {
      alert('Cannot nest more than 2 levels');
      return;
    }

    if (!this.newGoal.title || !this.newGoal.deadline) {
      alert('Title and deadline are required.');
      return;
    }

    try {
      await this.goalService.createGoal(this.newGoal);
      this.newGoal = {
        title: '',
        description: '',
        deadline: '',
        isPublic: false,
        order: 1,
      };
      this.goals = await this.goalService.getMyGoals(); // refresh
    } catch (err) {
      alert('Error creating goal');
    }
  }
  editingGoalId: string | null = null;
  editGoal: Partial<Goal> = {};

  startEdit(goal: Goal) {
    this.editingGoalId = goal.id;
    this.editGoal = { ...goal }; // shallow copy
  }

  cancelEdit() {

    this.editingGoalId = null;
    this.editGoal = {};
  }

  async updateGoal() {
    if (!this.editGoal.title || !this.editGoal.deadline) {
      alert('Title and deadline required');
      return;
    }

    try {
      await this.goalService.updateGoal(this.editingGoalId!, this.editGoal);
      this.cancelEdit();
      this.goals = await this.goalService.getMyGoals();
    } catch (err) {
      alert('Update failed');
    }
  }

  async deleteGoal(id: string) {
    if (confirm('Are you sure you want to delete this goal?')) {
      await this.goalService.deleteGoal(id);
      this.goals = await this.goalService.getMyGoals();
    }
  }
  get rootGoals(): Goal[] {
    return this.goals.filter(g => !g.parentId);
  }

  getChildren(parentId: string): Goal[] {
    return this.goals.filter(g => g.parentId === parentId);
  }

}
