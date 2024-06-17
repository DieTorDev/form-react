import Form from '../Form/Form';
import Header from '../Header/Header';
import { StyledMainContainer } from './main-container';

const MainContainer = () => {
	return (
		<StyledMainContainer>
			<Header />
			<Form />
		</StyledMainContainer>
	);
};

export default MainContainer;
