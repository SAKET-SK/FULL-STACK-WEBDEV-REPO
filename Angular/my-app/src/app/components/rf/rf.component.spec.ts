import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfComponent } from './rf.component';

describe('RfComponent', () => {
  let component: RfComponent;
  let fixture: ComponentFixture<RfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
