import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacacionesListadoComponent } from './vacaciones-listado.component';

describe('VacacionesListadoComponent', () => {
  let component: VacacionesListadoComponent;
  let fixture: ComponentFixture<VacacionesListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacacionesListadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacacionesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
