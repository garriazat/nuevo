import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablainformacionComponent } from './tablainformacion.component';

describe('TablainformacionComponent', () => {
  let component: TablainformacionComponent;
  let fixture: ComponentFixture<TablainformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablainformacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablainformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
