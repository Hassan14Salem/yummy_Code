import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredMenuComponent } from './ingred-menu.component';

describe('IngredMenuComponent', () => {
  let component: IngredMenuComponent;
  let fixture: ComponentFixture<IngredMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
