import { Component, OnInit } from '@angular/core';
import { MisMedicamentosService } from '../../_services/mis-medicamentos.service';

@Component({
  selector: 'app-mis-medicamentos',
  standalone: true,
  imports: [],
  templateUrl: './mis-medicamentos.component.html',
  styleUrl: './mis-medicamentos.component.scss'
})
export class MisMedicamentosComponent implements OnInit {


  constructor(private _misMedicamentos: MisMedicamentosService) {}

  ngOnInit(): void {
    this.getMisMedicamentos();
  }

  getMisMedicamentos(){
    this._misMedicamentos.getMisMedicamentos().subscribe(data => {
      console.log(data);
    })
  }

}
