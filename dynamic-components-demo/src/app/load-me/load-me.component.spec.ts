import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadMeComponent } from './load-me.component';

describe('LoadMeComponent', () => {
  let component: LoadMeComponent;
  let fixture: ComponentFixture<LoadMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
