import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrudAngularComponent } from './grud-angular.component';

describe('GrudAngularComponent', () => {
  let component: GrudAngularComponent;
  let fixture: ComponentFixture<GrudAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrudAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrudAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
