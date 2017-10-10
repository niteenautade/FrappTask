import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ShareDataService } from './../share-data.service';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favouritesData:any;
  constructor(private title: Title,private shareData:ShareDataService) {
    this.title.setTitle('Favourites');
    this.favouritesData = shareData.data;
  }

  ngOnInit() {
  }

}
