import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpisComponent } from './spis.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('SpisComponent', () => {
  let component: SpisComponent;
  let fixture: ComponentFixture<SpisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ SpisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
