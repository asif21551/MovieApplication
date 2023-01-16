import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaymovieComponent } from './playmovie.component';

describe('PlaymovieComponent', () => {
  let component: PlaymovieComponent;
  let fixture: ComponentFixture<PlaymovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaymovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaymovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
