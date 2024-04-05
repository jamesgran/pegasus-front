import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearOportunidadComponent } from './crear-oportunidad.component';

describe('CrearOportunidadComponent', () => {
  let component: CrearOportunidadComponent;
  let fixture: ComponentFixture<CrearOportunidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearOportunidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearOportunidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
