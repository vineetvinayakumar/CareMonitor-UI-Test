import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ItemsService {
  api = 'http://localhost:3000/api/items';

  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get<any[]>(this.api);
  }
}
