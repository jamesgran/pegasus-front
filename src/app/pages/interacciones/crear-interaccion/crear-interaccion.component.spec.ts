import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearInteraccionComponent } from './crear-interaccion.component';

describe('CrearInteraccionComponent', () => {
  let component: CrearInteraccionComponent;
  let fixture: ComponentFixture<CrearInteraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearInteraccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearInteraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
