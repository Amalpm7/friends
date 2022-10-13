import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfriends',
  templateUrl: './addfriends.component.html',
  styleUrls: ['./addfriends.component.css']
})
export class AddfriendsComponent implements OnInit {

  constructor( private myapi:ApiService) { }
  id=""
  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""
  readValue=()=>{
    let data ={
      "id":this.id,
  "name":this.name,
  "friendName":this.friendName,
  "friendNickName":this.friendNickName,
  "DescribeYourFriend":this.DescribeYourFriend
    }
    console.log(data)
    this.myapi.addFriend(data).subscribe(
      (response)=>{
        console.log(response)
        alert("Succesfully Added")

      }
    )
    
  }

  ngOnInit(): void {
  }

}
