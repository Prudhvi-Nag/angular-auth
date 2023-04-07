import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EidtComponent } from './eidt.component';

describe('EidtComponent', () => {
  let component: EidtComponent;
  let fixture: ComponentFixture<EidtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EidtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EidtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
