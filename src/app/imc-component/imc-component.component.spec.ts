import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcComponentComponent } from './imc-component.component';

describe('ImcComponentComponent', () => {
  let component: ImcComponentComponent;
  let fixture: ComponentFixture<ImcComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImcComponentComponent]
    });
    fixture = TestBed.createComponent(ImcComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
