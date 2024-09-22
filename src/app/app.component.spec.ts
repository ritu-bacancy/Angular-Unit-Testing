import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppServiceService } from './serivce/app-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let appService: AppServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, HttpClientTestingModule],
      providers: [AppServiceService]

    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    appService = TestBed.inject(AppServiceService); // Inject the service

  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'angular-unit-testing' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-unit-testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-unit-testing');
  });


  it('Variable stateValue should be state value', () => {
    expect(component.stateValue).toBe('State Value');
  });

  it('Variable stateValue should not be other than state value', () => {
    expect(component.stateValue).not.toBe('hello1');
  });

  it('stateValue variable should start with state', () => {
    const mockState = 'State';
    expect(component.stateValue).toMatch(mockState);
  });

  it('name method should return as per the parameter passed', () => {
    const name = component.name('Ritu');
    expect(name).toBe('Welcome Ritu!');
  });

  it("ArrayList should contain 'first name'.", () => {
    const name = component.arrayList();
    expect(name).toContain('first name');
  });

  it('value of the welcome variable should be a once ngOnInit method have been called', () => {
    component.ngOnInit();
    expect(component.welcome).toContain(component.isLoggedIn);
  });

  it('Object1 and Object2 should have the equal value.', () => {
    expect(component.Object1).toEqual(component.Object2);
  });

  it('should have only 1 value which is a  in isLoggedInArrary', () => {
    const isLoggedInArrary = component.isLoggedInArrary;
    expect(isLoggedInArrary).toEqual(['a']);
  });

  it('stateValueNull should be null initially.', () => {
    expect(component.stateValueNull).toBeNull();
  });

  it('stateValueUndefine should be null initially undefined', () => {
    expect(component.stateValueUndefine).toBeUndefined();
  });
  
  it('toBeNaN variable should not be a number.', () => {
    var toBeNaNValue = component.toBeNaN;
    expect(toBeNaNValue).toBeNaN();
  });

  it("Should contain 'first name' in an array which return by ArrayList method.", () => {
    const name = component.arrayList();
    expect(name).toContain('first name');
  });

  it("arrayList method return array value Should equal to mockArray value.", () => {
    const name = component.arrayList();
    const mockArray = ['first name','last name', 'middle name'];
    expect(name).toEqual(mockArray);
  });

  it('Value of toBeLessThanValue variable should be less than 10.', () => {
    const percent = component.toBeLessThanValue;
    expect(percent).toBeLessThan(10);
  });

  it('Should emit the value once emitToParent method calling.', () => {
    spyOn(component.data, 'emit');
    component.emitToParent();
    expect(component.data.emit).toHaveBeenCalledWith(true);
  });

  it('should call getBreedData and log the result', () => {
    const mockResponse = { message: ['bullmastiff', 'english', 'tibetan'] };

    spyOn(appService, 'getData').and.returnValue(of(mockResponse));
    component.getBreedData();

    expect(appService.getData).toHaveBeenCalled(); // Ensure getData was called
    expect(component.breedData).toEqual(mockResponse);
  });

  it('should call getBreedData and log the result', () => {
    const mockErrorResponse = 'Error';

    spyOn(appService, 'getData').and.returnValue(throwError(() => new Error(mockErrorResponse)));
    component.getBreedData();

    expect(appService.getData).toHaveBeenCalled(); // Ensure getData was called
    expect(component.breedData).toBeNull(); // Or any other expected behavior
  });


});
