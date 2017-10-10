import { BrowserModule,Title  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { HttpModule } from '@angular/http';
import { RoundPipe } from './app.roundPipe';
import { ShareDataService } from './share-data.service';
const appRoutes: Routes = [
  { path: 'lists', component: ListsComponent },
  { path: 'favourites', component: FavouritesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    FavouritesComponent,
    RoundPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [Title,ShareDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
