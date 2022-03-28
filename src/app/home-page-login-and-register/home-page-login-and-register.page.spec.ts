import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePageLoginAndRegisterPage } from './home-page-login-and-register.page';

describe('HomePageLoginAndRegisterPage', () => {
  let component: HomePageLoginAndRegisterPage;
  let fixture: ComponentFixture<HomePageLoginAndRegisterPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageLoginAndRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageLoginAndRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
