import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerGComponent } from './server-g.component';

describe('ServerGComponent', () => {
  let component: ServerGComponent;
  let fixture: ComponentFixture<ServerGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
