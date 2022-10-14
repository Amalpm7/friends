import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(private myapi:ApiService) { this.putData() }
  status:boolean=false
  putData=()=>{
    this.myapi.getData().subscribe(
      (data)=>{
        this.friendData=data
        this.status=true
      }
    )
  }
  friendData:any=[]
 
  ngOnInit(): void {
  }

}
