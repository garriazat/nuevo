import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalproductonuevoComponent } from './modalproductonuevo.component';

describe('ModalproductonuevoComponent', () => {
  let component: ModalproductonuevoComponent;
  let fixture: ComponentFixture<ModalproductonuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalproductonuevoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalproductonuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
