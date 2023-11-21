import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrgamalComponent } from './drgamal.component';

describe('DrgamalComponent', () => {
  let component: DrgamalComponent;
  let fixture: ComponentFixture<DrgamalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrgamalComponent]
    });
    fixture = TestBed.createComponent(DrgamalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
