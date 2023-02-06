import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyColorComponent } from './my-color.component';

describe('MyColorComponent', () => {
  let component: MyColorComponent;
  let fixture: ComponentFixture<MyColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
