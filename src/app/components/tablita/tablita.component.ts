import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TablitasService } from '../../services/tablitas.service';

@Component({
  selector: 'app-tablita',
  templateUrl: './tablita.component.html',
  styleUrls: ['./tablita.component.css'],
})
export class TablitaComponent implements OnInit {
  tercero: any; // aquí guardo el JSON completo
  visibleData: any; // aquí solo lo que quiero mostrar en la tabla

  selectedOption: string = '';
  options = ['TDR', 'OGRH', 'Anexo_09', 'Anexo_14'];

  constructor(
    private route: ActivatedRoute,
    private _tablitasService: TablitasService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this._tablitasService.getTercerosItem(id).subscribe((data: any) => {
        this.tercero = data; // 🔹 JSON completo para usar en el botón
        this.visibleData = {
          item: data.ITEM,
          name: data.APELLIDOS_Y_NOMBRES,
          description: data['DENOMINACIÓN_DE_LA_CONTRATACIÓN'],
          fec_ini: data.FECHA_DE_INICIO_DE_SERVICIO,
          fec_fin: data.FECHA_FIN_CONTRATO,
        };
      });
    }
  }

  ejecutarMetodo() {
    console.log('Ejecutando con opción:', this.selectedOption);

    if (this.selectedOption === 'TDR') {
      this._tablitasService.getPdfTDR(this.tercero.ITEM).subscribe({
        next: (blob: Blob) => {
          // Crear URL del blob y abrir en nueva ventana
          const url = window.URL.createObjectURL(blob);
          window.open(url);
        },
        error: (error) => {
          console.error('Error al obtener el PDF:', error);
          // Aquí puedes agregar manejo de errores (por ejemplo, mostrar un mensaje al usuario)
        },
      });
    }
    if (this.selectedOption === 'OGRH') {
      this._tablitasService.getPdfOGRH(this.tercero.ITEM).subscribe({
        next: (blob: Blob) => {
          // Crear URL del blob y abrir en nueva ventana
          const url = window.URL.createObjectURL(blob);
          window.open(url);
        },
        error: (error) => {
          console.error('Error al obtener el PDF:', error);
          // Aquí puedes agregar manejo de errores (por ejemplo, mostrar un mensaje al usuario)
        },
      });
    } else {
      console.log('Usando todo el JSON:', this.tercero);
      // Aquí el código para las otras opciones
    }
  }
}
