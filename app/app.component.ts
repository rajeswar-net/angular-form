import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['styles.scss','app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  /* Sample Kendo Form */
  public min: Date = new Date(1917, 0, 1);
  public max: Date = new Date(2020, 4, 31);
  public format = 'MM/dd/yyyy HH:mm';

  AppVersion: string | undefined;
  APIVersion: string | undefined

  public documentTypeList: Array<{ text: string; value: number }> = [
    { text: 'NC Absentee Request Form', value: 1 },
    { text: 'Test Form 1', value: 2 },
    { text: 'Test Form 2', value: 3 },
  ];

  public registrationSourceList: Array<{ text: string; value: number }> = [
    { text: 'Registration Source 1', value: 1 },
    { text: 'Registration Source 2', value: 2 },
    { text: 'Registration Source 3', value: 3 },
  ];

  public electionList: Array<{ text: string; value: number }> = [
    { text: '11/03/2020', value: 1 },
    { text: '10/01/2020', value: 2 },
    { text: '04/04/2020', value: 3 },
  ];

  public scannerList: Array<{ text: string; value: number }> = [
    { text: 'Lex Mark Scanner', value: 1 },
    { text: 'Scanner 2', value: 2 },
    { text: 'Scanner 3', value: 3 },
  ];
  public registerForm: FormGroup = new FormGroup({
    scanner: new FormControl(),
    documentCount: new FormControl(),
    documentType: new FormControl(),
    registrationSource: new FormControl(),
    idProvided: new FormControl(),
    requestDateOverride: new FormControl(),
    requestDate: new FormControl(new Date(2000, 10, 10)),
    election: new FormControl(),
  });

  public submitForm(): void {
    this.registerForm.markAllAsTouched();
  }

  public clearForm(): void {
    this.registerForm.reset();
  }
  constructor() {}
}
