import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrakerAppComponent } from './traker-app.component';

describe('TrakerAppComponent', () => {
  let component: TrakerAppComponent;
  let fixture: ComponentFixture<TrakerAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrakerAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrakerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
