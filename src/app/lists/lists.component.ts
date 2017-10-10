import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {Routes, RouterModule} from "@angular/router";
import { Title } from '@angular/platform-browser';
import 'rxjs/add/operator/map'
import { ShareDataService } from './../share-data.service';
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  data : any;
  constructor(_http: Http,private title: Title,private shareData:ShareDataService) {
    this.title.setTitle('Lists');
    _http.get('https://cors-anywhere.herokuapp.com/http://54.254.198.83:8080/favourite.json')
    .subscribe(
      (res) => {
        this.data = res.json();
      }
    );
  }
  
  addToFavourites(selectedData){
    console.log("addeddd")
    // Filter Data used to check if an Item from Lists page was already added.
    // Preventing duplicate entries in Favourites Page
    let filterData = this.shareData.data.filter(function(dataPart){
      return dataPart.title == selectedData.title;
    });
    console.log("Duplicate Entry",filterData);
    if(filterData.length==0) this.shareData.data.push(selectedData);
  }

  ngOnInit() {
  }

}
