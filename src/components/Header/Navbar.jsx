import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
	display: ${({ navOpen }) => (navOpen ? 'block' : 'none')};
	width: 100%;
	margin-top: 1rem;
	@media (min-width: ${({ theme }) => theme.breakpoints.small}) {
		/* ! 600px or greater. */
		width: auto;
		display: block;
		margin-top: 0;
	}
`;

const NavList = styled.ul`
	padding: 0;
	margin: 0;
	list-style: none;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: ${({ theme }) => theme.breakpoints.small}) {
		/* ! 600px or greater. */
		flex-direction: row;
		justify-content: space-between;
	}
`;

const ListItem = styled.li`
	color: white;
	font-size: 1.1rem;
	text-transform: uppercase;
	a {
		text-decoration: none;
		color: white;
	}
	a:hover,
	a:focus,
	a:active {
		cursor: pointer;
		color: ${({ theme }) => theme.colors.secondary};
	}
	a.active {
		color: ${({ theme }) => theme.colors.secondary};
	}

	& + & {
		margin-top: 1rem;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.small}) {
		/* ! 600px or greater. */
		& + & {
			margin-top: 0;
			margin-left: 1.5rem;
		}
	}
`;

const SpecialListItem = styled(ListItem)`
	padding: 0.3rem 1.2rem;
	background-color: ${({ theme }) => theme.colors.secondary};
	border-radius: 100rem;
	a {
		color: black;
	}
	&:hover {
		transform: scale(1.1);
	}
	a:hover,
	a:focus,
	a:active {
		color: ${({ theme }) => theme.colors.primary};
	}
	a.active {
		color: ${({ theme }) => theme.colors.primary};
	}
`;

const Navbar = ({ navOpen }) => {
	return (
		<StyledNavbar navOpen={navOpen}>
			<NavList>
				<ListItem>
					<NavLink
						to="/home"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						home
					</NavLink>
				</ListItem>
				<ListItem>
					<NavLink
						to="/about"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						about
					</NavLink>
				</ListItem>
				<ListItem>
					<NavLink
						to="/contact"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						contact
					</NavLink>
				</ListItem>
				<ListItem>
					<NavLink
						to="/signin"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						sign in
					</NavLink>
				</ListItem>
				<SpecialListItem>
					<NavLink
						to="/signup"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						sign up
					</NavLink>
				</SpecialListItem>
			</NavList>
		</StyledNavbar>
	);
};

export default Navbar;
