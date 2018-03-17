import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeWritingComponent } from './joke-writing.component';

describe('JokeWritingComponent', () => {
  let component: JokeWritingComponent;
  let fixture: ComponentFixture<JokeWritingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeWritingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
