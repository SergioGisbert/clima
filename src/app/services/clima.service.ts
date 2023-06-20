import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url = 'http://api.openweathermap.org/data/2.5/weather?appid=';
  key = 'd866c1fa9ad8da20402f61636e3b8567';
  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any>{
    const URL = this.url + this.key + '&q=' + ciudad;
    return this.http.get(URL);
  }
}
