import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'
import { Route } from '../../../node_modules/_@angular_compiler@5.0.3@@angular/compiler/src/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  id: number;
  user: object = {};

  constructor(
    public dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
    })
   }

  ngOnInit() {
    this.dataService.getSingleUser(this.id).subscribe((user) => {
        this.user = user;
    })
  }

}
