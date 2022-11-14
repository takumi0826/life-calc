import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalAgeComponent } from './animal-age.component';

describe('AnimalAgeComponent', () => {
  let component: AnimalAgeComponent;
  let fixture: ComponentFixture<AnimalAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalAgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
