import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmplooyeComponent } from './create-emplooye.component';

describe('CreateEmplooyeComponent', () => {
  let component: CreateEmplooyeComponent;
  let fixture: ComponentFixture<CreateEmplooyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmplooyeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmplooyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
