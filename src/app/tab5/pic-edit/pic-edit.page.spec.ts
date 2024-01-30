import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PicEditPage } from './pic-edit.page';

describe('PicEditPage', () => {
  let component: PicEditPage;
  let fixture: ComponentFixture<PicEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PicEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
