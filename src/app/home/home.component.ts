import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: string[];
  data: any[] = [];

  constructor(public dataService: DataService) {
    // console.log(dataService.getUsers());
    // this.users = dataService.getUsers();

    dataService.getUsers().subscribe(data => {
      this.data.push(data);
    })
  }

  ngOnInit() {
  }

}
