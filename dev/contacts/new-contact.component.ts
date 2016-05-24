import {Component} from 'angular2/core';
import {ContactService} from './contact.service';
import {Contact} from './contact';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {OnInit} from 'angular2/core';

@Component({
	
	template:`
	<div>
		<label for="firstName">First Name:</label>
		<input type="text" id="first-name" #firstName value="{{passedFirstName}}">  
	</div>
	<div>
		<label for="lastName">Last Name:</label>
		<input type="text" id="last-name" #lastName value="{{passedLastName}}">  
	</div>
	<div>
		<label for="phoneNumber">Phone:</label>
		<input type="text" id="phone-number" #phoneNumber>  
	</div>
	<div>
		<label for="email">Email:</label>
		<input type="text" id="email" #email>  
	</div>
	<button (click)="onAddContact(firstName.value, lastName.value, phoneNumber.value, email.value)">Create Contact</button>
	`,
	providers: [ContactService],
	styles: [`
		label{
			display:inline-block;
			width:120px
		}
		input{
			width:200px;
		}
	`]
	
})

export class NewContactComponent implements OnInit
{
	public passedLastName = '';
	public passedFirstName = '';

	constructor(private _contactService: ContactService, private _router:Router, 
		private _routeParams:RouteParams ){}

	onAddContact(firstName,lastName,phoneNumber,email) {
		let contact: Contact = {firstName:firstName,lastName:lastName,
			phoneNumber:phoneNumber,email:email}
		this._contactService.insertContact(contact);
		this._router.navigate(['Contacts']);
	}

	ngOnInit():any {
		this.passedLastName = this._routeParams.get('lastName');
		this.passedFirstName = this._routeParams.get('firstName');
	}
	
}