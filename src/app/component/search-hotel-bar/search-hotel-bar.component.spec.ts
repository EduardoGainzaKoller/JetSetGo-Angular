import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHotelBarComponent } from './search-hotel-bar.component';

describe('SearchHotelBarComponent', () => {
  let component: SearchHotelBarComponent;
  let fixture: ComponentFixture<SearchHotelBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchHotelBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchHotelBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
