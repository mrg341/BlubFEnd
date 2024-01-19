import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subtab12Page } from './subtab1.2.page';

describe('Subtab12Page', () => {
  let component: Subtab12Page;
  let fixture: ComponentFixture<Subtab12Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Subtab12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
