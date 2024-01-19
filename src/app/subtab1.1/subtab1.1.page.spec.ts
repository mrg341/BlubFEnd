import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subtab11Page } from './subtab1.1.page';

describe('Subtab11Page', () => {
  let component: Subtab11Page;
  let fixture: ComponentFixture<Subtab11Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Subtab11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
