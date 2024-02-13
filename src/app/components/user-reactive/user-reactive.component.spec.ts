import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReactiveComponent } from './user-reactive.component';

describe('UserReactiveComponent', () => {
  let component: UserReactiveComponent;
  let fixture: ComponentFixture<UserReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserReactiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
