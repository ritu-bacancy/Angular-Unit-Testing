import { Component, EventEmitter, Output, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppServiceService } from './serivce/app-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @Output() data = new EventEmitter();

  title = 'angular-unit-testing';
  public stateValue:string = 'State Value';
  public welcome: string = '';
  public isLoggedIn: string = 'a';
  public isLoggedInArrary = ['a'];
  public toBeLessThanValue:number = 5;
  public stateValueNull: string | null = null;
  public stateValueUndefine = undefined;
  public toBeNaN = 0 / 0;
  public breedData:any;
  public Object1 = {
    bath: true,
    bedrooms: 4,
    kitchen: {
      amenities: ['oven', 'stove', 'washer'],
      area: 20,
      wallColor: 'white',
    },
  };
  
 public Object2 = {
    bath: true,
    bedrooms: 4,
    kitchen: {
      amenities: ['oven', 'stove', 'washer'],
      area: 20,
      wallColor: 'white',
    },
  };

  constructor(private appService: AppServiceService) {}

  ngOnInit() {
    this.welcome = this.isLoggedIn;
    this.getBreedData();
  }

  name(name:string) {
    return 'Welcome ' + name + '!';
  }

  arrayList() {
    return ['first name', 'last name', 'middle name'];
  }

  emitToParent() {
    this.data.emit(true);
  }

  public getBreedData() {
    this.appService.getData().subscribe((res) => {
      this.breedData = res;
    },
    (error) => {
      this.breedData = null;
    }
  
  )
  }
 
}
