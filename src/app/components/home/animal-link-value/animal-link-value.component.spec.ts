import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalLinkValueComponent } from './animal-link-value.component';

describe('AnimalLinkValueComponent', () => {
  let component: AnimalLinkValueComponent;
  let fixture: ComponentFixture<AnimalLinkValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalLinkValueComponent]
    });
    fixture = TestBed.createComponent(AnimalLinkValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
