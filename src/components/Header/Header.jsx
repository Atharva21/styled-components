import React, { useState } from 'react';
import {
	Container,
	HamburgerButton,
	StyledHeader,
} from '../../styles/StyledElements';
import styled from 'styled-components';
import Navbar from './Navbar';
import Logo from './Logo';
import Hamburger from '../UI/Hamburger';
import { Link } from 'react-router-dom';

const HeaderContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media (min-width: ${({ theme }) => theme.breakpoints.small}) {
		/* ! 600px or greater. */
		flex-direction: row;
		justify-content: space-between;
	}
`;

const HiddenHamburgerButton = styled(HamburgerButton)`
	display: hidden;
	@media (min-width: ${({ theme }) => theme.breakpoints.small}) {
		/* ! 600px or greater. */
		display: none;
	}
`;

const HeaderControls = styled.div`
	display: flex;
	flex-direction: row;
	flex-grow: 1;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	@media (min-width: ${({ theme }) => theme.breakpoints.small}) {
		/* ! 600px or greater. */
		width: auto;
	}
`;

const Header = () => {
	const [navOpen, setNavOpen] = useState(false);

	const toggleNavOpen = () => setNavOpen((prev) => !prev);

	return (
		<StyledHeader>
			<HeaderContainer>
				<HeaderControls>
					<HiddenHamburgerButton />
					<Link to="/">
						<Logo />
					</Link>
					<Hamburger onClick={toggleNavOpen} />
				</HeaderControls>
				<Navbar navOpen={navOpen} />
			</HeaderContainer>
		</StyledHeader>
	);
};

export default Header;
