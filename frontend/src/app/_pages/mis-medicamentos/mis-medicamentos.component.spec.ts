import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisMedicamentosComponent } from './mis-medicamentos.component';

describe('MisMedicamentosComponent', () => {
  let component: MisMedicamentosComponent;
  let fixture: ComponentFixture<MisMedicamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisMedicamentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MisMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
