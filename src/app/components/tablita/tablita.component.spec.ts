import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablitaComponent } from './tablita.component';

describe('TablitaComponent', () => {
  let component: TablitaComponent;
  let fixture: ComponentFixture<TablitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablitaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
