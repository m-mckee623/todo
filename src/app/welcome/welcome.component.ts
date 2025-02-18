import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {TodoDataService} from '../service/data/todo-data.service';
import {Chart, registerables} from 'chart.js';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  username: string | null = '';
  chart: any;
  todos: any[] = [];

  constructor(
    private todoService: TodoDataService) {
    //We need to explicitly register to essentially ensure Chart JS has the pie chart ready.
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.username = sessionStorage.getItem('authenticateUser');
    if (this.username != null) {
      this.todoService.retrieveAllTodos(this.username).subscribe(data => {
        this.todos = data;
        this.createChart();
      });
    }
  }

  createChart() {
    const statusCounts = this.todos.reduce((acc, todo) => {
      acc[todo.status] = (acc[todo.status] || 0) + 1;
      return acc;
    }, {});

    const statuses = ['Not Started', 'In Progress', 'Completed'];
    const counts = statuses.map(status => statusCounts[status] || 0);

    this.chart = new Chart('canvas', {
      type: 'pie',
      data: {
        labels: statuses,
        datasets: [
          {
            data: counts,
            backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
            hoverBackgroundColor: ['#ff6384', '#36a2eb', '#cc65fe']
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  capitalizeFirstLetter(name: string | null): string {
    if (!name) {
      return '';
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}
