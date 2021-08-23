import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public characters:any[]=[];

  constructor(
    private homeService:HomeService
  ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.homeService.getCharacters().subscribe((characters:any)=>{
      this.characters=characters
    })    

  }

}
