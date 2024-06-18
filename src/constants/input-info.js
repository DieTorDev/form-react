import { v4 } from 'uuid';

export const INPUT_INFO = [
	{
		id: v4(),
		name: 'name',
		placeholder: 'First Name',
		type: 'text'
	},
	{ id: v4(), name: 'lastname', placeholder: 'Last Name', type: 'text' },
	{ id: v4(), name: 'email', placeholder: 'Email Address', type: 'email' },
	{ id: v4(), name: 'password', placeholder: 'Password', type: 'password' }
];
