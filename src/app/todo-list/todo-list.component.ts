import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  animations: [
    trigger('addAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('300ms', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
    trigger('deleteAnimation', [
      transition(':leave', [
        style({ opacity: 1, height: '*', marginBottom: '*' }),
        animate('300ms', style({ opacity: 0, height: '0', marginBottom: '0' })),
      ]),
    ]),
  ],
})
export class TodoListComponent implements OnInit {
  newTask: string = '';
  tasks: { title: string }[] = [];
  doneTasks: { title: string }[] = [];

  ngOnInit() {
    // Retrieve tasks and doneTasks from local storage on component initialization
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }

    const savedDoneTasks = localStorage.getItem('doneTasks');
    if (savedDoneTasks) {
      this.doneTasks = JSON.parse(savedDoneTasks);
    }
  }
  getProgressPercentage(): number {
    const totalTasks = this.tasks.length + this.doneTasks.length;
    if (totalTasks === 0) {
      return 0;
    }
    const completedTasks = this.doneTasks.length;
    const progressPercentage = (completedTasks / totalTasks) * 100;
    return Math.round(progressPercentage);
  }
  addTask() {
    if (this.newTask) {
      const newTask = {
        title: this.newTask,
      };
      this.tasks.push(newTask);
      this.newTask = '';
      this.saveDataToLocalStorage();
    }
  }

  completeTask(index: number) {
    const completedTask = this.tasks.splice(index, 1)[0];
    this.doneTasks.push(completedTask);
    this.saveDataToLocalStorage();
  }

  removeTask(index: number, isDoneTask: boolean = false) {
    if (isDoneTask) {
      this.doneTasks.splice(index, 1);
    } else {
      this.tasks.splice(index, 1);
    }
    this.saveDataToLocalStorage();
  }

  private saveDataToLocalStorage() {
    // Save tasks and doneTasks to local storage
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    localStorage.setItem('doneTasks', JSON.stringify(this.doneTasks));
  }
}
