import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppExpandareaComponent } from './app-expandarea.component';

describe('AppExpandareaComponent', () => {
  let component: AppExpandareaComponent;
  let fixture: ComponentFixture<AppExpandareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppExpandareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppExpandareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
