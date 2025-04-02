import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingAppbarComponent } from './floating-appbar.component';

describe('FloatingAppbarComponent', () => {
  let component: FloatingAppbarComponent;
  let fixture: ComponentFixture<FloatingAppbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingAppbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingAppbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
