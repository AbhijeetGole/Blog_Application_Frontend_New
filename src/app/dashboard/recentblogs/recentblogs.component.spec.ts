import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentblogsComponent } from './recentblogs.component';

describe('RecentblogsComponent', () => {
  let component: RecentblogsComponent;
  let fixture: ComponentFixture<RecentblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentblogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
