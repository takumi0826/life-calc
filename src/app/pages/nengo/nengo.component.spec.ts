import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NengoComponent } from './nengo.component';

describe('NengoComponent', () => {
  let component: NengoComponent;
  let fixture: ComponentFixture<NengoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NengoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NengoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
