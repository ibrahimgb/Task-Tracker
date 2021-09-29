import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Task Tracker';
  showAddTask: boolean;
  subscription?:Subscription;

  constructor(private uiService:UiService, private router : Router) {
    this.showAddTask = false;
    this.subscription = this.uiService.onToggle().subscribe(Value => this.showAddTask = Value);
   }

  ngOnInit(): void {
  }
  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route: String){
    return this.router.url === route;
  }
}
