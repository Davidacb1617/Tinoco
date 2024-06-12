import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdidasInterfaces } from '../interfaces/adidas.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:3000/shoes';

  createAdidasComponent<T>(item: T): Observable<AdidasInterfaces> {
    return this.http.post<AdidasInterfaces>(`${this.url}`, item);
  }

  updateAdidasComponent(
    id: string,
    item: AdidasInterfaces
  ): Observable<AdidasInterfaces> {
    return this.http.patch<AdidasInterfaces>(
      `${this.url}/adidas-component/${id}`,
      item
    );
  }

  deleteAdidasComponent(id: string): Observable<AdidasInterfaces> {
    return this.http.delete<AdidasInterfaces>(
      `${this.url}/adidas-component/${id}`
    );
  }

  getAdidasComponents(): Observable<AdidasInterfaces[]> {
    return this.http.get<AdidasInterfaces[]>(`${this.url}/shoes`);
  }
}
