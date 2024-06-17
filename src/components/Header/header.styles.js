import styled from 'styled-components';

const StyledHeader = styled.header`
	text-align: center;
	color: white;
`;

const StyledTitle = styled.h1`
	font-size: 28px;
	font-weight: bold;
	line-height: 36px;
	letter-spacing: -0.29px;
	padding-inline: 68px;

	@media (min-width: 992px) {
		font-size: 50px;
		line-height: 46px;
		padding-inline: 40px;
	}
`;

const StyledText = styled.p`
	font-size: 16px;
	font-weight: medium;
	line-height: 26px;
`;

export { StyledHeader, StyledTitle, StyledText };
