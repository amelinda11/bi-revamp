import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAreaComponent } from './list-area.component';

describe('ListAreaComponent', () => {
  let component: ListAreaComponent;
  let fixture: ComponentFixture<ListAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
