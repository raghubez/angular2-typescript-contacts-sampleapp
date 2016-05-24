import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {Contact} from './contact';
import {ContactService} from './contact.service';


@Component({
	selector: "contact",
	template:`
	<div>
		<label for="firstName">First Name:</label>
		<input [(ngModel)]=contact.firstName type="text" id="first-name" #firstName>  
	</div>
	<div>
		<label for="lastName">Last Name:</label>
		<input [(ngModel)]=contact.lastName type="text" id="last-name" #lastName>  
	</div>
	<div>
		<label for="phoneNumber">Phone:</label>
		<input [(ngModel)]=contact.phoneNumber type="text" id="phone-number" #phoneNumber>  
	</div>
	<div>
		<label for="email">Email:</label>
		<input [(ngModel)]=contact.email type="text" id="email" #email>  
	</div>
	<button (click)="onCreateNew()">Create Contact from existing contact</button>
	`,
	inputs: ["contact"],
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

export class ContactComponent {
	public contact: Contact = null;
	constructor (private _router: Router) {}

	onCreateNew() {
		this._router.navigate(['NewContact', {firstName: this.contact.firstName, lastName: this.contact.lastName}])
	}
}