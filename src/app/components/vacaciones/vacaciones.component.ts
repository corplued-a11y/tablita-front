import { Component } from '@angular/core';
import { TablitasService } from '../../services/tablitas.service';

@Component({
  selector: 'app-vacaciones',
  templateUrl: './vacaciones.component.html',
  styleUrls: ['./vacaciones.component.css']
})
export class VacacionesComponent {
  id: string = ''; // bind con el input
  listvacacion: any[] = []; // objeto donde guardaremos la info de la API

  constructor(private _tablitasService: TablitasService) {}

  buscar() {
    if(this.id.trim() !== '') {
      this._tablitasService.getVacacion(this.id).subscribe((data: any[]) => {
        this.listvacacion = data;
      }); 
    } else {
      this.listvacacion = []; // si no hay id, limpiar la lista
    }
  }
}
