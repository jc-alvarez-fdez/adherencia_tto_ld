import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { MiMedicamento } from '../_interfaces/medicamento.interface';

@Injectable({
  providedIn: 'root'
})
export class MisMedicamentosService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'mis_medicamentos/'
   }

   getMisMedicamentos(): Observable<MiMedicamento[]> {
    return this.http.get<MiMedicamento[]>(`${this.myAppUrl}${this.myApiUrl}`)
   }
}
