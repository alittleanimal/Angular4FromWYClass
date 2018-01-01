import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  address: Address;
  hobbies: String[];
  name: String = "nameString";
  age: String = "ageString";
  isEdit = false;


  constructor() { }

  ngOnInit() {
    this.address = {
      street: 'shangda road',
      city: 'shanghai',
      state: 'baoshan strict'
    }
    this.hobbies = ['wirting', 'reading', 'swimming']
  }

  onClick(){
    this.hobbies.push('new hobby');
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(i){
    this.hobbies.splice(i,1);
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address{
  street: string;
  city: string;
  state: string;
}
