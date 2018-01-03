import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any[];

  user = {
    id: "",
    name: "",
    email: "",
    phone: ""
  }

  isEdit = false;

  constructor(public dataService: DataService) {
    this.dataService.getUsers().subscribe(users => {
      // console.log(users);
      this.users = users;
    })
  }

  ngOnInit() {
  }

  onSubmit(isEdit) {
    if (isEdit) {
      this.dataService.updateUser(this.user).subscribe(user => {
          for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id == this.user.id) {
              this.users.splice(i, 1);
            }
          }

          this.users.unshift(this.user);
      })
    } else {
      this.dataService.addUser(this.user).subscribe(user => {
        // console.log(user);
        this.users.unshift(user);
      })
    }
  }

  onDeleteClick(id) {
    this.dataService.deleteUser(id).subscribe(res => {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id == id) {
          this.users.splice(i, 1);
        }
      }
    })
  }

  onEditClick(user) {
    this.isEdit = true;
    this.user = user;
  }


}
