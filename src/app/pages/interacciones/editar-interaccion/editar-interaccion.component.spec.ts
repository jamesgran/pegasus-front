import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInteraccionComponent } from './editar-interaccion.component';

describe('EditarInteraccionComponent', () => {
  let component: EditarInteraccionComponent;
  let fixture: ComponentFixture<EditarInteraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarInteraccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarInteraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
