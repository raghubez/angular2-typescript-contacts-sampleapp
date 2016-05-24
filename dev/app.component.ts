import {Component} from 'angular2/core';
import {ContactListComponent} from './contacts/contact-list.component'
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {NewContactComponent} from './contacts/new-contact.component'

@Component({
    selector: 'my-app',
    template: `
    	<header>
	    	<nav>
	    		<a [routerLink]="['Contacts']">Contacts</a>
	    		<a [routerLink]="['NewContact']">New Contact</a>	
	    	</nav>
    	</header>
    	<div class = "main">
    		<router-outlet></router-outlet>
    	</div>
        
    `,
    directives:[ContactListComponent,ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path:'/contacts', name:'Contacts', component: ContactListComponent, useAsDefault: true},
	{path:'/newcontact', name:'NewContact', component: NewContactComponent},
    {path:'/newcontact/:lastName', name:'NewContactFromContacts', component: NewContactComponent}

])
export class AppComponent {
	
}