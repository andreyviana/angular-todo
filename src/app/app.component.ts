import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule, Trash, Pen } from 'lucide-angular'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LucideAngularModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-todo';
  
  todoList = [
    {todo: "Work", id: 1, isCompleted: true},
    {todo: "Study", id: 2, isCompleted: true},
    {todo: "Play video games", id: 3, isCompleted: false},
  ]

  readonly trash = Trash;
  readonly pen = Pen;
}
