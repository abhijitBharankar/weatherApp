import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiKey = "b63bbf475cmshc401efaf149800ep1964e8jsn41e24704054a"

  baseUrl = "https://api.openweathermap.org/data/2.5/weather?q="

  XRapidAPIKey = "X-RapidAPI-Key"
  XRapidAPIKeyValue = "b63bbf475cmshc401efaf149800ep1964e8jsn41e24704054a" 

  XRapidAPIHost = "X-RapidAPI-Host"
  XRapidAPIHostValue = "open-weather13.p.rapidapi.com"

  // baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}"

  constructor(private httpClient : HttpClient) { }

  getWeather(city: any){
    // let url = "https://api.openweathermap.org/data/2.5/weather"

    let url = "https://open-weather13.p.rapidapi.com/city/" + city

    // let url = "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=9fe50473ffc0001e3e9985e95e32c52d"


    // let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid="+ this.apiKey

    // return this.httpClient.get(url, {
    //   headers: new HttpHeaders()
    //   .set(this.XRapidAPIHost, this.XRapidAPIHostValue)
    //   .set(this.XRapidAPIKey, this.XRapidAPIKeyValue),
    //   params: new HttpParams()
    //   .set("q", city)
    //   .set("appid", this.apiKey)
    //   .set("units", "metric")
    //   .set("mode", "json")
    // })

    return this.httpClient.get(url, {
      headers: new HttpHeaders()
      .set(this.XRapidAPIHost, this.XRapidAPIHostValue)
      .set(this.XRapidAPIKey, this.XRapidAPIKeyValue)
    })



    // return this.httpClient.get(url, 
    //   {
    //     params: new HttpParams()
    //     .set("q", city)
    //     .set("appid", this.apiKey)
    //   })
  }
}
