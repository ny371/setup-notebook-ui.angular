import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsTabsComponent } from './sessions-tabs.component';

describe('SessionsTabsComponent', () => {
  let component: SessionsTabsComponent;
  let fixture: ComponentFixture<SessionsTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionsTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
