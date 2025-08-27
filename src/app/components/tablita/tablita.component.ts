import { Component, IterableDiffers } from '@angular/core';
import { TablitasService } from '../../services/tablitas.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-tablita',
  templateUrl: './tablita.component.html',
  styleUrl: './tablita.component.css',
})
export class TablitaComponent {
  htmlRenderizado: SafeHtml = '';

  item: string = '';
  contratos: any[] = [];
  constructor(
    private tablitasService: TablitasService,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  htmlBase = '';
  private reemplazarcampos(html: string, datos: any): string {
    let result = html;
    for (const key in datos) {
      if (datos.hasOwnProperty(key)) {
        const regex = new RegExp(`{{${key}}}`, 'g');
        result = result.replace(regex, datos[key] ?? '');
      }
    }
    return result;
  }

  buscar() {
    if (this.item.trim() !== '') {
      this.tablitasService
        .getContratoporItem(this.item)
        .subscribe((data: any[]) => {
          console.log(data);
          this.contratos = data;
          if (this.contratos.length) {
            //this.cargarPLantillayReemplazar(this.contratos[0]);
          }
        });
    } else {
      alert('Ingrese un dato');
    }
  }
  //metodos que generan excel y pdf
  /*   descargarExcel() {
    if (!this.item) return;
    this.tablitasService.generarExcel(this.item).subscribe((blob) => {
      this.descargarArchivo(blob, 'reporte.xlsx');
    });
  } */

  /*   descargarPDF() {
    if (!this.item) return;
    this.tablitasService.generarPDF(this.item).subscribe((blob) => {
      this.descargarArchivo(blob, 'reporte.pdf');
    });
  } */

  private descargarArchivo(blob: Blob, nombre: string) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = nombre;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  generarReportes() {
    if (this.item.trim() !== '') {
      this.tablitasService.generarReportes(this.item).subscribe({
        next: (res) => {
          alert(res.mensaje); // Mensaje desde backend
        },
        error: (err) => {
          alert('Error al generar reportes frontend');
          console.error(err);
        },
      });
    }
  }
}
