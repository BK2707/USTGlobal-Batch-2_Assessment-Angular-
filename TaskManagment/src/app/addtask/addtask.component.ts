import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  task: any[]=[];

  constructor() { }
  addtask(viewtask){
    this.task.push(viewtask);

  }

  ngOnInit() {
  }

}
