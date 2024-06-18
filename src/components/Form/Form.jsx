import { useState } from 'react';
import Banner from '../Banner/Banner';
import {
	StyledForm,
	StyledFormContainer,
	StyledInput,
	StyledInputContainer,
	StyledSubmit
} from './form.styles';
import { INPUT_INFO } from '../../constants/input-info';

const Form = () => {
	const [formData, setFormData] = useState({
		name: '',
		lastname: '',
		email: '',
		password: '',
		errors: {
			name: true,
			lastname: true,
			email: true,
			password: true
		}
	});

	console.log(formData);

	return (
		<StyledFormContainer>
			<Banner />
			<StyledForm onClick={event => handleSubmit(event)}>
				{INPUT_INFO.map(input => (
					<StyledInputContainer
						key={input.id}
						$isValid={formData.errors[input.name]}
					>
						<StyledInput
							onChange={event =>
								changeFormValues(event.target, formData, setFormData)
							}
							{...input}
							$isValid={formData.errors[input.name]}
						/>
					</StyledInputContainer>
				))}
				<StyledSubmit type='submit' value='CLAIM YOUR FREE TRIAL' />
			</StyledForm>
		</StyledFormContainer>
	);
};

const handleSubmit = event => event.preventDefault();

const validateForm = (name, value, formData, setFormData) => {
	const formatedValue = value.trim();
	const regexName = /^[a-zA-ZñÑ]+$/;
	const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
	const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

	if (name === 'name') {
		const isValidName = regexName.test(formatedValue);
		setFormData({
			...formData,
			[name]: value,
			errors: { ...formData.errors, name: isValidName }
		});
	} else if (name === 'lastname') {
		const isValidLastname = regexName.test(formatedValue);
		setFormData({
			...formData,
			[name]: value,
			errors: { ...formData.errors, lastname: isValidLastname }
		});
	} else if (name === 'email') {
		const isValidEmail = regexEmail.test(formatedValue);
		setFormData({
			...formData,
			[name]: value,
			errors: { ...formData.errors, email: isValidEmail }
		});
	} else if (name === 'password') {
		const isValidPassword = regexPassword.test(formatedValue);
		setFormData({
			...formData,
			[name]: value,
			errors: { ...formData.errors, password: isValidPassword }
		});
	}
};

const changeFormValues = (input, formData, setFormData) => {
	const { name, value } = input;
	console.log(name);
	validateForm(name, value, formData, setFormData);
};

export default Form;
