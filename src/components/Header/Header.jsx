import { StyledHeader, StyledTitle } from './header.styles';

const Header = () => {
	return (
		<StyledHeader>
			<StyledTitle>Learn to code by watching others</StyledTitle>
			<p>
				See how experienced developers solve problems in real-time. Watching
				scripted tutorials is great, but understanding how developers think is
				invaluable.{' '}
			</p>
		</StyledHeader>
	);
};

export default Header;
