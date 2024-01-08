import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreMenuComponent } from './are-menu.component';

describe('AreMenuComponent', () => {
  let component: AreMenuComponent;
  let fixture: ComponentFixture<AreMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
