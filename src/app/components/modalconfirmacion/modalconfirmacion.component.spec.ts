import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalconfirmacionComponent } from './modalconfirmacion.component';

describe('ModalconfirmacionComponent', () => {
  let component: ModalconfirmacionComponent;
  let fixture: ComponentFixture<ModalconfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalconfirmacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalconfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
