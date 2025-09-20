import { Component, OnInit } from '@angular/core';
import { TablitasService } from '../../services/tablitas.service';

@Component({
  selector: 'app-vacaciones-listado',
  templateUrl: './vacaciones-listado.component.html',
  styleUrl: './vacaciones-listado.component.css',
})
export class VacacionesListadoComponent implements OnInit {
  listVacaciones: any[] = [];
  allVacaciones: any[] = []; 
  item: string = '';
  showTable: boolean = false; // Nueva propiedad para controlar la visibilidad de la tabla
  showCard: boolean = false;
  selectedYear: string = '';
  years: string[] = ['2023', '2024', '2025']; // Puedes ajustar los años según necesites
  selectedDetails: any[] = []; // Modifica la definición de selectedDetails para que sea un array
  isTableExpanded: boolean = true;
  isCardExpanded: boolean = true;
  isResumenExpanded: boolean = true;

  constructor(private _tablitasService: TablitasService) {}

  ngOnInit(): void {
    this.getlistVacaciones();
  }

  getlistVacaciones() {
    this._tablitasService.getVacaciones().subscribe((data: any[]) => {
      this.allVacaciones = data; // Solo guardamos en allVacaciones
      this.listVacaciones = []; // Iniciamos listVacaciones vacío
      this.showTable = false; // Inicialmente la tabla está oculta
    });
  }

  buscar() {
    if (this.item.trim() !== '') {
        this.listVacaciones = this.allVacaciones.filter(t =>
            t.Tipo_Documento_Identidad == this.item ||
            t.ITEM == this.item
        );
        console.log('Datos filtrados:', this.listVacaciones);
        this.showTable = true; // Cambiado a true para mostrar la tabla
        this.showCard = true;
        this.selectedDetails = []; // Limpiamos los detalles anteriores
    } else {
        this.listVacaciones = [];
        this.showTable = false;
        this.showCard = false;
        this.selectedDetails = [];
    }
  }

  onYearChange() {
    console.log('Año seleccionado:', this.selectedYear);
    console.log('Datos disponibles:', this.listVacaciones);

    if (this.selectedYear && this.listVacaciones.length > 0) {
      try {
        this.selectedDetails = this.listVacaciones.filter(item => {
          // Asegurarnos de que las fechas son válidas
          if (!item.Fecha_Inicio || !item.Fecha_Termino || !item.Fecha_Inicio_Contrato) {
            console.log('Registro con fechas faltantes:', item);
            return false;
          }

          // Convertir las fechas de string a Date
          const fechaInicio = this.parseDate(item.Fecha_Inicio);
          const fechaTermino = this.parseDate(item.Fecha_Termino);
          const fechaInicioContrato = this.parseDate(item.Fecha_Inicio_Contrato);

          // Crear fecha base (14 de junio del año seleccionado)
          const fechaBase = new Date(parseInt(this.selectedYear), 5, 14); // Mes 5 es junio (0-based)

          // Crear fecha límite (13 de junio del siguiente año)
          const fechaLimite = new Date(parseInt(this.selectedYear) + 1, 5, 13);

          console.log('Comparando fechas:', {
            inicio: fechaInicio,
            termino: fechaTermino,
            base: fechaBase,
            limite: fechaLimite,
            item: item.Tipo_Documento_Identidad,
            buscado: this.item
          });

          // Verificar si las fechas están en el rango y coincide el documento
          return fechaInicio >= fechaBase && 
                 fechaTermino <= fechaLimite && 
                 item.Tipo_Documento_Identidad.toString() === this.item;
        });

        console.log('Registros filtrados:', this.selectedDetails);
      } catch (error) {
        console.error('Error al filtrar registros:', error);
        this.selectedDetails = [];
      }
    } else {
      this.selectedDetails = [];
    }
  }

  // Método auxiliar para convertir string fecha a Date
  private parseDate(dateStr: string): Date {
    const [day, month, year] = dateStr.split('/').map(num => parseInt(num));
    return new Date(year, month - 1, day); // Mes es 0-based en JavaScript
  }

  toggleTable() {
    this.isTableExpanded = !this.isTableExpanded;
  }

  toggleCard() {
    this.isCardExpanded = !this.isCardExpanded;
  }

  toggleResumen() {
    this.isResumenExpanded = !this.isResumenExpanded;
  }
}
