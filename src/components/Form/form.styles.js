import styled from 'styled-components';

const StyledFormContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 24px;
	margin-top: 64px;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 24px;
	background-color: white;
	border-radius: 10px;
	box-shadow: 0px 8px 0px 0px rgb(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
	padding-left: 20px;
	height: 56px;
	border: 2px solid #dedede;
	border-radius: 6px;
	color: #3d3b35;
	font-family: 'Poppins', sans-serif;
	font-size: 14px;
	font-weight: bold;
	letter-spacing: 0.25px;
`;

const StyledSubmit = styled(StyledInput)`
	background-color: #38cc8b;
	color: white;
	border: none;
	box-shadow: 0px 8px 0px 0px #2b9f6c;
`;

export { StyledFormContainer, StyledForm, StyledInput, StyledSubmit };
