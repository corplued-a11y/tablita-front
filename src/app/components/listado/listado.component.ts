import { Component, OnInit } from '@angular/core';
import { Tercero } from '../../interfaces/tercero';
import { TablitasService } from '../../services/tablitas.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {
  listTerceros: Tercero[] = [];
  allterceros: Tercero[] = []; // para guardar todo
  item: string ='';
  constructor(private _tablitasService: TablitasService) { }

  ngOnInit(): void {
    this.getListTerceros();
  }

    getListTerceros() {
    this._tablitasService.getTerceros().subscribe((data: Tercero[]) => {
      this.listTerceros = data;
      this.allterceros = data; // guardamos todo
    })
  }

  buscar() {
    if (this.item.trim() !== '') {
      this.listTerceros = this.allterceros.filter(t =>
        t.item?.toString()===(this.item) ||
        t.name?.toLowerCase().includes(this.item.toLowerCase()) 
        //t.description?.toLowerCase().includes(this.item.toLowerCase())
      );
    } else {
      this.listTerceros = this.allterceros; // si no hay filtro, mostrar todo
    }
  }

}
