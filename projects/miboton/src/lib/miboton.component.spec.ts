import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MibotonComponent } from './miboton.component';

describe('MibotonComponent', () => {
  let component: MibotonComponent;
  let fixture: ComponentFixture<MibotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MibotonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MibotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
