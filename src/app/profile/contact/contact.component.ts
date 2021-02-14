import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import { ProfileService } from '../profile.service';
import { SnotifyService } from 'ng-snotify';
import { environment } from '../../../environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
  export class ContactComponent implements OnInit {
 
    model: any = {};

    noWhitespaceValidator(control: FormControl) {
      const isWhitespace = (control.value || '').trim().length === 0;
      const isValid = !isWhitespace;
      return isValid ? null : { whitespace: true };
    }

    contactUsForm: FormGroup = new FormGroup({
      name: new FormControl("", [Validators.required]),
      subject: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.pattern(/([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]),
      mobile_number: new FormControl("", [ Validators.required, 
        Validators.minLength(6),
        this.noWhitespaceValidator,
        Validators.maxLength(18),
        Validators.pattern(/[+]?[0-9]{10,13}$/)
      ]),
      message: new FormControl("", [
        Validators.required,
        Validators.maxLength(2000),
        Validators.minLength(5)
      ])
    });
  
    constructor(
      private http: HttpClient,
      private snotify: SnotifyService
    ){}
  
    ngOnInit() {}
    
    onSubmit(name, subject, email, message) {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mwkwpzve',
        { name: name, subject: subject, replyto: email, message: message },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
    }  

    onSubmitContactUsForm(){
      const formData = this.contactUsForm.value;

      if(this.contactUsForm.valid){
        console.log(formData)
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.http.post('https://formspree.io/f/xbjpelga',
        { name: formData.name, subject: formData.subject, replyto: formData.email, mobile: formData.mobile_number, message: formData.message },
        { 'headers': headers }).subscribe(
          response => {
            // console.log(response);
            alert("Form submitted successfully!")
            this.contactUsForm.reset();
          })
      }else{
        alert("Please enter valid data in form.")
      }
    }
}
