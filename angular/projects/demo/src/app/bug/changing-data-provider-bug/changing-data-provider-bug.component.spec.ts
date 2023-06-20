import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangingDataProviderBugComponent } from './changing-data-provider-bug.component';

describe('ChangingDataProviderBugComponent', () => {
  let component: ChangingDataProviderBugComponent;
  let fixture: ComponentFixture<ChangingDataProviderBugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangingDataProviderBugComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangingDataProviderBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
