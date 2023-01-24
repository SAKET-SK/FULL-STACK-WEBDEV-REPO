import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfComponent } from './tdf.component';

describe('TdfComponent', () => {
  let component: TdfComponent;
  let fixture: ComponentFixture<TdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
