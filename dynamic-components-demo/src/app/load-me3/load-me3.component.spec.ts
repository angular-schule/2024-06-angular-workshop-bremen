import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadMe3Component } from './load-me3.component';

describe('LoadMe3Component', () => {
  let component: LoadMe3Component;
  let fixture: ComponentFixture<LoadMe3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadMe3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadMe3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
