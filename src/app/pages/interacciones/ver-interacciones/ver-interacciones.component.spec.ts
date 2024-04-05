import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInteraccionesComponent } from './ver-interacciones.component';

describe('VerInteraccionesComponent', () => {
  let component: VerInteraccionesComponent;
  let fixture: ComponentFixture<VerInteraccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerInteraccionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerInteraccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
