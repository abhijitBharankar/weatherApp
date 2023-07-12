import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  searchForm! : FormGroup

  weatherData = {
    cityName : 'Mumbai',
    temp : 26,
    temp_min : 18,
    temp_max : 28,
    humidity : 89,
    wind : 11  
  }

  constructor(private router : Router, private fb : FormBuilder, private api : ApiService){

  }

  ngOnInit(){
    this.searchFormControl()
  }

  searchFormControl(){
    this.searchForm = this.fb.group({
      search : ['mumbai']
    })
  }

  weather(city:any){
    this.api.getWeather(city).subscribe(res=>{
      console.log(res);
      console.log(Object(res).main.humidity);

      this.weatherData.cityName = Object(res).name
      this.weatherData.temp = (Object(res).main.temp - 32) /1.8
      this.weatherData.temp_min = (Object(res).main.temp_min - 32) / 1.8
      this.weatherData.temp_max = (Object(res).main.temp_max - 32)  / 1.8
      this.weatherData.humidity = Object(res).main.humidity
      this.weatherData.wind = Object(res).wind.speed
    })
  }
}
