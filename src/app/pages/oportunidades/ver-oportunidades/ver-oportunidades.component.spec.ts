import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerOportunidadesComponent } from './ver-oportunidades.component';

describe('VerOportunidadesComponent', () => {
  let component: VerOportunidadesComponent;
  let fixture: ComponentFixture<VerOportunidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerOportunidadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerOportunidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
