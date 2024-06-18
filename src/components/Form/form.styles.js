import { css, styled } from 'styled-components';

const StyledFormContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 24px;
	margin-top: 64px;
	@media (min-width: 992px) {
		width: 1440px;
		height: 90vh;
		margin-block: 40px;
		justify-content: center;
	}
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 24px;
	background-color: white;
	border-radius: 10px;
	box-shadow: 0px 8px 0px 0px rgb(0, 0, 0, 0.2);

	@media (min-width: 992px) {
		padding: 40px;
		gap: 20px;
	}
`;

const StyledInputContainer = styled.div`
	width: 100%;
	position: relative;
	${({ $isValid }) =>
		!$isValid &&
		css`
			&::after {
				content: '!';
				position: absolute;
				width: 25px;
				height: 25px;
				background-color: #ff7979;
				color: white;
				border-radius: 50%;
				text-align: center;
				right: 20px;
				transform: translateY(50%);
			}
		`}
`;

const StyledInput = styled.input`
	padding-left: 20px;
	width: 100%;
	height: 56px;
	border: 2px solid ${({ $isValid }) => ($isValid ? '#dedede' : '#FF7979')};
	border-radius: 6px;
	color: #3d3b35;
	font-family: 'Poppins', sans-serif;
	font-size: 14px;
	font-weight: bold;
	letter-spacing: 0.25px;
	position: relative;
`;

const StyledSubmit = styled(StyledInput)`
	background-color: #38cc8b;
	color: white;
	border: none;
	box-shadow: 0px 8px 0px 0px #2b9f6c;
	cursor: pointer;
`;

export {
	StyledFormContainer,
	StyledForm,
	StyledInput,
	StyledSubmit,
	StyledInputContainer
};
