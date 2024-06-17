import { v4 } from 'uuid';

export const INPUT_INFO = [
	{
		id: v4(),
		name: 'name',
		placeholder: 'First Name'
	},
	{ id: v4(), name: 'lastname', placeholder: 'Last Name' },
	{ id: v4(), name: 'email', placeholder: 'Email Address' },
	{ id: v4(), name: 'password', placeholder: 'Password' }
];
