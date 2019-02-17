import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import ToDo from '../to-do/to-do.component';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input() item: object;
  @Output() deleteItem = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {}


  delete(item: object) {
    console.log(item);
    this.deleteItem.emit(item);
  }

}
