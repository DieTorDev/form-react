import styled from 'styled-components';

const StyledMainContainer = styled.main`
	width: 100%;
	height: 100vh;
	padding-inline: 24px;
	padding-top: 88px;

	@media (min-width: 992px) {
		max-width: 1440px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 45px;
		margin: auto;
		padding-top: 0;
	}
`;

export { StyledMainContainer };
