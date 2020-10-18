import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlControlsComponent } from './html-controls.component';

describe('HtmlControlsComponent', () => {
  let component: HtmlControlsComponent;
  let fixture: ComponentFixture<HtmlControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
