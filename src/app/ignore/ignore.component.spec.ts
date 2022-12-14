import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgnoreComponent } from './ignore.component';

describe('IgnoreComponent', () => {
  let component: IgnoreComponent;
  let fixture: ComponentFixture<IgnoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgnoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IgnoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
