import { Component, OnInit } from '@angular/core';
import ToDo from './toDo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor() {
  }

  list: ToDo[] = [
    {
      id: 1,
      name: 'clean the house'
    },
    {
      id: 2,
      name: 'buy milk'
    }
  ];
  todo: string;

  ngOnInit() {
  }

  createNewToDoItem() {
    if (!this.todo) {
      alert('Please enter a todo!');
      return;
    }
    const newId = Math.max.apply(null, this.list.map(t => t.id)) + 1;
    this.list.push({ id: newId, name: this.todo});
    this.todo = '';
  }

  deleteItem(item: object) {
    console.log('clicked');
    this.list = this.list.filter(todo => todo !== item);
  }

}
