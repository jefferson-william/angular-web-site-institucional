import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NossaVisaoComponent } from './nossa-visao.component';

describe('NossaVisaoComponent', () => {
  let component: NossaVisaoComponent;
  let fixture: ComponentFixture<NossaVisaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NossaVisaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NossaVisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
