import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadMe2Component } from './load-me2.component';

describe('LoadMe2Component', () => {
  let component: LoadMe2Component;
  let fixture: ComponentFixture<LoadMe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadMe2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadMe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
