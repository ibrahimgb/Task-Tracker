import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  day:string;
  reminder: boolean = false;
  showAddTask: Boolean;
  subscription : Subscription

  constructor(private uiService: UiService) {
    this.text='';
    this.day=''
    this.showAddTask = false;

    this.showAddTask = false;
    this.subscription = this.uiService.onToggle().subscribe(Value => this.showAddTask = Value);
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert('please add a task!');
      return
    }

    const newTask : Task = {
      text: this.text,
      day : this.day,
      reminder : this.reminder
    }


    this.onAddTask.emit(newTask);

    this.text="";
    this.day="";
    this.reminder=false;

  }

}
