import { isNgTemplate } from '@angular/compiler';
import { Component, IterableDiffers, OnInit } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  inputtxt : string = "Enter New TASK"
  title :string = " TODO LIST AVEC ANGULAR"
  list :any[]=[]
  constructor() { }

  ngOnInit(): void {
  }
  addTask(item: string)
  {
    //console.log(item)
    this.list.push({id:this.list.length,name:item})
    this.inputtxt="Enter New TASK"
    //console.log(this.list)
  } 
  removeTask(id:number)
  {
    this.list = this.list.filter(item=>item.id!==id)
  }
}
